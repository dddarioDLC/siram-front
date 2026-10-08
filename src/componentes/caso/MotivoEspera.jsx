import { Box } from '@mui/material'
import { motivosEspera } from './catalogos'

// Por qué está detenido un caso. Solo se muestra cuando el estado es "En seguimiento".
export default function MotivoEspera({ motivo }) {
  if (!motivo) return null
  return (
    <Box component="span" sx={{ display: 'block', mt: '5px', fontSize: 12, color: 'warning.main' }}>
      {motivosEspera[motivo] ?? motivo}
    </Box>
  )
}
