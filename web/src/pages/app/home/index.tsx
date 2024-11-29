import { ScrollArea } from '@/components/ui/scroll-area'

import { Button } from '@/components/ui/button'
import type { GetUsers200Item } from '@/http/generated/api.schemas'
import {
  deleteUser,
  getGetUsersQueryKey,
  type getUsersResponse,
  useGetUsers,
} from '@/http/generated/users/users'
import { useQueryClient } from '@tanstack/react-query'
import { PenBox, Trash } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'
import { CreateUser } from './components/create-user'

export function Home() {
  const queryClient = useQueryClient()
  const { data: users } = useGetUsers()
  const [userSelected, setUserSelected] = useState<GetUsers200Item>()

  async function handleCreateUser(id: string) {
    const response = await deleteUser(id)

    if (response.status === 200) {
      queryClient.setQueryData<getUsersResponse>(
        getGetUsersQueryKey(),
        state => {
          const currentState: getUsersResponse =
            state ?? ({} as getUsersResponse)

          const newData = currentState.data.filter(u => u.id !== id) || []

          const newState = { ...currentState, data: newData }

          return newState
        }
      )

      toast.success('Novo usuário cadastrado com sucesso!')
    } else {
      toast.error('Ocorreu um erro ao tentar cadastrar novo usuário!')
      return
    }
  }

  function handleSetUserToEdit(user: GetUsers200Item) {
    setUserSelected(user)
  }

  return (
    <>
      <Helmet title="Home" />

      <div className="flex size-full overflow-hidden h-screen max-h-screen flex-col">
        <ScrollArea className="flex flex-col gap-6">
          {users?.data?.map(user => {
            return (
              <div key={user.id} className="border relative pb-4 block p-4 m-2">
                <div className="absolute flex gap-2 right-1 top-1">
                  <Button
                    variant="outline"
                    className="p-0 w-10 text-xs font-bold gap-2"
                    onClick={() => handleSetUserToEdit(user)}
                  >
                    <PenBox size={18} />
                  </Button>
                  <Button
                    variant="destructive"
                    className="p-0 w-10 text-xs font-bold gap-2"
                    onClick={() => handleCreateUser(user.id)}
                  >
                    <Trash size={18} />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Nome:</span>
                  <p>{user.name}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">Idade:</span>
                  <p>{user.age}</p>
                </div>
                <div className="flex gap-2">
                  <span className="font-bold">E-mail:</span>
                  <p>{user.email}</p>
                </div>
              </div>
            )
          })}
          <div className="h-96" id="scrollContainer" />
        </ScrollArea>

        <CreateUser userSelected={userSelected} />
      </div>
    </>
  )
}
