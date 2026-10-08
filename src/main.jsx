import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import TemaProvider from '@/tema/TemaProvider'
import { router } from '@/rutas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemaProvider>
      <RouterProvider router={router} />
    </TemaProvider>
  </StrictMode>,
)
