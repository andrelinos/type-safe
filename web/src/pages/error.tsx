import { Link, useRouteError } from 'react-router-dom'

import image from '@/assets/images/error.jpg'

export function ErrorPage() {
  const error = useRouteError() as Error
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-8">
      <h1 className="max-w-4xl px-2 text-4xl font-bold">
        Whoops, algo aconteceu...
      </h1>

      <div className="flex h-96 w-96 items-center justify-center overflow-hidden rounded-full border border-red-500 p-4 dark:via-red-400">
        <img
          src={image}
          alt="Whoops, algo aconteceu..."
          className="h-92 w-92 rounded-full  object-cover"
        />
      </div>

      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes:
      </p>
      <p className="max-w-7xl mx-auto p-4 pre">
        {error.message || JSON?.stringify(error, null, 2)}
      </p>
      <span className="text-xs text-muted-foreground">
        * não recomendado mostrar este erro em produção.
      </span>
      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-500 dark:text-sky-400">
          Home
        </Link>
      </p>
    </div>
  )
}
