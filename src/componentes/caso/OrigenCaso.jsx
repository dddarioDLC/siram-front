import { Box } from '@mui/material'

// El organismo es un dato del caso, nunca una marca visual del sistema.
export default function OrigenCaso({ organismo }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        px: '9px',
        py: '3px',
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        fontSize: 12.5,
        color: 'text.secondary',
        bgcolor: 'var(--fondo-origen, var(--siram-palette-background-default))',
      }}
    >
      {organismo}
    </Box>
  )
}
