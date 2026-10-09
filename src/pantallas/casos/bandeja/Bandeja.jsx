import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router'
import { Box } from '@mui/material'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined'
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined'
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined'
import EncabezadoPagina, { NotaDatosEjemplo } from '@/componentes/EncabezadoPagina'
import Panel from '@/componentes/Panel'
import CampoBusqueda from '@/componentes/CampoBusqueda'
import ChipFiltro from '@/componentes/ChipFiltro'
import BotonNuevo from '@/componentes/botones/BotonNuevo'
import BotonIcono from '@/componentes/botones/BotonIcono'
import Tabla, { CeldaDoble } from '@/componentes/tabla/Tabla'
import PieTabla from '@/componentes/tabla/PieTabla'
import EstadoCaso from '@/componentes/caso/EstadoCaso'
import MotivoEspera from '@/componentes/caso/MotivoEspera'
import MarcasCaso from '@/componentes/caso/MarcasCaso'
import OrigenCaso from '@/componentes/caso/OrigenCaso'
import EnlaceCaso from '@/componentes/caso/EnlaceCaso'
import { compararNumeroCaso, criterios } from '@/componentes/caso/criterios'
import { fuentes } from '@/tema/tokens'
import { fechaCorta, hora, normalizar } from '@/utiles/formato'
import { obtenerCasos } from '@/mocks'
import MenuAccionesCaso from './MenuAccionesCaso'
import LeyendaMarcas from './LeyendaMarcas'

// Los chips usan los mismos criterios que los contadores del menú.
const filtros = [
  { clave: 'todos', etiqueta: 'Todos', aplica: () => true },
  { clave: 'incompleto', etiqueta: 'Incompletos', aplica: criterios.incompleto },
  { clave: 'duplicado', etiqueta: 'Posibles duplicados', aplica: criterios.duplicado },
  { clave: 'relacionado', etiqueta: 'Eventos relacionados', aplica: criterios.relacionado },
  { clave: 'enSeguimiento', etiqueta: 'En seguimiento', aplica: criterios.enSeguimiento },
]

function coincideBusqueda(caso, termino) {
  if (!termino) return true
  const texto = normalizar(
    [caso.id, caso.victima.nombre, caso.lugar.direccion, caso.lugar.ciudad, caso.animal.especie, caso.lesion, caso.origen].join(' '),
  )
  return texto.includes(normalizar(termino))
}

const columnas = [
  { clave: 'marcas', titulo: 'Marcas', celda: (c) => <MarcasCaso marcas={c.marcas} /> },
  { clave: 'caso', titulo: 'Caso', celda: (c) => <EnlaceCaso id={c.id} /> },
  {
    clave: 'fecha',
    titulo: 'Fecha del hecho',
    celda: (c) => <CeldaDoble mono principal={fechaCorta(c.fechaHecho)} secundario={hora(c.fechaHecho)} />,
  },
  {
    clave: 'victima',
    titulo: 'Víctima',
    celda: (c) => <CeldaDoble destacado principal={c.victima.nombre} secundario={`${c.victima.edad} años`} />,
  },
  { clave: 'lugar', titulo: 'Lugar', celda: (c) => <CeldaDoble principal={c.lugar.direccion} secundario={c.lugar.ciudad} /> },
  { clave: 'animal', titulo: 'Animal', celda: (c) => <CeldaDoble principal={c.animal.especie} secundario={c.animal.tamano} /> },
  { clave: 'lesion', titulo: 'Lesión', celda: (c) => c.lesion },
  {
    clave: 'estado',
    titulo: 'Estado',
    celda: (c) => (
      <>
        <EstadoCaso estado={c.estado} />
        {c.estado === 'en_seguimiento' && <MotivoEspera motivo={c.motivoEspera} />}
        {c.estado === 'unificado' && c.unificadoEn && (
          <Box component="span" sx={{ display: 'block', mt: '5px', fontSize: 12, color: 'text.tertiary', fontFamily: fuentes.mono }}>
            → {c.unificadoEn}
          </Box>
        )}
      </>
    ),
  },
  { clave: 'origen', titulo: 'Origen', celda: (c) => <OrigenCaso organismo={c.origen} /> },
  { clave: 'acciones', titulo: 'Acciones', acciones: true, celda: (c) => <MenuAccionesCaso id={c.id} /> },
]

export default function Bandeja() {
  const navigate = useNavigate()
  const casos = useMemo(() => [...obtenerCasos()].sort(compararNumeroCaso), [])
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('todos')
  const [pagina, setPagina] = useState(0)
  const [filasPorPagina, setFilasPorPagina] = useState(10)
  const [densa, setDensa] = useState(false)

  const buscados = useMemo(() => casos.filter((c) => coincideBusqueda(c, busqueda)), [casos, busqueda])
  const cantidades = useMemo(
    () => Object.fromEntries(filtros.map((f) => [f.clave, buscados.filter(f.aplica).length])),
    [buscados],
  )
  const filtrados = useMemo(() => buscados.filter(filtros.find((f) => f.clave === filtro).aplica), [buscados, filtro])
  const visibles = filtrados.slice(pagina * filasPorPagina, (pagina + 1) * filasPorPagina)

  return (
    <>
      <EncabezadoPagina
        titulo="Bandeja de casos"
        bajada="Casos registrados en el sistema, ordenados por número de caso."
        extra={<NotaDatosEjemplo />}
      />

      <Panel>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap', p: 2, borderBottom: 1, borderColor: 'divider' }}>
          <CampoBusqueda
            valor={busqueda}
            onCambio={(v) => { setBusqueda(v); setPagina(0) }}
            etiqueta="Buscar casos"
          />
          <BotonNuevo texto="Nuevo caso" onClick={() => navigate('/casos/nuevo')} />
          <Box sx={{ ml: { xs: 0, sm: 'auto' }, display: 'flex', gap: '2px' }}>
            <BotonIcono etiqueta="Filtros (en diseño)" disabled>
              <FilterAltOutlinedIcon fontSize="small" />
            </BotonIcono>
            <BotonIcono
              etiqueta={densa ? 'Filas normales' : 'Filas compactas'}
              aria-pressed={densa}
              onClick={() => setDensa((v) => !v)}
            >
              {densa ? <DensityMediumOutlinedIcon fontSize="small" /> : <DensitySmallOutlinedIcon fontSize="small" />}
            </BotonIcono>
            <BotonIcono etiqueta="Columnas visibles (en diseño)" disabled>
              <ViewColumnOutlinedIcon fontSize="small" />
            </BotonIcono>
          </Box>
        </Box>

        <Box
          role="group"
          aria-label="Filtros rápidos"
          sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', px: 2, pb: 2, borderBottom: 1, borderColor: 'divider' }}
        >
          {filtros.map((f) => (
            <ChipFiltro
              key={f.clave}
              etiqueta={f.etiqueta}
              cantidad={cantidades[f.clave]}
              activo={filtro === f.clave}
              onClick={() => { setFiltro(f.clave); setPagina(0) }}
            />
          ))}
        </Box>

        <Tabla columnas={columnas} filas={visibles} densa={densa} vacio="No hay casos que coincidan con la búsqueda." />

        <PieTabla
          total={filtrados.length}
          pagina={pagina}
          filasPorPagina={filasPorPagina}
          onPagina={setPagina}
          onFilasPorPagina={(n) => { setFilasPorPagina(n); setPagina(0) }}
        />
      </Panel>

      <LeyendaMarcas />
    </>
  )
}
