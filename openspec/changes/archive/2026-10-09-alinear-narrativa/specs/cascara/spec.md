## ADDED Requirements

### Requirement: Contadores del menú
El sistema SHALL mostrar, a la derecha de los ítems Posibles duplicados, Eventos relacionados e
Incompletos, la cantidad total de casos que tienen la marca correspondiente. Las cantidades DEBEN
calcularse a partir de los mismos casos que usa la Bandeja; ninguna DEBE estar escrita a mano. No
dependen de la búsqueda ni de los filtros de la Bandeja. Los demás ítems no muestran cantidad.

#### Scenario: Coinciden con la Bandeja sin búsqueda
- **WHEN** el usuario abre la Bandeja sin búsqueda
- **THEN** el número junto a "Incompletos" en el menú es igual al del chip "Incompletos", y lo
  mismo ocurre con Posibles duplicados y Eventos relacionados

#### Scenario: La búsqueda no cambia el menú
- **WHEN** el usuario busca "Ushuaia" en la Bandeja
- **THEN** los chips cuentan solo los casos de Ushuaia y el menú sigue mostrando los totales

#### Scenario: Cambian los datos
- **WHEN** se agrega un caso con la marca Incompleto a la fuente de datos
- **THEN** el contador de Incompletos del menú aumenta en uno sin tocar ningún otro archivo
