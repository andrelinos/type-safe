import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { queryClient } from '@/lib/react-query'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { router } from '@/routes'

export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="@type-safe" defaultTheme="light">
          <Helmet titleTemplate="%s | Type Safe" />
          <Toaster richColors position="top-right" />
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ThemeProvider>
      </HelmetProvider>
    </>
  )
}
