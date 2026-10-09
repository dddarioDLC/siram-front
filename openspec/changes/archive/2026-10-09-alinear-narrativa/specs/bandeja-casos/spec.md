## MODIFIED Requirements

### Requirement: Encabezado de la Bandeja
El sistema SHALL mostrar el título "Bandeja de casos", la bajada "Casos registrados en el sistema,
ordenados por número de caso." y un rótulo "Datos de ejemplo".

#### Scenario: Abrir la Bandeja
- **WHEN** el usuario entra a `/casos`
- **THEN** ve el título, la bajada y el rótulo "Datos de ejemplo"

### Requirement: Tabla de casos
El sistema SHALL listar los casos en una tabla con las columnas Marcas, Caso, Fecha del hecho,
Víctima, Lugar, Animal, Lesión, Estado, Origen y una columna de acciones fija a la derecha. Los
casos DEBEN ordenarse por número de caso, del más reciente al más antiguo, sin importar el orden
en que lleguen de la fuente de datos.

| Columna | Contenido |
|---|---|
| Marcas | íconos de marca del caso |
| Caso | identificador navegable |
| Fecha del hecho | fecha `dd/mm/aaaa` y, debajo, hora `hh:mm` |
| Víctima | nombre destacado y, debajo, edad en años |
| Lugar | dirección y, debajo, ciudad |
| Animal | especie y, debajo, tamaño |
| Lesión | tipo de lesión |
| Estado | píldora de estado, motivo de espera o caso destino si corresponde |
| Origen | chip del organismo |

#### Scenario: Orden por número de caso
- **WHEN** la fuente de datos entrega los casos desordenados
- **THEN** la tabla muestra primero `C-2026-0418` y último `C-2026-0388`

#### Scenario: Pantalla angosta
- **WHEN** el ancho disponible es menor que el de la tabla
- **THEN** la tabla se desplaza horizontalmente y la columna de acciones queda fija a la derecha

#### Scenario: Fila bajo el puntero
- **WHEN** el usuario pasa el puntero sobre una fila
- **THEN** toda la fila cambia al fondo de resalte

### Requirement: Filtros rápidos
El sistema SHALL ofrecer los filtros Todos, Incompletos, Posibles duplicados, Eventos
relacionados y En seguimiento, con uno solo activo a la vez (Todos al entrar). Cada filtro DEBE
mostrar entre paréntesis cuántos casos le corresponden **dentro del resultado de la búsqueda
actual**, calculado a partir de los casos y nunca escrito a mano. Al cambiar de filtro se vuelve
a la primera página.

| Filtro | Casos que incluye |
|---|---|
| Todos | todos |
| Incompletos | con marca Incompleto |
| Posibles duplicados | con marca Posible duplicado |
| Eventos relacionados | con marca Posible evento relacionado |
| En seguimiento | en estado En seguimiento |

#### Scenario: Elegir un filtro
- **WHEN** el usuario elige "Incompletos"
- **THEN** el filtro se marca como activo y la tabla muestra solo los casos con marca Incompleto

#### Scenario: Cantidades con búsqueda
- **WHEN** el usuario busca "Ushuaia"
- **THEN** la cantidad de cada filtro cuenta solo los casos de Ushuaia

#### Scenario: Sin filtro por confirmación
- **WHEN** el usuario ve los filtros rápidos
- **THEN** no hay ningún filtro "Sin confirmar" ni "Confirmado"
