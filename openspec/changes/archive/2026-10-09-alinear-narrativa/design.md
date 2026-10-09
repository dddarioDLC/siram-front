## Context

Ver `proposal.md` (Why). Hoy:

- `src/mocks/index.js` expone `obtenerContadoresMenu()` con cuatro números escritos a mano
  (14, 8, 5, 23). `Cascara.jsx` los lee y se los pasa a `MenuLateral`, que los muestra según la
  clave `contador` de cada ítem en `navegacion.js`.
- `Bandeja.jsx` define sus propios criterios de filtro (lista `filtros` con funciones `aplica`)
  y calcula las cantidades de los chips sobre el resultado de la búsqueda.
- Los estados viven en `src/componentes/caso/catalogos.js`; los casos de ejemplo usan
  `sin_confirmar` y `confirmado`.

El problema de fondo es que **el mismo concepto ("casos con marca Incompleto") está definido en
dos lugares distintos**, uno calculado y otro escrito a mano.

## Goals / Non-Goals

**Goals:**
- Una sola definición de cada criterio, usada por el menú y por la Bandeja.
- Quitar del código todo lo que la narrativa eliminó (validación, Sin confirmar, Confirmado).

**Non-Goals:**
- Pedir las cantidades a una API o calcularlas en un servicio: todavía no hay API.
- Cambiar la forma de los datos de ejemplo más allá de los estados.

## Decisions

### Criterios de caso en un solo módulo
Se crea `src/componentes/caso/criterios.js`, junto a `catalogos.js`, con los criterios como
funciones puras sobre un caso:

```
criterios = {
  incompleto:     caso -> tiene marca 'incompleto'
  duplicado:      caso -> tiene marca 'duplicado'
  relacionado:    caso -> tiene marca 'relacionado'
  enSeguimiento:  caso -> estado === 'en_seguimiento'
}
contar(casos, criterio) -> cantidad
```

- La Bandeja arma sus chips a partir de estos criterios (más "Todos").
- `navegacion.js` cambia la clave `contador` por el nombre de un criterio
  (`contador: 'incompleto'`).
- `Cascara.jsx` obtiene los casos con `obtenerCasos()` y calcula los contadores con `contar`, una
  vez, para todos los ítems que tengan `contador`. `MenuLateral` no cambia: sigue recibiendo un
  objeto `{ clave: número }`.
- Se elimina `obtenerContadoresMenu()` de `src/mocks/index.js`.

*Alternativa:* que `src/mocks/index.js` exponga funciones de conteo. Se descartó porque mezcla
"de dónde salen los datos" con "qué significa un criterio"; cuando llegue la API, el punto de
acceso cambia pero los criterios siguen siendo los mismos.

*Alternativa:* que el menú cuente con los mismos chips de la Bandeja (compartir estado). Se
descartó: el menú debe mostrar el total, no lo filtrado por la búsqueda (decisión del usuario).

### Qué cuenta el menú
El total de casos de la fuente que cumplen el criterio, **en cualquier estado** (incluidos
Desestimado y Unificado). Es lo mismo que cuenta el chip sin búsqueda, por lo que coinciden.
*Supuesto:* la narrativa no dice si los casos cerrados deben excluirse de estas listas de
trabajo; si el back o el diseño lo definen, se ajusta el criterio en un solo lugar.

### Orden por número de caso
La Bandeja ordena los casos antes de filtrarlos y paginarlos, comparando el identificador con
`localeCompare(…, { numeric: true })` en orden descendente. Hoy el formato es `C-AAAA-NNNN`, así
que esa comparación ordena por año y número.
*Riesgo:* el identificador debería tratarse como texto opaco; cuando exista la API, el orden lo
debe dar ella y esta comparación se elimina.

### Estados y menú
- `catalogos.js`: se reemplazan `sin_confirmar` y `confirmado` por `registrado`
  (`{ etiqueta: 'Registrado', color: 'neutral' }`).
- `src/mocks/casos.js`: los cinco casos con esos estados pasan a `registrado`.
- `navegacion.js`: se elimina el ítem de validación; "Tipos de denuncia" pasa a "Tipos de evento"
  con ruta `/administracion/tipos-evento`. Las rutas se generan del menú, así que `rutas.jsx` no
  cambia.

### Componentes y tokens
- **Se reusan sin cambios:** `EstadoCaso` (el color neutro ya existe), `ChipFiltro`, `Tabla`,
  `PieTabla`, `MarcasCaso`, `MenuLateral`, `EncabezadoPagina`.
- **Se crean:** ningún componente; solo el módulo `criterios.js` (lógica, no UI).
- **Tokens nuevos:** ninguno.

## Risks / Trade-offs

- [Direcciones guardadas que dejan de existir] → `/administracion/tipos-denuncia` muestra
  "Página no encontrada"; `/casos/validacion` cae en `/casos/:id` y muestra la ficha "En diseño".
  No se restringe el formato del identificador en la ruta, porque es texto opaco que genera el
  back; el caso inexistente se resuelve al implementar la Ficha. No se agregan redirecciones
  porque el front todavía no está en uso.
- [Ordenar comparando el identificador] → aceptable con datos de ejemplo; se reemplaza por el
  orden de la API.
- [Si en el futuro el menú debe excluir casos cerrados, menú y chips dejarían de coincidir] →
  la regla vive en `criterios.js` y se decide allí, con el chip usando el mismo criterio.
