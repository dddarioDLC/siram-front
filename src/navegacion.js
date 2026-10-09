import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

// Menú lateral según docs/README.md. Dos niveles, nunca tres.
// `implementada: false` muestra la pantalla "En diseño".
// `contador` es el nombre de un criterio de src/componentes/caso/criterios.js:
// el menú muestra cuántos casos lo cumplen.
export const navegacion = [
  { titulo: 'Inicio', ruta: '/', icono: HomeOutlinedIcon, implementada: false },
  {
    titulo: 'Casos',
    icono: FolderOutlinedIcon,
    hijos: [
      { titulo: 'Bandeja', ruta: '/casos', implementada: true },
      { titulo: 'Nuevo caso', ruta: '/casos/nuevo' },
      { titulo: 'Posibles duplicados', ruta: '/casos/duplicados', contador: 'duplicado' },
      { titulo: 'Eventos relacionados', ruta: '/casos/eventos-relacionados', contador: 'relacionado' },
      { titulo: 'Incompletos', ruta: '/casos/incompletos', contador: 'incompleto' },
    ],
  },
  {
    titulo: 'Consultas',
    icono: SearchOutlinedIcon,
    hijos: [
      { titulo: 'Búsqueda', ruta: '/consultas/busqueda' },
      { titulo: 'Mapa', ruta: '/consultas/mapa' },
      { titulo: 'Estadísticas', ruta: '/consultas/estadisticas' },
      { titulo: 'Exportar', ruta: '/consultas/exportar' },
    ],
  },
  {
    titulo: 'Administración',
    icono: SettingsOutlinedIcon,
    hijos: [
      { titulo: 'Usuarios', ruta: '/administracion/usuarios' },
      { titulo: 'Organismos', ruta: '/administracion/organismos' },
      { titulo: 'Tipos de evento', ruta: '/administracion/tipos-evento' },
      { titulo: 'Importar CSV', ruta: '/administracion/importar-csv' },
    ],
  },
]
