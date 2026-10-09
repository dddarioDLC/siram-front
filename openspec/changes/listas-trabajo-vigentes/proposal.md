## Why

El agente de diseño avisó (`docs/README.md`, «Avisos del agente de diseño», 2026-10-09) que
Incompletos, Posibles duplicados y Eventos relacionados son **listas de trabajo**: muestran y
cuentan solo casos **vigentes** (`docs/narrativa.md` §4, «Listas de trabajo y contadores del
menú»). Hoy el front cuenta cualquier caso que tenga la marca, aunque esté *desestimado* o
*unificado*. Además, los datos de ejemplo arrastran un error del prototipo: `C-2026-0411` está
*unificado* y todavía lleva la marca de posible duplicado.

## What Changes

- Los filtros rápidos Incompletos, Posibles duplicados y Eventos relacionados de la Bandeja
  excluyen los casos *desestimados* y *unificados*. «Todos» y «En seguimiento» no cambian.
- Los contadores del menú (Posibles duplicados, Eventos relacionados, Incompletos) siguen la
  misma regla, así que siguen coincidiendo con los chips de la Bandeja.
- En los datos de ejemplo, `C-2026-0411` (*unificado* en `C-2026-0402`) queda sin marcas.

Referencia del prototipo: la vista Bandeja de `docs/prototipo-siram.html` (fila de
`C-2026-0411` sin marca). Fuera de alcance: las pantallas Posibles duplicados, Eventos
relacionados e Incompletos siguen «En diseño»; este cambio no las implementa.

## Capabilities

### New Capabilities

_Ninguna._

### Modified Capabilities

- `bandeja-casos`: los filtros rápidos de listas de trabajo cuentan y muestran solo casos vigentes.
- `cascara`: los contadores del menú cuentan solo casos vigentes.
- `datos-ejemplo`: `C-2026-0411` no lleva la marca de posible duplicado.

## Impact

- `src/componentes/caso/criterios.js`: criterios de `incompleto`, `duplicado` y `relacionado`.
- `src/mocks/casos.js`: marcas de `C-2026-0411`.
- Con los datos de ejemplo, Posibles duplicados pasa de (2) a (1) en el chip y en el menú.
- Sin dependencias nuevas ni cambios de tema.
