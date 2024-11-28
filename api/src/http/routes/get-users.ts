import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { users } from '../server'

export const getUsers: FastifyPluginAsyncZod = async app => {
  app.get(
    '/users',
    {
      schema: {
        tags: ['users'],
        description: 'List users',
        response: {
          200: z.array(
            z.object({
              id: z.string(),
              name: z.string(),
              age: z.number(),
              email: z.string().email(),
            })
          ),
        },
      },
    },
    async () => {
      return users
    }
  )
}
