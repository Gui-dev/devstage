import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

import { accessInviteLinkRoute } from './modules/subscriptions/routes/access-invite-link.route'
import { createSubscriptionRoute } from './modules/subscriptions/routes/create-subscription.route'
import { getSubscriberInviteClicksRoute } from './modules/subscriptions/routes/get-subscriber-invite-clicks.route'
import { getSubscriberInvitesCountRoute } from './modules/subscriptions/routes/get-subscriber-invites-count.route'
import { env } from './shared/config/env'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Devstage API',
      version: '0.0.1',
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

app.register(createSubscriptionRoute)
app.register(accessInviteLinkRoute)
app.register(getSubscriberInviteClicksRoute)
app.register(getSubscriberInvitesCountRoute)

app.listen({ port: env.PORT, host: '0.0.0.0' }, () => {
  console.log(`HTTP server running on http://localhost:${env.PORT}`)
})
