Este change no modifica código: las tareas verifican que lo especificado se cumple. Lo que falle
**no se arregla acá**: se anota en la sección 6 y pasa al change de alineación con la narrativa.

## 1. Verificaciones automáticas

- [x] 1.1 Correr `npm run lint` y verificar que termina sin errores ni avisos
- [x] 1.2 Correr `npm run build` y verificar que compila (el aviso de tamaño de archivo es conocido)
- [x] 1.3 Buscar colores literales con `grep -rnE "#[0-9A-Fa-f]{3,6}\b|rgba?\(" src | grep -v src/tema/tokens.js` y verificar que no devuelve resultados

## 2. Cáscara (spec `cascara`)

- [x] 2.1 En escritorio, pulsar el botón de menú y verificar que el menú pasa de 240 a 65 px con transición, que muestra solo íconos con tooltip y que el contenido se ensancha
- [x] 2.2 Con el menú colapsado y estando en `/casos`, verificar que el ícono de Casos se ve resaltado; hacer clic en Consultas y verificar que el menú se expande con Consultas abierto
- [x] 2.3 Abrir y cerrar un grupo y verificar que la flecha cambia; recargar en `/consultas/mapa` y verificar que Casos y Consultas arrancan abiertos
- [x] 2.4 En una ventana de menos de 900 px, verificar que el menú lateral no aparece y el nombre del usuario se oculta; pulsar el botón de menú y verificar que se abre el cajón debajo de la barra
- [x] 2.5 En el cajón, elegir un ítem y verificar que navega y se cierra; reabrirlo, hacer clic en el fondo atenuado y verificar que se cierra
- [x] 2.6 Con la Bandeja en 25 filas por página y la ventana baja, desplazar la página y verificar que la barra y el menú quedan fijos

## 3. Navegación (spec `navegacion`)

- [x] 3.1 Recorrer cada ítem del menú y verificar que la dirección coincide con la tabla de la spec, que el ítem queda activo y que todas salvo la Bandeja muestran "En diseño" con su título
- [x] 3.2 Abrir `/casos/nuevo` y `/casos/C-2026-0418` y verificar que muestran "Nuevo caso" y "Ficha del caso" respectivamente
- [x] 3.3 Abrir `/algo-que-no-existe` y verificar que muestra "Página no encontrada" y que el botón lleva a `/casos`

## 4. Bandeja (specs `bandeja-casos` e `indicadores-caso`)

- [x] 4.1 Comparar la Bandeja lado a lado con la vista `v-bandeja` de `docs/prototipo-siram.html` en 1440 px y anotar diferencias visuales en la sección 6
- [x] 4.2 Escribir "nunez" en la búsqueda y verificar que aparece solo Valentina Núñez y que las cantidades de los chips se recalculan; escribir "zzz" y verificar el mensaje de sin resultados
- [x] 4.3 Elegir cada chip y verificar que la tabla muestra solo los casos que le corresponden según la spec
- [x] 4.4 Elegir 5 filas por página y verificar el rango "1–5 de 10", que "Página anterior" está deshabilitado y que el paginador lleva a la página 2 con "6–10 de 10"
- [x] 4.5 Estando en la página 2, cambiar de filtro y de búsqueda y verificar que vuelve a la página 1
- [x] 4.6 Pulsar el botón de densidad y verificar que las filas se compactan y el ícono cambia; verificar que "Filtros" y "Columnas visibles" están deshabilitados y muestran su tooltip
- [x] 4.7 Abrir el menú de acciones de una fila, elegir "Ver caso" y verificar que navega a la ficha; volver y hacer clic en un identificador y verificar lo mismo
- [x] 4.8 Pasar el puntero sobre cada marca y verificar el tooltip; pasar sobre una fila con marca de duplicado y chip de organismo y verificar que sus fondos acompañan el resalte
- [x] 4.9 Verificar que `C-2026-0417` muestra "Pendiente de certificado" bajo el estado y que `C-2026-0411` muestra "→ C-2026-0402"
- [x] 4.10 Pulsar "Nuevo caso" y verificar que navega a `/casos/nuevo`

## 5. Tema y accesibilidad (spec `tema`)

- [x] 5.1 Recorrer la Bandeja con Tab y verificar que cada elemento enfocado muestra el contorno de foco
- [x] 5.2 Con el sistema operativo en modo oscuro, verificar que la interfaz sigue en tema claro
- [ ] 5.3 Con movimiento reducido activado, colapsar el menú y verificar que no hay transición
  **Diferida (2026-10-08):** no es prioritaria; queda para una verificación futura de accesibilidad.

## 6. Cierre

- [x] 6.1 Anotar acá cada verificación que falló o cada diferencia con el prototipo, y verificar que todas quedaron trasladadas al change de alineación con la narrativa

  Ninguna verificación funcional falló. Diferencias con `docs/` (actualizado el 2026-10-08), para
  el change de alineación con la narrativa:
  - Estados "Sin confirmar" y "Confirmado": pasan a "Registrado" (quedan cinco estados).
  - Chip "Sin confirmar": ya no está en el prototipo.
  - Menú: sobra "Pendientes de validación"; "Tipos de denuncia" pasa a "Tipos de evento".
  - Contadores del menú escritos a mano, que no coinciden con los chips: deben obtenerse de los
    datos (el menú muestra el total; el chip, lo filtrado por la búsqueda).
  - Bajada "ordenados por fecha de novedad": la narrativa dice que hoy se ordena por número de
    caso (y el prototipo todavía dice "fecha de novedad"; avisar al agente de diseño).
- [x] 6.2 Correr `openspec validate linea-base --strict` y verificar que pasa antes de archivar
