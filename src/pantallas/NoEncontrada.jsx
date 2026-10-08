import { Link } from 'react-router'
import { Button, Typography } from '@mui/material'
import EncabezadoPagina from '@/componentes/EncabezadoPagina'
import Panel from '@/componentes/Panel'

export default function NoEncontrada() {
  return (
    <>
      <EncabezadoPagina titulo="Página no encontrada" />
      <Panel sx={{ py: 6, px: 3, textAlign: 'center' }}>
        <Typography sx={{ color: 'text.secondary', mb: 2 }}>La dirección no corresponde a ninguna pantalla de SIRAM.</Typography>
        <Button component={Link} to="/casos" variant="outlined">Ir a la bandeja</Button>
      </Panel>
    </>
  )
}
