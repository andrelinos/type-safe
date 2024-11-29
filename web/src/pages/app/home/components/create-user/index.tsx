import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { BarLoader } from 'react-spinners'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type { GetUsers200Item } from '@/http/generated/api.schemas'
import {
  getGetUsersQueryKey,
  type getUsersResponse,
  useCreateUser,
} from '@/http/generated/users/users'

const createUserSchema = z.object({
  age: z.coerce.number().min(1),
  email: z.string().email(),
  name: z.string().min(3),
})

type CreateUserSchema = z.infer<typeof createUserSchema>

export function CreateUser() {
  const queryClient = useQueryClient()

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserSchema>({
    resolver: zodResolver(createUserSchema),
  })

  const { mutateAsync: createUser, isPending } = useCreateUser()

  async function handleCreateUser(data: CreateUserSchema) {
    try {
      const newUser = await createUser({ data })

      const newUserItem = newUser.data as GetUsers200Item

      queryClient.setQueryData<getUsersResponse>(
        getGetUsersQueryKey(),
        state => {
          const currentState: getUsersResponse =
            state ?? ({} as getUsersResponse)

          const newData = [
            ...currentState.data,
            newUserItem,
          ] as GetUsers200Item[]
          const newState = { ...currentState, data: newData }

          return newState
        }
      )

      toast.success('Novo usuário cadastrado com sucesso!')

      reset()
    } catch {
      toast.error('Ocorreu um erro ao tentar cadastrar novo usuário!')
      return
    }
  }

  return (
    <div className="flex flex-col fixed w-full rounded-tl-lg max-w-md bottom-0 right-0 bg-zinc-200 dark:bg-zinc-900">
      <form
        onSubmit={handleSubmit(handleCreateUser)}
        className="flex w-full p-8 flex-col gap-4 max-w-md"
      >
        <Input title="Nome" {...register('name')} error={errors?.name} />
        <Input title="Idade" {...register('age')} error={errors?.age} />
        <Input title="E-mail" {...register('email')} error={errors?.email} />
        <Button className="w-full max-w-md mx-auto" disabled={isSubmitting}>
          {isPending ||
            (isSubmitting ? (
              <div>
                <span className="text-xs">carregando...</span>
                <BarLoader color="#f9f9f9" width={200} height={2} />
              </div>
            ) : (
              <span>Enviar</span>
            ))}
        </Button>
      </form>
    </div>
  )
}
