import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { users } from '../server'

export const getUser: FastifyPluginAsyncZod = async app => {
  app.get(
    '/users/:id',
    {
      schema: {
        tags: ['users'],
        description: 'Get an user',
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: z.object({
            id: z.string(),
            name: z.string(),
            age: z.number(),
            email: z.string().email(),
          }),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, replay) => {
      const { id } = request.params
      const user = users.find(user => user.id === id)

      if (!user) {
        return replay.status(404).send({ message: 'User not found' })
      }

      return user
    }
  )
}
