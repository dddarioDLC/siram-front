import { Box, Typography } from '@mui/material'
import { fuentes } from '@/tema/tokens'

// Título de la página, bajada opcional y, a la derecha, lo que se pase en `extra`.
// Sin breadcrumbs: la jerarquía la carga el menú.
export default function EncabezadoPagina({ titulo, bajada, extra }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, flexWrap: 'wrap', mb: 3 }}>
      <div>
        <Typography variant="h1" sx={{ mb: 0.5 }}>{titulo}</Typography>
        {bajada && (
          <Typography sx={{ m: 0, color: 'text.tertiary', fontSize: 14 }}>{bajada}</Typography>
        )}
      </div>
      {extra && <Box sx={{ ml: { xs: 0, sm: 'auto' } }}>{extra}</Box>}
    </Box>
  )
}

// Rótulo que avisa que la pantalla muestra datos de ejemplo.
export function NotaDatosEjemplo() {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        fontFamily: fuentes.mono,
        fontSize: 10.5,
        letterSpacing: '.09em',
        textTransform: 'uppercase',
        color: 'text.tertiary',
        border: 1,
        borderStyle: 'dashed',
        borderColor: 'divider',
        borderRadius: 1,
        px: '9px',
        py: '5px',
        whiteSpace: 'nowrap',
      }}
    >
      Datos de ejemplo
    </Box>
  )
}
