# navegacion Specification

## Purpose
Define qué pantallas existen, a qué dirección responde cada una y qué se muestra cuando una
pantalla todavía no está implementada o la dirección no existe.

## Requirements
### Requirement: Una ruta por ítem del menú
El sistema SHALL tener una dirección para cada ítem del menú:

| Ítem | Dirección |
|---|---|
| Inicio | `/` |
| Casos › Bandeja | `/casos` |
| Casos › Nuevo caso | `/casos/nuevo` |
| Casos › Pendientes de validación | `/casos/validacion` |
| Casos › Posibles duplicados | `/casos/duplicados` |
| Casos › Eventos relacionados | `/casos/eventos-relacionados` |
| Casos › Incompletos | `/casos/incompletos` |
| Consultas › Búsqueda, Mapa, Estadísticas, Exportar | `/consultas/busqueda`, `/consultas/mapa`, `/consultas/estadisticas`, `/consultas/exportar` |
| Administración › Usuarios, Organismos, Tipos de denuncia, Importar CSV | `/administracion/usuarios`, `/administracion/organismos`, `/administracion/tipos-denuncia`, `/administracion/importar-csv` |

#### Scenario: Entrar por dirección
- **WHEN** el usuario abre directamente una de esas direcciones
- **THEN** se muestra la pantalla correspondiente dentro de la cáscara, con su ítem activo en el
  menú

### Requirement: Solo la Bandeja está implementada
El sistema SHALL mostrar la Bandeja de casos en `/casos`. Todas las demás pantallas del menú
DEBEN mostrar su título y un panel "En diseño" con el texto "Esta pantalla todavía no está
disponible."

#### Scenario: Pantalla no implementada
- **WHEN** el usuario navega a `/consultas/mapa`
- **THEN** ve el título "Mapa" y el panel "En diseño"

#### Scenario: Inicio
- **WHEN** el usuario abre la raíz `/`
- **THEN** ve el título "Inicio" y el panel "En diseño"

### Requirement: Ficha del caso
El sistema SHALL responder en `/casos/<identificador>` con la pantalla "Ficha del caso" en
estado "En diseño". Esa pantalla no tiene ítem propio en el menú.

#### Scenario: Abrir un caso desde la Bandeja
- **WHEN** el usuario sigue el enlace de un caso, por ejemplo `C-2026-0418`
- **THEN** llega a `/casos/C-2026-0418` y ve "Ficha del caso" con el panel "En diseño"

#### Scenario: Direcciones fijas de Casos
- **WHEN** el usuario abre `/casos/nuevo`
- **THEN** ve la pantalla "Nuevo caso", no la ficha de un caso llamado "nuevo"

### Requirement: Página no encontrada
El sistema SHALL mostrar "Página no encontrada", dentro de la cáscara, para cualquier dirección
que no corresponda a una pantalla, con un botón para ir a la Bandeja.

#### Scenario: Dirección inexistente
- **WHEN** el usuario abre `/algo-que-no-existe`
- **THEN** ve "Página no encontrada" y el botón "Ir a la bandeja" lo lleva a `/casos`
