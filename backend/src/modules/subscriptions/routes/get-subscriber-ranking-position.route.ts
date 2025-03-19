import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { GetSubscriberRankingPositionUseCase } from '../use-cases/get-subscriber-ranking-position'
import {
  getSubscriberRankingPositionResponse,
  getSubscriberRankingPositionValidation,
} from '../validations/get-subscriber-ranking-position-validation'

const getSubscriberRankingPositionRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriber_id/ranking/position',
    {
      schema: {
        summary: 'Get subscriber ranking position',
        tags: ['referral'],
        params: getSubscriberRankingPositionValidation,
        response: {
          200: getSubscriberRankingPositionResponse,
        },
      },
    },
    async (request, reply) => {
      const { subscriber_id } = request.params

      const getSubscriberRankingPositionUseCase =
        new GetSubscriberRankingPositionUseCase()
      const position = await getSubscriberRankingPositionUseCase.execute({
        subscriber_id,
      })

      return reply.status(200).send(position)
    }
  )
}

export { getSubscriberRankingPositionRoute }
