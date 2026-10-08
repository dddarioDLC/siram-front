import { Box } from '@mui/material'

// Superficie con borde del divisor y radio del tema. Agrupa una sección de la página.
export default function Panel({ children, sx, ...props }) {
  return (
    <Box
      component="section"
      sx={{ bgcolor: 'background.paper', border: 1, borderColor: 'divider', borderRadius: 1, ...sx }}
      {...props}
    >
      {children}
    </Box>
  )
}
