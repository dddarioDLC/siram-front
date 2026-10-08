## Why

El 2026-10-08 se sumó `docs/narrativa.md` y se actualizaron el README y el prototipo: **SIRAM trata
casos**. Ya no hay cola de validación, ni estados "Sin confirmar" y "Confirmado", y la denuncia es
un dato dentro del caso. El front, documentado tal como está en `linea-base`, quedó desalineado.
Además, los contadores del menú están escritos a mano y contradicen a los de la Bandeja (el menú
dice "Incompletos 23" y el chip dice "(2)").

## What Changes

- **BREAKING** Menú: se elimina "Pendientes de validación" (y su ruta `/casos/validacion`).
- Menú: "Tipos de denuncia" pasa a llamarse "Tipos de evento" (ruta
  `/administracion/tipos-evento`).
- **BREAKING** Estados del caso: quedan cinco (Registrado, En seguimiento, Finalizado,
  Desestimado, Unificado). Se eliminan "Sin confirmar" y "Confirmado"; los casos de ejemplo que
  los tenían pasan a "Registrado", con píldora neutra.
- Bandeja: se elimina el filtro rápido "Sin confirmar".
- Contadores: el menú vuelve a mostrar cantidades junto a Posibles duplicados, Eventos
  relacionados e Incompletos, **calculadas a partir de los casos**, nunca escritas a mano. El
  menú muestra el total; los chips de la Bandeja, lo que corresponde a la búsqueda actual. Ya no
  hay contador de validación.
- Bandeja: la bajada pasa a decir que los casos se ordenan por número de caso, y el orden se
  aplica explícitamente (del más reciente al más antiguo) en lugar de depender del orden de los
  datos.

**Referencia del prototipo:** la cáscara y la vista `v-bandeja` de `docs/prototipo-siram.html`
actualizado, y `docs/narrativa.md` §2–§4.

**Fuera de alcance:**
- Pantallas nuevas o "En diseño" (Inicio, Ficha, Nuevo caso…): siguen igual.
- Denuncias anotadas en el caso, "Tipo de evento" como campo y motivos para desestimar: no hay
  pantalla que los muestre todavía y sus valores están pendientes (narrativa §6).
- Ordenar por "fecha de novedad" (último movimiento): todavía no está definido.
- Tema oscuro y movimiento reducido (tarea diferida de `linea-base`).

## Capabilities

### New Capabilities
(ninguna)

### Modified Capabilities
- `navegacion`: sale la ruta de validación y se renombra la de tipos de evento.
- `cascara`: se agregan los contadores del menú, calculados a partir de los casos.
- `indicadores-caso`: el estado pasa a cinco valores.
- `bandeja-casos`: sale el filtro "Sin confirmar"; cambian la bajada y el criterio de orden.
- `datos-ejemplo`: los casos de ejemplo usan los estados vigentes, y ningún valor derivado se
  escribe a mano.

## Impact

- Código: `src/navegacion.js`, `src/cascara/` (contadores), `src/componentes/caso/catalogos.js`,
  `src/pantallas/casos/bandeja/Bandeja.jsx`, `src/mocks/`.
- Quien tenga guardada la dirección `/casos/validacion` o `/administracion/tipos-denuncia` verá
  "Página no encontrada".
- Avisar al agente de diseño: la bajada del prototipo todavía dice "ordenados por fecha de
  novedad", pero la narrativa dice que hoy se ordena por número de caso.
