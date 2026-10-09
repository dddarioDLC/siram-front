# datos-ejemplo Specification

## Purpose
Define cómo se usan los datos de ejemplo mientras no exista la API, para que reemplazarlos no
obligue a cambiar las pantallas.

## Requirements
### Requirement: Punto único de acceso
El sistema SHALL obtener los datos de ejemplo (casos y usuario actual) a través de un único punto
de acceso. Ninguna pantalla ni componente DEBE leer directamente los archivos de datos. Ningún
valor que se pueda derivar de los casos (como cantidades por marca o por estado) DEBE escribirse
a mano: se calcula a partir de ellos.

#### Scenario: Reemplazo por la API
- **WHEN** se reemplaza la fuente de casos por otra con la misma forma
- **THEN** solo cambia el punto de acceso y las pantallas siguen funcionando sin modificaciones

#### Scenario: Sin cantidades escritas a mano
- **WHEN** se revisan los datos de ejemplo
- **THEN** no contienen cantidades fijas; solo casos y usuario actual

### Requirement: Contenido de ejemplo
El sistema SHALL usar como casos de ejemplo las diez filas de la Bandeja del prototipo
(`C-2026-0418` a `C-2026-0388`), con su víctima, lugar, animal, lesión, estado, motivo de
espera, caso destino si fue unificado, organismo y marcas. Los estados DEBEN ser los vigentes:
los casos que el prototipo anterior mostraba como "Sin confirmar" o "Confirmado" (`C-2026-0418`,
`C-2026-0416`, `C-2026-0415`, `C-2026-0409`, `C-2026-0388`) están "Registrado". Un caso
*Unificado* NO DEBE llevar la marca Posible duplicado: consolidar resolvió esa sospecha. Por eso
`C-2026-0411` no tiene marcas.

#### Scenario: Bandeja con datos de ejemplo
- **WHEN** el usuario abre la Bandeja
- **THEN** ve diez casos, y "Todos" indica (10)

#### Scenario: Estados vigentes
- **WHEN** se revisan los estados de los casos de ejemplo
- **THEN** solo aparecen Registrado, En seguimiento, Finalizado, Desestimado y Unificado

#### Scenario: Caso unificado sin marca de duplicado
- **WHEN** el usuario ve la fila de `C-2026-0411` en la Bandeja
- **THEN** la columna Marcas está vacía y el estado indica "Unificado en otro caso" → `C-2026-0402`
