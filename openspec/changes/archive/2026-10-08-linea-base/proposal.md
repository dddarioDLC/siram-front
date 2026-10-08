## Why

La primera etapa del front (andamiaje, cáscara, tema y Bandeja) se construyó a partir de
órdenes en el chat, sin OpenSpec. No quedó registro de qué tiene que hacer cada parte ni de las
decisiones que se tomaron, y `openspec/specs/` está vacía. Este change documenta lo que existe
**tal como está hoy en el código** para que los cambios siguientes se propongan sobre una base
verificable.

## What Changes

- No cambia código. Solo se especifica el comportamiento actual y se registran las decisiones.
- Se crean las especificaciones de seis capacidades (ver abajo).
- Se registran en `design.md` las decisiones técnicas que nunca se anotaron y la deuda conocida.
- Las tareas son de **verificación en el navegador** de las interacciones que nunca se probaron.
  Lo que falle se anota para el change siguiente; no se arregla acá.

**Referencia del prototipo:** la cáscara (barra superior y menú lateral) y la vista
"Bandeja de casos" (`v-bandeja`) de `docs/prototipo-siram.html`.

**Fuera de alcance:**
- Corregir desvíos respecto de `docs/`. Tras la actualización de `docs/narrativa.md`
  (2026-10-08) quedaron desactualizados: el ítem "Pendientes de validación" del menú, el nombre
  "Tipos de denuncia", los estados "Sin confirmar" y "Confirmado", el chip "Sin confirmar" y los
  contadores del menú escritos a mano. Todo eso va en el change siguiente, de alineación con la
  narrativa.
- Los contadores del menú no se especifican acá: hoy son números fijos y el requisito correcto
  (que salgan de los datos) se define en el change siguiente.
- Tema oscuro (segunda pasada), pantallas "En diseño", integración con la API.

## Capabilities

### New Capabilities
- `tema`: tokens de color, tipografía y medidas; solo tema claro.
- `cascara`: barra superior, menú lateral de dos niveles colapsable y cajón en teléfono, zona de
  contenido como única zona con scroll.
- `navegacion`: una ruta por ítem del menú, pantalla "En diseño", ruta de la ficha del caso y
  página no encontrada.
- `indicadores-caso`: estado, motivo de espera, marcas, organismo de origen y enlace al caso.
- `bandeja-casos`: búsqueda, filtros rápidos con cantidades, tabla de casos, paginación,
  densidad de filas, acciones por fila y leyenda de marcas.
- `datos-ejemplo`: acceso a los datos de ejemplo por un único punto.

### Modified Capabilities
(ninguna: no hay especificaciones previas)

## Impact

- Solo agrega archivos en `openspec/changes/linea-base/`. Al archivarse, las especificaciones
  pasan a `openspec/specs/`.
- Código descripto: `src/tema/`, `src/cascara/`, `src/navegacion.js`, `src/rutas.jsx`,
  `src/componentes/`, `src/pantallas/`, `src/mocks/`, `src/utiles/`.
