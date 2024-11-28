import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastify from 'fastify'
import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { writeFile } from 'node:fs'
import { resolve } from 'node:path'
import { createUser } from './routes/create-user'
import { getUser } from './routes/get-user'
import { getUsers } from './routes/get-users'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifyCors, {
  hook: 'onRequest',
  origin: '*',
  credentials: true,
  allowedHeaders: ['Authorization', 'Content-Type'],
  exposedHeaders: ['Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  maxAge: 600,
  strictPreflight: true,
  optionsSuccessStatus: 204,
  preflightContinue: true,
  logLevel: 'info',
})

app.addHook('onRequest', (req, reply, done) => {
  console.log('req.headers :::: ', req.headers)

  if (
    req.headers['sec-fetch-mode'] &&
    req.headers['sec-fetch-mode'] === 'navigate'
  ) {
    // return reply.code(403);
    console.log('sec-fetch-mode :::: ', 'navigate')
  }

  done()
})

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Live typed full-stack',
      description: 'API documentation for Fastify',
      version: '1.0.0',
    },
    externalDocs: {
      url: 'https://fastify.dev/docs/latest/Guides/Getting-Started/',
      description: 'Fastify documentation',
    },
    servers: [
      {
        url: 'http://localhost:3333',
        description: 'Development server',
      },
    ],
  },
  transform: jsonSchemaTransform,
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs',
})

interface UserProps {
  id: string
  name: string
  age: number
  email: string
}

export const users: UserProps[] = []

app.register(createUser)
app.register(getUsers)
app.register(getUser)

const port = 3333

app.listen({ port, host: '0.0.0.0' }).then(() => {
  console.log(` 💜 🦖 HTTP server running on ${port} 🤖`)
})

app.ready().then(() => {
  const spec = app.swagger()

  writeFile(
    resolve(__dirname, 'swagger.json'),
    JSON.stringify(spec, null, 2),
    'utf8',
    err => {
      if (err) console.error(err)
      console.log('Swagger documentation generated successfully.')
    }
  )
})
