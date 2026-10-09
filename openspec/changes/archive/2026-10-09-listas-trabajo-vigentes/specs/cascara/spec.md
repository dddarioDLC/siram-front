## MODIFIED Requirements

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
