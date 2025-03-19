import { db } from '@/shared/databases/drizzle/client'
import { subscriptions } from '@/shared/databases/drizzle/schemas/subscriptions'
import { redis } from '@/shared/databases/redis/client'
import { inArray } from 'drizzle-orm'

export class GetRankingUseCase {
  public async execute() {
    const ranking = await redis.zrevrange(
      'referral:ranking',
      0,
      2,
      'WITHSCORES'
    )
    const subscriberIdAndScore: Record<string, number> = {}

    for (let i = 0; i < ranking.length; i += 2) {
      subscriberIdAndScore[ranking[i]] = Number.parseInt(ranking[i + 1])
    }

    const subscribers = await db
      .select()
      .from(subscriptions)
      .where(inArray(subscriptions.id, Object.keys(subscriberIdAndScore)))

    const rankingWithScore = subscribers
      .map(subscriber => {
        return {
          id: subscriber.id,
          name: subscriber.name,
          score: subscriberIdAndScore[subscriber.id],
        }
      })
      .sort((subscriber_1, subscriber_2) => {
        return subscriber_2.score - subscriber_1.score
      })

    return {
      ranking: rankingWithScore,
    }
  }
}
