import { createBrowserRouter } from 'react-router-dom'

import { NotFound } from './pages/404'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { Home } from './pages/app/home'

import { ErrorPage } from './pages/error'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/dashboard', element: <Dashboard /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      // { path: '/sign-in', element: <SignIn /> },
      // { path: '/sign-up', element: <SignUp /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
