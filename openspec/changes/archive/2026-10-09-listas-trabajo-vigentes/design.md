## Context

Los chips de la Bandeja (`Bandeja.jsx`) y los contadores del menú comparten los criterios de
`src/componentes/caso/criterios.js`, justamente para que nunca se contradigan. Hoy `incompleto`,
`duplicado` y `relacionado` miran solo `caso.marcas`. Los estados que vienen de los datos son
`registrado`, `en_seguimiento`, `finalizado`, `desestimado` y `unificado`.

## Goals / Non-Goals

**Goals:**
- Un único lugar que define qué es un caso vigente, usado por los tres criterios de listas de
  trabajo.

**Non-Goals:**
- Cambiar la Leyenda de marcas, `MarcasCaso` o cómo se dibujan las marcas en la tabla.
- Filtrar los casos no vigentes de «Todos» o de «En seguimiento».

## Decisions

- **Regla de vigencia en `criterios.js`.** Se agrega una función `esVigente(caso)` (estado
  distinto de `desestimado` y `unificado`) y los tres criterios de listas de trabajo la combinan
  con la marca. Así el chip y el contador del menú cambian juntos sin tocar `Bandeja.jsx` ni la
  cáscara. Alternativa descartada: filtrar en cada pantalla, que duplica la regla y rompe la
  garantía de que menú y chips coinciden.
- **Lista de exclusión, no de inclusión.** Se excluyen explícitamente `desestimado` y `unificado`,
  que es lo que dice `narrativa.md` §4. Un estado nuevo que agregue el backend queda vigente por
  defecto, que es lo más visible si aparece algo inesperado.
- **Corregir el mock, no ocultar la marca.** `C-2026-0411` pasa a `marcas: []`, igual que en el
  prototipo. No se agrega lógica que esconda marcas de casos unificados: es un dato que el
  backend no va a mandar.

Componentes: no se crea ni modifica ningún componente de `src/componentes` salvo
`caso/criterios.js`. No hacen falta tokens nuevos.

## Risks / Trade-offs

- [Con los datos de ejemplo actuales, ningún caso no vigente tiene marca después de corregir
  0411, así que la regla no se ve en pantalla] → Verificarla temporalmente agregando una marca a
  `C-2026-0393` (desestimado) durante la revisión, sin dejar ese cambio.
