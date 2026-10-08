import { createBrowserRouter } from 'react-router'
import Cascara from '@/cascara/Cascara'
import Bandeja from '@/pantallas/casos/bandeja/Bandeja'
import EnDiseno from '@/pantallas/EnDiseno'
import NoEncontrada from '@/pantallas/NoEncontrada'
import { navegacion } from '@/navegacion'

const pantallasImplementadas = {
  '/casos': <Bandeja />,
}

// Cada entrada del menú tiene su ruta; las que no están implementadas muestran "En diseño".
const hojas = navegacion.flatMap((item) => (item.hijos ? item.hijos : [item]))

const rutasMenu = hojas.map(({ ruta, titulo }) => ({
  path: ruta,
  element: pantallasImplementadas[ruta] ?? <EnDiseno titulo={titulo} />,
}))

export const router = createBrowserRouter([
  {
    element: <Cascara />,
    children: [
      ...rutasMenu,
      // Ficha del caso: se llega desde la bandeja, no tiene entrada en el menú.
      { path: '/casos/:id', element: <EnDiseno titulo="Ficha del caso" /> },
      { path: '*', element: <NoEncontrada /> },
    ],
  },
])
