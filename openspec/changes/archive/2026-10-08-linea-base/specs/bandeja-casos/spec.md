## Purpose

Define la Bandeja de casos: la lista de trabajo donde el agente busca, filtra y abre los casos
registrados.

## ADDED Requirements

### Requirement: Encabezado de la Bandeja
El sistema SHALL mostrar el título "Bandeja de casos", la bajada "Casos registrados en el sistema,
ordenados por fecha de novedad." y un rótulo "Datos de ejemplo".

#### Scenario: Abrir la Bandeja
- **WHEN** el usuario entra a `/casos`
- **THEN** ve el título, la bajada y el rótulo "Datos de ejemplo"

### Requirement: Tabla de casos
El sistema SHALL listar los casos en una tabla con las columnas Marcas, Caso, Fecha del hecho,
Víctima, Lugar, Animal, Lesión, Estado, Origen y una columna de acciones fija a la derecha. Los
casos DEBEN mostrarse en el orden en que llegan de la fuente de datos.

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

#### Scenario: Pantalla angosta
- **WHEN** el ancho disponible es menor que el de la tabla
- **THEN** la tabla se desplaza horizontalmente y la columna de acciones queda fija a la derecha

#### Scenario: Fila bajo el puntero
- **WHEN** el usuario pasa el puntero sobre una fila
- **THEN** toda la fila cambia al fondo de resalte

### Requirement: Búsqueda
El sistema SHALL filtrar la tabla mientras el usuario escribe en el campo "¿Qué busca?". La
búsqueda DEBE ignorar mayúsculas y tildes y buscar en identificador, nombre de la víctima,
dirección, ciudad, especie, lesión y organismo. Al cambiar la búsqueda se vuelve a la primera
página.

#### Scenario: Búsqueda sin tildes
- **WHEN** el usuario escribe "nunez"
- **THEN** la tabla muestra el caso de Valentina Núñez

#### Scenario: Sin resultados
- **WHEN** ningún caso coincide con la búsqueda
- **THEN** la tabla muestra "No hay casos que coincidan con la búsqueda."

### Requirement: Filtros rápidos
El sistema SHALL ofrecer los filtros Todos, Incompletos, Posibles duplicados, Eventos
relacionados, Sin confirmar y En seguimiento, con uno solo activo a la vez (Todos al entrar).
Cada filtro DEBE mostrar entre paréntesis cuántos casos le corresponden **dentro del resultado
de la búsqueda actual**. Al cambiar de filtro se vuelve a la primera página.

| Filtro | Casos que incluye |
|---|---|
| Todos | todos |
| Incompletos | con marca Incompleto |
| Posibles duplicados | con marca Posible duplicado |
| Eventos relacionados | con marca Posible evento relacionado |
| Sin confirmar | en estado Sin confirmar |
| En seguimiento | en estado En seguimiento |

#### Scenario: Elegir un filtro
- **WHEN** el usuario elige "Incompletos"
- **THEN** el filtro se marca como activo y la tabla muestra solo los casos con marca Incompleto

#### Scenario: Cantidades con búsqueda
- **WHEN** el usuario busca "Ushuaia"
- **THEN** la cantidad de cada filtro cuenta solo los casos de Ushuaia

### Requirement: Paginación
El sistema SHALL paginar la tabla con 10 filas por página por defecto y opciones de 5, 10 y 25.
El pie DEBE mostrar el rango visible ("1–10 de N") y un paginador con anterior, siguiente,
números de página y elipsis cuando hay muchas páginas. Al cambiar las filas por página se vuelve
a la primera.

#### Scenario: Cambiar filas por página
- **WHEN** hay 10 casos y el usuario elige 5 filas por página
- **THEN** se ven 5 casos, el rango dice "1–5 de 10" y el paginador ofrece la página 2

#### Scenario: Primera página
- **WHEN** se está en la primera página
- **THEN** el botón "Página anterior" está deshabilitado

### Requirement: Barra de herramientas
El sistema SHALL ofrecer, junto a la búsqueda, el botón "Nuevo caso" y tres botones de ícono:
"Filtros" y "Columnas visibles", ambos deshabilitados con la aclaración "(en diseño)", y un
botón de densidad que alterna entre filas normales y compactas.

#### Scenario: Nuevo caso
- **WHEN** el usuario pulsa "Nuevo caso"
- **THEN** navega a `/casos/nuevo`

#### Scenario: Filas compactas
- **WHEN** el usuario pulsa el botón de densidad
- **THEN** las filas reducen su espaciado vertical, el ícono del botón cambia y el botón se anuncia
  como presionado a los lectores de pantalla

### Requirement: Acciones por fila
El sistema SHALL ofrecer en cada fila un menú de acciones con la opción "Ver caso", que lleva a la
ficha del caso.

#### Scenario: Ver caso desde el menú
- **WHEN** el usuario abre el menú de acciones de `C-2026-0418` y elige "Ver caso"
- **THEN** navega a `/casos/C-2026-0418`

### Requirement: Leyenda de marcas
El sistema SHALL mostrar debajo de la tabla una leyenda con las tres marcas y su nombre, y la
aclaración "— mismo animal, otra víctima. No se fusiona." junto a Posible evento relacionado.

#### Scenario: Leyenda visible
- **WHEN** el usuario ve la Bandeja
- **THEN** debajo de la tabla están Incompleto, Posible duplicado y Posible evento relacionado
