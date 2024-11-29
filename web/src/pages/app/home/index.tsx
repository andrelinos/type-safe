import { ScrollArea } from '@/components/ui/scroll-area'

import { useGetUsers } from '@/http/generated/users/users'
import { Helmet } from 'react-helmet-async'
import { CreateUser } from './components/create-user'

export function Home() {
  const { data: users } = useGetUsers()

  return (
    <>
      <Helmet title="Home" />

      <div className="flex size-full overflow-hidden h-screen max-h-screen flex-col">
        <ScrollArea className="flex flex-col gap-6">
          {users?.data?.map(user => {
            return (
              <div key={user.id} className="border pb-4 block p-4 m-2">
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
          <div className="h-96" />
        </ScrollArea>

        <CreateUser />
      </div>
    </>
  )
}
