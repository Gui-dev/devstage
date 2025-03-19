import { redis } from '@/shared/databases/redis/client'

interface IGetSubscriberRankingPositionParams {
  subscriber_id: string
}

export class GetSubscriberRankingPositionUseCase {
  public async execute({ subscriber_id }: IGetSubscriberRankingPositionParams) {
    const rank = await redis.zrevrank('referral:ranking', subscriber_id)

    if (rank === null) {
      return {
        position: null,
      }
    }

    return { position: rank + 1 }
  }
}
