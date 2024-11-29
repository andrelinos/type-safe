import { App } from '@/app'
import '@/styles/globals.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  )
} else {
  console.error('Root element is not defined')
}
