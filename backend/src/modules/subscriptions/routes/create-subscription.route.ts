import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'

import { CreateSubscriptionUseCase } from '../use-cases/create-subscription'
import {
  createSubscriptionResponse,
  createSubscriptionValidation,
} from '../validations/create-subscription-validation'

const createSubscriptionRoute: FastifyPluginAsyncZod = async app => {
  app.post(
    '/subscriptions',
    {
      schema: {
        summary: 'Subscribes someone to the event',
        tags: ['subscription'],
        body: createSubscriptionValidation,
        response: {
          201: createSubscriptionResponse,
        },
      },
    },
    async (request, reply) => {
      const { name, email, referrer } = request.body
      const createSubscriptionUseCase = new CreateSubscriptionUseCase()
      const subscriber = await createSubscriptionUseCase.execute({
        name,
        email,
        referrer_id: referrer,
      })

      return reply.status(201).send(subscriber)
    }
  )
}

export { createSubscriptionRoute }
