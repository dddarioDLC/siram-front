import { Box, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

export default function CampoBusqueda({ valor, onCambio, placeholder = '¿Qué busca?', etiqueta = 'Buscar', sx }) {
  return (
    <Box sx={{ position: 'relative', flex: { xs: '1 1 100%', sm: '0 1 320px' }, minWidth: 190, ...sx }}>
      <SearchIcon
        sx={{
          position: 'absolute',
          left: 10,
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 18,
          color: 'text.tertiary',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <InputBase
        type="search"
        value={valor}
        onChange={(e) => onCambio(e.target.value)}
        placeholder={placeholder}
        inputProps={{ 'aria-label': etiqueta }}
        sx={{
          width: '100%',
          height: 38,
          pl: '34px',
          pr: 1.5,
          bgcolor: 'background.default',
          border: 1,
          borderColor: 'divider',
          borderRadius: 1,
          color: 'text.primary',
          '& input::placeholder': { color: 'text.tertiary', opacity: 1 },
          '&.Mui-focused': {
            borderColor: 'foco',
            outline: (t) => `2px solid ${t.vars.palette.foco}`,
            outlineOffset: '-1px',
          },
        }}
      />
    </Box>
  )
}
