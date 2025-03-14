import { db } from '../../../shared/databases/drizzle/client'
import { subscriptions } from '../../../shared/databases/drizzle/schemas/subscriptions'

interface ICreateSubscriptionUseCaseProps {
  name: string
  email: string
}

export class CreateSubscriptionUseCase {
  public async execute({ name, email }: ICreateSubscriptionUseCaseProps) {
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
