import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight ">Dashboard</h1>

        <h2>Dashboard</h2>
      </div>
    </>
  )
}
