## Purpose

Define cómo se muestran los datos que describen la situación de un caso (estado, motivo de
espera, marcas, organismo de origen e identificador), cada uno como pieza independiente.

## ADDED Requirements

### Requirement: Indicadores independientes
El sistema SHALL mostrar el estado, el motivo de espera y las marcas de un caso como tres piezas
separadas. NUNCA DEBEN combinarse en un mismo indicador.

#### Scenario: Caso en seguimiento con marca
- **WHEN** un caso está "En seguimiento", espera un certificado y tiene la marca de evento
  relacionado
- **THEN** se ven por separado la píldora del estado, el texto del motivo y el ícono de la marca

### Requirement: Estado del caso
El sistema SHALL mostrar el estado como una píldora con un punto del mismo color. Los estados y
sus colores son:

| Estado | Color |
|---|---|
| Sin confirmar | neutro |
| Confirmado | info |
| En seguimiento | warn |
| Finalizado | ok |
| Desestimado | crit |
| Unificado en otro caso | dup |

Un estado desconocido DEBE mostrarse con su valor tal como llega y en color neutro.

#### Scenario: Estado conocido
- **WHEN** un caso está "Finalizado"
- **THEN** se ve la píldora "Finalizado" en color ok

#### Scenario: Estado desconocido
- **WHEN** llega un estado que no está en la tabla
- **THEN** la píldora muestra ese valor en color neutro

#### Scenario: Caso unificado
- **WHEN** un caso está "Unificado en otro caso"
- **THEN** debajo de la píldora se muestra `→` seguido del identificador del caso destino, en
  fuente mono

### Requirement: Motivo de espera
El sistema SHALL mostrar el motivo de espera debajo del estado, en color warn, solo cuando el caso
está "En seguimiento". Los motivos son Pendiente de contacto, Pendiente de respuesta y Pendiente
de certificado.

#### Scenario: Caso en seguimiento
- **WHEN** un caso está "En seguimiento" con motivo contacto
- **THEN** debajo del estado se lee "Pendiente de contacto"

#### Scenario: Caso en otro estado
- **WHEN** un caso no está "En seguimiento"
- **THEN** no se muestra ningún motivo de espera

### Requirement: Marcas del caso
El sistema SHALL mostrar las marcas como íconos cuadrados de 17 px, varios a la vez si
corresponde, con un tooltip y una etiqueta accesible que los describe:

| Marca | Ícono | Color | Descripción |
|---|---|---|---|
| Incompleto | `!` | crit | Incompleto: faltan datos obligatorios |
| Posible duplicado | dos cuadrados superpuestos | dup | Posible duplicado de otro caso |
| Posible evento relacionado | `≈` | rel | Posible evento relacionado: mismo animal, otra víctima |

#### Scenario: Varias marcas
- **WHEN** un caso es incompleto y posible duplicado
- **THEN** se ven los dos íconos, uno al lado del otro

#### Scenario: Tooltip de una marca
- **WHEN** el usuario pasa el puntero sobre el ícono de evento relacionado
- **THEN** se muestra "Posible evento relacionado: mismo animal, otra víctima"

#### Scenario: Caso sin marcas
- **WHEN** un caso no tiene marcas
- **THEN** el lugar de las marcas queda vacío

### Requirement: Organismo como dato
El sistema SHALL mostrar el organismo de origen como un chip neutro con borde, sin colores
propios del organismo.

#### Scenario: Organismo de origen
- **WHEN** un caso fue registrado por "Zoonosis Ushuaia"
- **THEN** se ve un chip neutro con el texto "Zoonosis Ushuaia"

### Requirement: Identificador navegable
El sistema SHALL mostrar el identificador del caso en fuente mono y color de acento, como enlace
a la ficha del caso.

#### Scenario: Seguir el identificador
- **WHEN** el usuario hace clic en `C-2026-0417`
- **THEN** navega a `/casos/C-2026-0417`
