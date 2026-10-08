import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

// Preset: la pantalla pide "un botón de nuevo", no configura color ni ícono.
export default function BotonNuevo({ texto = 'Nuevo', ...props }) {
  return (
    <Button variant="contained" color="primary" startIcon={<AddIcon />} {...props}>
      {texto}
    </Button>
  )
}
