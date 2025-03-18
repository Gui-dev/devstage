import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { GetSubscriberInviteClicksUseCase } from '../use-cases/get-subscriber-invite-clicks'

import { GetSubscriberInvitesCount } from '../use-cases/get-subscriber-invites-count'
import {
  getSubscriberInvitesCountResponse,
  getSubscriberInvitesCountValidation,
} from '../validations/get-subscriber-invites-count-validation'

const getSubscriberInvitesCountRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/subscribers/:subscriber_id/ranking/count',
    {
      schema: {
        summary: 'Get subscriber invites count',
        tags: ['referral'],
        params: getSubscriberInvitesCountValidation,
        response: {
          200: getSubscriberInvitesCountResponse,
        },
      },
    },
    async (request, reply) => {
      const { subscriber_id } = request.params

      const getSubscriberInvitesCount = new GetSubscriberInvitesCount()
      const count = await getSubscriberInvitesCount.execute({
        subscriber_id,
      })

      return reply.status(200).send(count)
    }
  )
}

export { getSubscriberInvitesCountRoute }
