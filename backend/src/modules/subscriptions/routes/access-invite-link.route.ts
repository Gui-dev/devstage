import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { env } from '@/shared/config/env'
import { AccessInviteLinkUseCase } from '../use-cases/access-invite-link'
import {
  accessInviteLinkResponse,
  accessInviteLinkValidation,
} from '../validations/access-invite-link-validation'

const accessInviteLinkRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/invites/:subscriber_id',
    {
      schema: {
        summary: 'Access invite link and redirects user',
        tags: ['referral'],
        params: accessInviteLinkValidation,
        response: {
          302: accessInviteLinkResponse,
        },
      },
    },
    async (request, reply) => {
      const { subscriber_id } = request.params
      const accessInviteLinkUseCase = new AccessInviteLinkUseCase()
      await accessInviteLinkUseCase.execute({ subscriber_id })

      const redirectUrl = new URL(env.WEB_URL)
      redirectUrl.searchParams.set('referrer', subscriber_id)

      return reply.redirect(redirectUrl.toString(), 302)
    }
  )
}

export { accessInviteLinkRoute }
