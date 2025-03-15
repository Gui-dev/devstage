import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { GetSubscriberInviteClicksUseCase } from '../use-cases/get-subscriber-invite-clicks'
import {
  getSubscriberInviteClicksResponse,
  getSubscriberInviteClicksValidation,
} from '../validations/get-subscriber-invite-clicks-validation'

const getSubscriberInviteClicksRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriber_id/ranking/clicks',
    {
      schema: {
        summary: 'Get subscriber invite clicks count',
        tags: ['referral'],
        params: getSubscriberInviteClicksValidation,
        response: {
          200: getSubscriberInviteClicksResponse,
        },
      },
    },
    async (request, reply) => {
      const { subscriber_id } = request.params

      const getSubscriberInviteClicksUseCase =
        new GetSubscriberInviteClicksUseCase()
      const count = await getSubscriberInviteClicksUseCase.execute({
        subscriber_id,
      })

      return reply.status(200).send(count)
    }
  )
}

export { getSubscriberInviteClicksRoute }
