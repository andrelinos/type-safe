import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex overflow-hidden h-screen flex-col">
      <div className="flex flex-1 flex-col gap-4">
        <Outlet />
      </div>
    </div>
  )
}
