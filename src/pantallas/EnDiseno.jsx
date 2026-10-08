import { Box, Typography } from '@mui/material'
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined'
import EncabezadoPagina from '@/componentes/EncabezadoPagina'
import Panel from '@/componentes/Panel'

// Pantalla todavía no implementada: tiene ruta y lugar en el menú, pero no contenido.
export default function EnDiseno({ titulo }) {
  return (
    <>
      <EncabezadoPagina titulo={titulo} />
      <Panel sx={{ py: 8, px: 3, textAlign: 'center' }}>
        <Box sx={{ color: 'text.tertiary', mb: 1 }}>
          <DesignServicesOutlinedIcon sx={{ fontSize: 36 }} />
        </Box>
        <Typography variant="h3" component="p" sx={{ mb: 0.5 }}>En diseño</Typography>
        <Typography sx={{ color: 'text.tertiary', fontSize: 14 }}>
          Esta pantalla todavía no está disponible.
        </Typography>
      </Panel>
    </>
  )
}
