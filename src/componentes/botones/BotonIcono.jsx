import { IconButton, Tooltip } from '@mui/material'

// Botón de solo ícono, siempre con etiqueta accesible y tooltip.
export default function BotonIcono({ etiqueta, children, sx, ...props }) {
  const boton = (
    <IconButton
      aria-label={etiqueta}
      sx={{
        width: 40,
        height: 40,
        color: 'text.secondary',
        '&:hover': { bgcolor: 'background.chromeHover', color: 'text.primary' },
        ...sx,
      }}
      {...props}
    >
      {children}
    </IconButton>
  )
  // Un botón deshabilitado no dispara eventos: el tooltip necesita un envoltorio.
  return (
    <Tooltip title={etiqueta}>
      {props.disabled ? <span>{boton}</span> : boton}
    </Tooltip>
  )
}
