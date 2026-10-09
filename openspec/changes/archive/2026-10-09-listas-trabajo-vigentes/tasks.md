## 1. Criterios de listas de trabajo

- [x] 1.1 En `src/componentes/caso/criterios.js`, agregar `esVigente(caso)` (excluye `desestimado`
  y `unificado`) y usarla en `incompleto`, `duplicado` y `relacionado`; verificar leyendo el
  archivo que `enSeguimiento` no cambió
- [x] 1.2 Verificar en el navegador, agregando temporalmente la marca `incompleto` a `C-2026-0393`
  (desestimado), que no suma ni en el chip Incompletos ni en el menú y sí aparece en «Todos»;
  revertir ese cambio temporal

## 2. Datos de ejemplo

- [x] 2.1 En `src/mocks/casos.js`, dejar `C-2026-0411` con `marcas: []`; verificar en la Bandeja
  que su fila no muestra marcas y que sigue el estado "Unificado en otro caso" → `C-2026-0402`
- [x] 2.2 Verificar que el chip y el contador del menú de Posibles duplicados muestran (1) e
  Incompletos y Eventos relacionados siguen en (2)

## 3. Verificación general

- [x] 3.1 Verificar con `grep` que no quedaron colores literales (hex/rgb) fuera de
  `src/tema/tokens.js`
- [x] 3.2 Correr `npm run lint` y `npm run build` y verificar que pasan sin errores
- [x] 3.3 Revisar la Bandeja contra la vista Bandeja de `docs/prototipo-siram.html` (fila de
  `C-2026-0411` sin marca)
