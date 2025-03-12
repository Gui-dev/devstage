import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'

const app = fastify()
const PORT = Number(process.env.PORT) || 3333

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)
app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.listen({ port: PORT, host: '0.0.0.0' }, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`)
})
