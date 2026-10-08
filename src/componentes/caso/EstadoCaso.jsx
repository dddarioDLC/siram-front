import { Box } from '@mui/material'
import { estados } from './catalogos'

// Estado del ciclo de vida: píldora con punto. Va en su propia columna;
// nunca comparte componente con el motivo de espera ni con las marcas.
export default function EstadoCaso({ estado }) {
  const { etiqueta, color } = estados[estado] ?? { etiqueta: estado, color: 'neutral' }
  const neutro = color === 'neutral'
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '7px',
        height: 24,
        pl: 1,
        pr: 1.25,
        borderRadius: 999,
        border: 1,
        borderColor: neutro ? 'divider' : `${color}.soft`,
        bgcolor: `${color}.soft`,
        color: neutro ? 'text.secondary' : `${color}.main`,
        fontSize: 12.5,
        fontWeight: 600,
        whiteSpace: 'nowrap',
      }}
    >
      <Box component="span" sx={{ width: 7, height: 7, borderRadius: '50%', bgcolor: 'currentColor', flex: 'none' }} />
      {etiqueta}
    </Box>
  )
}
