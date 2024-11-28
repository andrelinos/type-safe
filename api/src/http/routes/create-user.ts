import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { randomUUID } from 'node:crypto'
import z from 'zod'
import { users } from '../server'

export const createUser: FastifyPluginAsyncZod = async app => {
  app.post(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'Create user',
        body: z.object({
          name: z.string(),
          age: z.number(),
          email: z.string(),
        }),
        response: {
          201: z.null(),
        },
      },
    },
    async (request, replay) => {
      const { name, age, email } = request.body

      users.push({ id: randomUUID(), name, age, email })

      replay.code(201).send()
    }
  )
}
