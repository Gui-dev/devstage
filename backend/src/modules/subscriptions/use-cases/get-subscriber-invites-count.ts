import { redis } from '@/shared/databases/redis/client'

interface IGetSubscriberInvitesCountParams {
  subscriber_id: string
}

export class GetSubscriberInvitesCount {
  public async execute({ subscriber_id }: IGetSubscriberInvitesCountParams) {
    const count = await redis.zscore('referral:ranking', subscriber_id)

    return { count: count ? Number.parseInt(count) : 0 }
  }
}
