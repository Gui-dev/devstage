import { eq } from 'drizzle-orm'

import { db } from '@/shared/databases/drizzle/client'
import { redis } from '@/shared/databases/redis/client'
import { subscriptions } from '../../../shared/databases/drizzle/schemas/subscriptions'

interface ICreateSubscriptionUseCaseProps {
  name: string
  email: string
  referrer_id: string | null | undefined
}

export class CreateSubscriptionUseCase {
  public async execute({
    name,
    email,
    referrer_id,
  }: ICreateSubscriptionUseCaseProps) {
    const subscribers = await db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.email, email))

    if (subscribers.length > 0) {
      return {
        subscriber_id: subscribers[0].id,
      }
    }

    const result = await db
      .insert(subscriptions)
      .values({
        name,
        email,
      })
      .returning()

    if (referrer_id) {
      await redis.zincrby('referral:ranking', 1, referrer_id)
    }

    const subscriber = result[0]

    return {
      subscriber_id: subscriber.id,
    }
  }
}
