import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { users } from '../server'

export const deleteUser: FastifyPluginAsyncZod = async app => {
  app.delete(
    '/users/:id',
    {
      schema: {
        tags: ['users'],
        description: 'Get an user',
        operationId: 'deleteUser',
        params: z.object({
          id: z.string(),
        }),
        response: {
          200: z.object({}),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, replay) => {
      const { id } = request.params

      const userIndex = users.findIndex(user => user.id === id)

      if (userIndex === -1) {
        return replay.status(404).send({ message: 'User not found' })
      }

      users.splice(userIndex, 1)

      return replay.code(200).send({})
    }
  )
}
