import { Box, Tooltip } from '@mui/material'
import { fuentes } from '@/tema/tokens'
import { marcas as catalogo } from './catalogos'

const base = {
  width: 17,
  height: 17,
  flex: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid currentColor',
  borderRadius: '3px',
  fontFamily: fuentes.titulos,
  fontWeight: 800,
  fontSize: 11,
  lineHeight: 1,
  position: 'relative',
}

const estilos = {
  incompleto: { color: 'error.main', bgcolor: 'error.soft' },
  // Dos cuadrados superpuestos: el de atrás asoma arriba a la derecha.
  duplicado: {
    color: 'dup.main',
    bgcolor: 'dup.soft',
    width: 14,
    height: 14,
    m: '3px 3px 0 0',
    '&::after': {
      content: '""',
      position: 'absolute',
      right: -4,
      top: -4,
      width: 13,
      height: 13,
      border: '1px solid currentColor',
      borderRadius: '3px',
      bgcolor: 'var(--fondo-marca, var(--siram-palette-background-paper))',
    },
  },
  relacionado: { color: 'rel.main', bgcolor: 'rel.soft' },
}

// "≈" dibujado a mano: no todas las fuentes traen el glifo.
function Aproximado() {
  return (
    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
      <path d="M1 3c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0M1 7c1.5-1.6 3-1.6 4.5 0s3 1.6 4.5 0" />
    </svg>
  )
}

const simbolos = { incompleto: '!', duplicado: null, relacionado: <Aproximado /> }

export function MarcaCaso({ marca, conTooltip = true }) {
  const info = catalogo[marca]
  const icono = (
    <Box component="span" role="img" aria-label={info?.descripcion ?? marca} sx={{ ...base, ...estilos[marca] }}>
      {simbolos[marca]}
    </Box>
  )
  return conTooltip && info ? <Tooltip title={info.descripcion}>{icono}</Tooltip> : icono
}

// Marcas paralelas del caso (pueden ser varias). Van pegadas al identificador, a la izquierda.
export default function MarcasCaso({ marcas = [] }) {
  return (
    <Box component="span" sx={{ display: 'flex', gap: '5px', alignItems: 'center', minHeight: 20 }}>
      {marcas.map((m) => <MarcaCaso key={m} marca={m} />)}
    </Box>
  )
}
