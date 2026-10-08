import { ButtonBase } from '@mui/material'
import { fuentes } from '@/tema/tokens'

// Filtro rápido de la bandeja: texto + cantidad entre paréntesis. Se marca con aria-pressed.
export default function ChipFiltro({ etiqueta, cantidad, activo, onClick }) {
  return (
    <ButtonBase
      aria-pressed={activo}
      onClick={onClick}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        height: 30,
        px: 1.5,
        border: 1,
        borderColor: 'divider',
        borderRadius: 1,
        bgcolor: 'background.paper',
        color: 'text.secondary',
        fontSize: 13.5,
        transition: 'background .12s ease, border-color .12s ease',
        '&:hover': { bgcolor: 'background.default' },
        '& .n': {
          fontFamily: fuentes.mono,
          fontSize: 12.5,
          color: 'text.tertiary',
          fontVariantNumeric: 'tabular-nums',
        },
        '&[aria-pressed="true"]': {
          bgcolor: 'primary.soft',
          borderColor: 'primary.main',
          color: 'primary.main',
          fontWeight: 600,
          '& .n': { color: 'primary.main' },
        },
      }}
    >
      {etiqueta}
      {cantidad != null && <span className="n">({cantidad})</span>}
    </ButtonBase>
  )
}
