## MODIFIED Requirements

### Requirement: Una ruta por ítem del menú
El sistema SHALL tener una dirección para cada ítem del menú:

| Ítem | Dirección |
|---|---|
| Inicio | `/` |
| Casos › Bandeja | `/casos` |
| Casos › Nuevo caso | `/casos/nuevo` |
| Casos › Posibles duplicados | `/casos/duplicados` |
| Casos › Eventos relacionados | `/casos/eventos-relacionados` |
| Casos › Incompletos | `/casos/incompletos` |
| Consultas › Búsqueda, Mapa, Estadísticas, Exportar | `/consultas/busqueda`, `/consultas/mapa`, `/consultas/estadisticas`, `/consultas/exportar` |
| Administración › Usuarios, Organismos, Tipos de evento, Importar CSV | `/administracion/usuarios`, `/administracion/organismos`, `/administracion/tipos-evento`, `/administracion/importar-csv` |

El menú NO DEBE incluir "Pendientes de validación": SIRAM trata casos y no tiene cola de
validación.

#### Scenario: Entrar por dirección
- **WHEN** el usuario abre directamente una de esas direcciones
- **THEN** se muestra la pantalla correspondiente dentro de la cáscara, con su ítem activo en el
  menú

#### Scenario: Tipos de evento
- **WHEN** el usuario abre el grupo Administración
- **THEN** ve el ítem "Tipos de evento", que lleva a `/administracion/tipos-evento`

#### Scenario: Dirección de la antigua cola de validación
- **WHEN** el usuario abre `/casos/validacion`
- **THEN** no hay ningún ítem del menú activo y se muestra la ficha "En diseño", como para
  cualquier identificador de caso; qué mostrar ante un caso inexistente se define al implementar
  la Ficha
