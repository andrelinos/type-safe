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
        operationId: 'createUser',
        body: z.object({
          name: z.string(),
          age: z.number(),
          email: z.string(),
        }),
        response: {
          201: z.object({
            id: z.string(),
            name: z.string(),
            age: z.number(),
            email: z.string().email(),
          }),
        },
      },
    },
    async (request, replay) => {
      const { name, age, email } = request.body

      try {
        const newUser = { id: randomUUID(), name, age, email }

        users.push(newUser)
        replay.code(201).send(newUser)
      } catch (error) {
        replay.code(400).send()
      }
    }
  )
}
