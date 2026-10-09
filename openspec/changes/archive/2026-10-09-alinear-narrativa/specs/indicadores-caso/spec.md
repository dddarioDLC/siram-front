## MODIFIED Requirements

### Requirement: Estado del caso
El sistema SHALL mostrar el estado como una píldora con un punto del mismo color. Los estados y
sus colores son:

| Estado | Color |
|---|---|
| Registrado | neutro |
| En seguimiento | warn |
| Finalizado | ok |
| Desestimado | crit |
| Unificado en otro caso | dup |

Un caso nace "Registrado". "Sin confirmar" y "Confirmado" ya no son estados del caso. Un estado
desconocido DEBE mostrarse con su valor tal como llega y en color neutro.

#### Scenario: Estado conocido
- **WHEN** un caso está "Finalizado"
- **THEN** se ve la píldora "Finalizado" en color ok

#### Scenario: Caso registrado
- **WHEN** un caso está "Registrado"
- **THEN** se ve la píldora "Registrado" en color neutro

#### Scenario: Estado desconocido
- **WHEN** llega un estado que no está en la tabla
- **THEN** la píldora muestra ese valor en color neutro

#### Scenario: Caso unificado
- **WHEN** un caso está "Unificado en otro caso"
- **THEN** debajo de la píldora se muestra `→` seguido del identificador del caso destino, en
  fuente mono
