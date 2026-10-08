# datos-ejemplo Specification

## Purpose
Define cómo se usan los datos de ejemplo mientras no exista la API, para que reemplazarlos no
obligue a cambiar las pantallas.

## Requirements
### Requirement: Punto único de acceso
El sistema SHALL obtener los datos de ejemplo (casos y usuario actual) a través de un único punto
de acceso. Ninguna pantalla ni componente DEBE leer directamente los archivos de datos.

#### Scenario: Reemplazo por la API
- **WHEN** se reemplaza la fuente de casos por otra con la misma forma
- **THEN** solo cambia el punto de acceso y las pantallas siguen funcionando sin modificaciones

### Requirement: Contenido de ejemplo
El sistema SHALL usar como casos de ejemplo las diez filas de la Bandeja del prototipo
(`C-2026-0418` a `C-2026-0388`), con su víctima, lugar, animal, lesión, estado, motivo de
espera, caso destino si fue unificado, organismo y marcas.

#### Scenario: Bandeja con datos de ejemplo
- **WHEN** el usuario abre la Bandeja
- **THEN** ve diez casos, y "Todos" indica (10)
