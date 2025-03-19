import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { GetRankingUseCase } from '../use-cases/get-ranking'
import { getRankingValidationResponse } from '../validations/get-ranking-validation'

const getRankingRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/ranking',
    {
      schema: {
        summary: 'Get  ranking',
        tags: ['referral'],
        response: {
          200: getRankingValidationResponse,
        },
      },
    },
    async (request, reply) => {
      const getRankingUseCase = new GetRankingUseCase()
      const ranking = await getRankingUseCase.execute()

      return reply.status(200).send(ranking)
    }
  )
}

export { getRankingRoute }
