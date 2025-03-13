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

import { createSubscriptionRoute } from './modules/subscriptions/routes/create-subscription.route'

const app = fastify().withTypeProvider<ZodTypeProvider>()
const PORT = Number(process.env.PORT) || 3333

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

app.listen({ port: PORT, host: '0.0.0.0' }, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`)
})
