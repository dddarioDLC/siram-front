## MODIFIED Requirements

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
