## 1. Estados del caso

- [x] 1.1 En `src/componentes/caso/catalogos.js`, reemplazar `sin_confirmar` y `confirmado` por `registrado` (`Registrado`, color neutro) y verificar que quedan cinco estados
- [x] 1.2 En `src/mocks/casos.js`, pasar a `registrado` los casos `C-2026-0418`, `C-2026-0416`, `C-2026-0415`, `C-2026-0409` y `C-2026-0388`; verificar con `grep -n "sin_confirmar\|confirmado" src` que no quedan referencias

## 2. Criterios compartidos

- [x] 2.1 Crear `src/componentes/caso/criterios.js` con los criterios `incompleto`, `duplicado`, `relacionado` y `enSeguimiento`, y la función `contar(casos, criterio)`; verificar en la consola del navegador o con un import temporal que `contar(obtenerCasos(), 'incompleto')` devuelve 2

## 3. Bandeja

- [x] 3.1 En `Bandeja.jsx`, armar los chips (Todos, Incompletos, Posibles duplicados, Eventos relacionados, En seguimiento) a partir de `criterios.js` y quitar "Sin confirmar"; verificar que se ven cinco chips
- [x] 3.2 Ordenar los casos por número de caso descendente antes de buscar, filtrar y paginar; verificar desordenando temporalmente `src/mocks/casos.js` que la tabla sigue empezando en `C-2026-0418` y termina en `C-2026-0388`
- [x] 3.3 Cambiar la bajada a "Casos registrados en el sistema, ordenados por número de caso." y verificarla en pantalla

## 4. Menú y contadores

- [x] 4.1 En `src/navegacion.js`, quitar "Pendientes de validación", renombrar "Tipos de denuncia" a "Tipos de evento" con ruta `/administracion/tipos-evento`, y cambiar cada `contador` por el nombre del criterio; verificar que `/casos/validacion` ya no aparece en el menú (muestra la ficha "En diseño", como cualquier identificador) y que "Tipos de evento" abre su pantalla "En diseño"
- [x] 4.2 En `Cascara.jsx`, calcular los contadores con `obtenerCasos()` y `contar`, y eliminar `obtenerContadoresMenu()` de `src/mocks/index.js`; verificar con `grep -rn "obtenerContadoresMenu" src` que no quedan usos
- [x] 4.3 Verificar en el navegador que, sin búsqueda, los contadores del menú (Posibles duplicados, Eventos relacionados, Incompletos) son iguales a los de sus chips, y que al buscar "Ushuaia" cambian los chips y no el menú

## 5. Verificación general

- [x] 5.1 Correr `npm run lint` y `npm run build` y verificar que pasan
- [x] 5.2 Correr `grep -rnE "#[0-9A-Fa-f]{3,6}\b|rgba?\(" src | grep -v src/tema/tokens.js` y verificar que no devuelve resultados
- [x] 5.3 Comparar la Bandeja y el menú con la vista `v-bandeja` del prototipo actualizado (`docs/prototipo-siram.html`) y verificar que estados, chips e ítems del menú coinciden; anotar acá cualquier diferencia que quede

  Coinciden los estados de las diez filas (5 Registrado, 2 En seguimiento, 1 Finalizado,
  1 Desestimado, 1 Unificado), los cinco chips y los ítems de Casos. Diferencias que quedan, ambas
  esperadas:
  - Cantidades: el prototipo muestra las de un registro completo (127, 23, 8, 5); el front las
    calcula sobre los diez casos de ejemplo (10, 2, 2, 2).
  - Bajada: el prototipo dice "fecha de novedad"; el front sigue a la narrativa (tarea 6.1).
- [x] 5.4 Correr `openspec validate alinear-narrativa --strict` y verificar que pasa

## 6. Pendiente fuera del código

- [x] 6.1 Avisar al agente de diseño que la bajada del prototipo sigue diciendo "ordenados por fecha de novedad" mientras la narrativa dice "por número de caso", y verificar que quedó anotado o corregido en `docs/`

  Avisado al agente de diseño el 2026-10-09. La corrección en `docs/` queda de su lado; no
  afecta al código del front.
