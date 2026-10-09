# cascara Specification

## Purpose
Define el marco fijo que envuelve todas las pantallas: barra superior, menú lateral y zona de
contenido, con el comportamiento heredado del lenguaje visual de Delta.

## Requirements
### Requirement: Barra superior fija
El sistema SHALL mostrar una barra superior fija de 89 px de alto con, a la izquierda, el botón
de menú y la identidad del sistema ("SIRAM" y la bajada "Registro de Ataques y Mordeduras"), y a
la derecha el nombre del usuario y un avatar con sus iniciales. La barra NO DEBE mostrar la marca
de ningún organismo.

#### Scenario: Escritorio
- **WHEN** el ancho de la ventana es de 900 px o más
- **THEN** la barra muestra la identidad, el nombre del usuario y el avatar

#### Scenario: Teléfono
- **WHEN** el ancho de la ventana es menor a 900 px
- **THEN** la barra oculta el nombre del usuario y mantiene el avatar

### Requirement: Solo el contenido scrollea
El sistema SHALL mantener la barra superior y el menú lateral fijos; la zona de contenido DEBE
ser la única que se desplaza. No hay breadcrumbs ni pie de página.

#### Scenario: Página larga
- **WHEN** el contenido es más alto que la ventana y el usuario se desplaza
- **THEN** solo se mueve la zona de contenido; la barra y el menú quedan en su lugar

### Requirement: Menú lateral de dos niveles
El sistema SHALL mostrar un menú lateral de 240 px con ítems de primer nivel (Inicio, Casos,
Consultas, Administración) y, dentro de los grupos, ítems de segundo nivel. NO DEBE haber un
tercer nivel. Al pie del menú se muestra la versión del front.

#### Scenario: Ítem activo
- **WHEN** la ruta actual corresponde a un ítem del menú
- **THEN** ese ítem se dibuja como píldora abierta a la derecha (radio `0 30px 30px 0`) con fondo
  de acento suave y texto de acento

#### Scenario: Abrir y cerrar un grupo
- **WHEN** el usuario hace clic en un grupo
- **THEN** el grupo alterna entre mostrar y ocultar sus ítems, y la flecha indica el estado

#### Scenario: Grupos abiertos al entrar
- **WHEN** se carga el front
- **THEN** el grupo Casos está abierto, y también el grupo que contiene la ruta actual

### Requirement: Menú colapsable en escritorio
El sistema SHALL permitir colapsar el menú a 65 px con el botón de menú de la barra, con una
transición de 0,5 s. Colapsado, el menú DEBE mostrar solo los íconos del primer nivel, cada uno
con su nombre como tooltip.

#### Scenario: Colapsar
- **WHEN** el usuario pulsa el botón de menú en escritorio con el menú expandido
- **THEN** el menú pasa a 65 px, oculta textos y subítems, y el contenido se ensancha

#### Scenario: Grupo activo con el menú colapsado
- **WHEN** el menú está colapsado y la ruta actual pertenece a un grupo
- **THEN** el ícono de ese grupo se resalta con el color de acento

#### Scenario: Clic en un grupo colapsado
- **WHEN** el usuario hace clic en el ícono de un grupo con el menú colapsado
- **THEN** el menú se expande y ese grupo queda abierto

### Requirement: Menú como cajón en teléfono
El sistema SHALL ocultar el menú lateral cuando la ventana mide menos de 900 px y DEBE abrirlo
como cajón debajo de la barra al pulsar el botón de menú.

#### Scenario: Abrir el cajón
- **WHEN** el usuario pulsa el botón de menú en teléfono
- **THEN** el menú aparece como cajón de 240 px debajo de la barra, sobre un fondo atenuado

#### Scenario: Navegar desde el cajón
- **WHEN** el usuario elige un ítem de segundo nivel o Inicio en el cajón
- **THEN** se navega a esa pantalla y el cajón se cierra

#### Scenario: Cerrar sin navegar
- **WHEN** el usuario hace clic en el fondo atenuado
- **THEN** el cajón se cierra

### Requirement: Contadores del menú
El sistema SHALL mostrar, a la derecha de los ítems Posibles duplicados, Eventos relacionados e
Incompletos, la cantidad total de casos **vigentes** (ni *Desestimados* ni *Unificados*) que
tienen la marca correspondiente. Las cantidades DEBEN calcularse a partir de los mismos casos y
con el mismo criterio que usa la Bandeja; ninguna DEBE estar escrita a mano. No dependen de la
búsqueda ni de los filtros de la Bandeja. Los demás ítems no muestran cantidad.

#### Scenario: Coinciden con la Bandeja sin búsqueda
- **WHEN** el usuario abre la Bandeja sin búsqueda
- **THEN** el número junto a "Incompletos" en el menú es igual al del chip "Incompletos", y lo
  mismo ocurre con Posibles duplicados y Eventos relacionados

#### Scenario: La búsqueda no cambia el menú
- **WHEN** el usuario busca "Ushuaia" en la Bandeja
- **THEN** los chips cuentan solo los casos de Ushuaia y el menú sigue mostrando los totales

#### Scenario: Cambian los datos
- **WHEN** se agrega un caso vigente con la marca Incompleto a la fuente de datos
- **THEN** el contador de Incompletos del menú aumenta en uno sin tocar ningún otro archivo

#### Scenario: Casos no vigentes no cuentan
- **WHEN** se agrega a la fuente de datos un caso *Desestimado* o *Unificado* con la marca
  Incompleto
- **THEN** el contador de Incompletos del menú no cambia
