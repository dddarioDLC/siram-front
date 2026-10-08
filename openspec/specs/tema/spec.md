# tema Specification

## Purpose
Define la apariencia común de todo el front: colores por token, tipografía y comportamiento de
foco y movimiento, para que cada pantalla se vea igual y el tema oscuro pueda sumarse después.

## Requirements
### Requirement: Colores por token
El sistema SHALL pintar toda la interfaz con los tokens de color definidos en el tema (fondo,
superficies, tintas, línea, acento y los semánticos ok, warn, crit, info, dup, rel, cada uno con
su versión suave). Ningún componente DEBE contener un color literal.

#### Scenario: Componente sin colores literales
- **WHEN** se revisa el código de cualquier componente o pantalla fuera de la definición de tokens
- **THEN** no aparece ningún color escrito como hex, rgb o rgba

#### Scenario: Acento del sistema
- **WHEN** se muestra una acción principal o un ítem activo del menú
- **THEN** usa el color de acento `#00776F` sobre su versión suave o como relleno

### Requirement: Solo tema claro
El sistema SHALL mostrarse únicamente en tema claro en esta etapa, sin control para cambiar de
tema.

#### Scenario: Sistema operativo en modo oscuro
- **WHEN** el usuario abre el front con el sistema operativo en modo oscuro
- **THEN** la interfaz se muestra en tema claro y no hay botón de cambio de tema

### Requirement: Tipografía
El sistema SHALL usar Archivo para títulos, Source Sans 3 para el cuerpo con 15 px de base e IBM
Plex Mono para datos y códigos. Fechas, horas, identificadores y cantidades DEBEN mostrarse con
cifras tabulares.

#### Scenario: Identificador de caso
- **WHEN** se muestra un identificador de caso o una fecha en una tabla
- **THEN** se ve en IBM Plex Mono con cifras de ancho fijo

#### Scenario: Título de página
- **WHEN** se muestra el título de una pantalla
- **THEN** se ve en Archivo de peso 800, a 26 px en escritorio y 22 px en pantallas de hasta 560 px

### Requirement: Foco visible y movimiento reducido
El sistema SHALL mostrar un contorno de 2 px del color de foco en el elemento enfocado con
teclado, y DEBE desactivar transiciones y animaciones cuando el usuario pide movimiento reducido.

#### Scenario: Navegación con teclado
- **WHEN** el usuario enfoca un botón o enlace con el teclado
- **THEN** el elemento muestra el contorno de foco

#### Scenario: Movimiento reducido
- **WHEN** el sistema operativo tiene activada la preferencia de movimiento reducido
- **THEN** el colapso del menú y los cambios de color ocurren sin transición
