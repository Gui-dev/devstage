import { eq } from 'drizzle-orm'
import { db } from '../../../shared/databases/drizzle/client'
import { subscriptions } from '../../../shared/databases/drizzle/schemas/subscriptions'

interface ICreateSubscriptionUseCaseProps {
  name: string
  email: string
}

export class CreateSubscriptionUseCase {
  public async execute({ name, email }: ICreateSubscriptionUseCaseProps) {
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
    const subscriber = result[0]

    return {
      subscriber_id: subscriber.id,
    }
  }
}
