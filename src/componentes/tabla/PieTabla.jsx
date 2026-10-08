import { Box, ButtonBase, MenuItem, Select } from '@mui/material'
import usePagination from '@mui/material/usePagination'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { fuentes } from '@/tema/tokens'

const botonPagina = {
  minWidth: 30,
  height: 30,
  px: 1,
  borderRadius: 1,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: fuentes.mono,
  fontSize: 13,
  color: 'text.secondary',
  '&:hover': { bgcolor: 'neutral.soft', color: 'text.primary' },
  '&.Mui-disabled': { color: 'divider' },
  '&[aria-current="page"]': { bgcolor: 'primary.soft', color: 'primary.main', fontWeight: 500 },
}

// Filas por página, rango visible y paginador. `pagina` empieza en 0.
export default function PieTabla({ total, pagina, filasPorPagina, opcionesFilas = [5, 10, 25], onPagina, onFilasPorPagina }) {
  const cantidadPaginas = Math.max(1, Math.ceil(total / filasPorPagina))
  const { items } = usePagination({
    count: cantidadPaginas,
    page: pagina + 1,
    onChange: (_, p) => onPagina(p - 1),
    siblingCount: 1,
  })

  const desde = total === 0 ? 0 : pagina * filasPorPagina + 1
  const hasta = Math.min(total, (pagina + 1) * filasPorPagina)

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.75,
        flexWrap: 'wrap',
        px: 2,
        py: 1.5,
        borderTop: 1,
        borderColor: 'divider',
        fontSize: 13.5,
        color: 'text.tertiary',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <span id="filas-por-pagina">Filas por página</span>
        <Select
          value={filasPorPagina}
          onChange={(e) => onFilasPorPagina(Number(e.target.value))}
          size="small"
          inputProps={{ 'aria-labelledby': 'filas-por-pagina' }}
          sx={{
            height: 30,
            fontFamily: fuentes.mono,
            fontSize: 13,
            color: 'text.primary',
            bgcolor: 'background.paper',
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'divider' },
            '& .MuiSelect-select': { py: 0, pl: 1.25 },
          }}
        >
          {opcionesFilas.map((n) => <MenuItem key={n} value={n}>{n}</MenuItem>)}
        </Select>
      </Box>

      <Box
        component="span"
        sx={{ ml: 'auto', fontFamily: fuentes.mono, fontSize: 13, color: 'text.secondary', fontVariantNumeric: 'tabular-nums' }}
      >
        {desde}–{hasta} de {total}
      </Box>

      <Box component="nav" aria-label="Paginación" sx={{ display: 'flex', gap: '2px' }}>
        {items.map(({ type, page, selected, ...item }, i) => {
          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            return <Box key={i} component="span" aria-hidden sx={botonPagina}>…</Box>
          }
          if (type === 'previous' || type === 'next') {
            return (
              <ButtonBase key={i} aria-label={type === 'previous' ? 'Página anterior' : 'Página siguiente'} sx={botonPagina} {...item}>
                {type === 'previous' ? <ChevronLeftIcon fontSize="small" /> : <ChevronRightIcon fontSize="small" />}
              </ButtonBase>
            )
          }
          if (type === 'page') {
            return (
              <ButtonBase key={i} aria-current={selected ? 'page' : undefined} aria-label={`Página ${page}`} sx={botonPagina} {...item}>
                {page}
              </ButtonBase>
            )
          }
          return null
        })}
      </Box>
    </Box>
  )
}
