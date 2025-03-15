import { redis } from '@/shared/databases/redis/client'

interface IGetSubscriberInviteClicksParams {
  subscriber_id: string
}

export class GetSubscriberInviteClicksUseCase {
  public async execute({ subscriber_id }: IGetSubscriberInviteClicksParams) {
    const count = await redis.hget('referral:access-count', subscriber_id)

    return {
      count: count ? Number.parseInt(count) : 0,
    }
  }
}
