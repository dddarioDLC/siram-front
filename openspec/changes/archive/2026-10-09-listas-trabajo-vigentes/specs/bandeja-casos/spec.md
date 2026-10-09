## MODIFIED Requirements

### Requirement: Filtros rápidos
El sistema SHALL ofrecer los filtros Todos, Incompletos, Posibles duplicados, Eventos
relacionados y En seguimiento, con uno solo activo a la vez (Todos al entrar). Cada filtro DEBE
mostrar entre paréntesis cuántos casos le corresponden **dentro del resultado de la búsqueda
actual**, calculado a partir de los casos y nunca escrito a mano. Al cambiar de filtro se vuelve
a la primera página.

Incompletos, Posibles duplicados y Eventos relacionados son **listas de trabajo**: incluyen solo
casos **vigentes**, es decir, ni *Desestimados* ni *Unificados*. Todos sí incluye todos los
casos, en cualquier estado.

| Filtro | Casos que incluye |
|---|---|
| Todos | todos, en cualquier estado |
| Incompletos | vigentes con marca Incompleto |
| Posibles duplicados | vigentes con marca Posible duplicado |
| Eventos relacionados | vigentes con marca Posible evento relacionado |
| En seguimiento | en estado En seguimiento |

#### Scenario: Elegir un filtro
- **WHEN** el usuario elige "Incompletos"
- **THEN** el filtro se marca como activo y la tabla muestra solo los casos vigentes con marca
  Incompleto

#### Scenario: Cantidades con búsqueda
- **WHEN** el usuario busca "Ushuaia"
- **THEN** la cantidad de cada filtro cuenta solo los casos de Ushuaia

#### Scenario: Sin filtro por confirmación
- **WHEN** el usuario ve los filtros rápidos
- **THEN** no hay ningún filtro "Sin confirmar" ni "Confirmado"

#### Scenario: Casos no vigentes fuera de las listas de trabajo
- **WHEN** la fuente de datos tiene un caso *Desestimado* o *Unificado* con la marca Incompleto,
  Posible duplicado o Posible evento relacionado
- **THEN** ese caso no aparece ni se cuenta en Incompletos, Posibles duplicados ni Eventos
  relacionados

#### Scenario: Todos muestra los casos no vigentes
- **WHEN** el usuario elige "Todos"
- **THEN** la tabla incluye los casos *Desestimados* y *Unificados*
