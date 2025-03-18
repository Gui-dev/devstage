import { redis } from '@/shared/databases/redis/client'

interface IAccessInviteLinkUseCase {
  subscriber_id: string
}

export class AccessInviteLinkUseCase {
  public async execute({ subscriber_id }: IAccessInviteLinkUseCase) {
    await redis.hincrby('referral:access-count', subscriber_id, 1)
  }
}
