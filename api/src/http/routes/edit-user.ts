import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import z from 'zod'
import { users } from '../server'

export const editUser: FastifyPluginAsyncZod = async app => {
  app.get(
    '/users/:id',
    {
      schema: {
        tags: ['users'],
        description: 'Get an user',
        params: z.object({
          id: z.string(),
        }),
        body: z.object({
          name: z.string(),
          age: z.number(),
          email: z.string(),
        }),
        response: {
          201: z.null(),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, replay) => {
      const { id } = request.params
      const { name, age, email } = request.body
      const user = users.find(user => user.id === id)

      if (!user) {
        return replay.status(404).send({ message: 'User not found' })
      }

      if (name !== undefined) user.name = name
      if (age !== undefined) user.age = age
      if (email !== undefined) user.email = email

      return replay.code(200).send()
    }
  )
}