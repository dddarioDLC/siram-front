## Context

Ver `proposal.md` (Why). El código ya existe: este documento registra **por qué** quedó así,
porque esas decisiones se tomaron en el chat y no quedaron escritas. Los requisitos están en
`specs/`.

Estructura vigente:

```
src/
  tema/         tokens.js (colores, fuentes, medidas)  tema.js  TemaProvider.jsx
  cascara/      Cascara.jsx  BarraSuperior.jsx  MenuLateral.jsx
  navegacion.js menú (fuente única)  -->  rutas.jsx (rutas generadas)
  componentes/  Panel  EncabezadoPagina  CampoBusqueda  ChipFiltro
                botones/  BotonNuevo  BotonIcono
                tabla/    Tabla (+ CeldaDoble)  PieTabla
                caso/     EstadoCaso  MotivoEspera  MarcasCaso  OrigenCaso  EnlaceCaso  catalogos.js
  pantallas/    EnDiseno  NoEncontrada  casos/bandeja/ (Bandeja, MenuAccionesCaso, LeyendaMarcas)
  mocks/        casos.js  index.js (único punto de acceso)
  utiles/       formato.js (fechas, normalización para búsqueda)
```

## Goals / Non-Goals

**Goals:**
- Dejar escritas las decisiones técnicas tomadas y sus alternativas.
- Dejar anotada la deuda conocida, para que no se olvide.

**Non-Goals:**
- Cambiar código o corregir desvíos (van en el change de alineación con la narrativa).

## Decisions

### Versiones: MUI 7, React Router 7, Vite 7, React 19
Al instalar ya existían MUI 9 y React Router 8. Se eligió MUI 7 porque es la versión de Delta,
de donde se toman los patrones, y porque las versiones más nuevas no estaban verificadas.
React 19 es compatible con MUI 7. Las versiones quedan fijas (sin `^`).
*Alternativa:* últimas versiones de cada paquete; se descartó por el riesgo de API desconocida.

### Tema con variables CSS de MUI
`createTheme` con `cssVariables` y prefijo `siram`. Los tokens de `tokens.js` se mapean a la
paleta: `primary` (acento), `success/warning/error/info`, y claves propias `dup`, `rel`,
`neutral`, cada una con `soft`; `background.chrome/chromeHover/rowHover`, `text.tertiary`,
`sombra` y `foco`. Solo se define el esquema claro; el oscuro se agrega como segundo
`colorSchemes` sin tocar componentes.
*Alternativa:* CSS propio con variables como el prototipo; se descartó para aprovechar los
componentes de MUI (Drawer, Menu, Select, Tooltip) y seguir el patrón de Delta.

### JavaScript sin contratos de props
Se eligió JS por pedido del usuario. No se agregaron PropTypes ni JSDoc.
*Consecuencia:* los componentes no declaran qué reciben (ver Riesgos).

### Fuentes desde npm
Archivo (600, 800), Source Sans 3 (400, 600) e IBM Plex Mono (400, 500) con `@fontsource`, en
lugar de Google Fonts como el prototipo: no depende de un CDN externo.

### Íconos
Único set: `@mui/icons-material` (variantes Outlined), como define `docs/README.md`. Excepción:
el símbolo `≈` de la marca de evento relacionado se dibuja con un SVG propio porque la fuente no
trae ese glifo y en algunos entornos se veía un cuadrado vacío. Es un glifo de marca, no un ícono.

### Menú y rutas desde una sola fuente
`navegacion.js` define el menú; `rutas.jsx` genera una ruta por hoja. Una pantalla se marca como
implementada registrándola en `rutas.jsx`; el resto cae en `EnDiseno` con el título del ítem.
Así el menú y las rutas no pueden desincronizarse.

### Breakpoints
Teléfono: menos de 900 px (el `md` de MUI coincide con el del prototipo). El prototipo usa
además 560 px para ajustes finos; en el código quedó el `sm` de MUI (600 px) para los paddings y
560 px solo para el tamaño del título. Diferencia menor y deliberada para no definir breakpoints
propios.

### Tabla propia, no DataGrid
La tabla es un `<table>` con estilos del tema, no `@mui/x-data-grid` ni `material-react-table`
(el de Delta): la Bandeja necesita celdas de dos líneas, columna fija y marcas a medida, y no
justificaba una dependencia más. La columna de acciones es `position: sticky`; en pantallas
angostas la tabla se desplaza horizontalmente (ancho mínimo 1180 px), igual que el prototipo.

### Cantidades de los filtros sobre la búsqueda
Los chips cuentan dentro del resultado de la búsqueda, no sobre el total: el número responde a
"¿cuántos de los que estoy viendo?".

### Fondo de piezas que se pintan solas
Las marcas (cuadrado de "duplicado") y el chip de organismo tienen fondo propio que debe
acompañar el resalte de la fila. Se resolvió con variables CSS locales (`--fondo-marca`,
`--fondo-origen`) que la fila redefine al pasar el puntero.

### Componentes creados
Todos nuevos (no había nada previo): `Panel`, `EncabezadoPagina` (+ `NotaDatosEjemplo`),
`CampoBusqueda`, `ChipFiltro`, `BotonNuevo`, `BotonIcono`, `Tabla` (+ `CeldaDoble`), `PieTabla`,
`EstadoCaso`, `MotivoEspera`, `MarcasCaso` (+ `MarcaCaso`), `OrigenCaso`, `EnlaceCaso`. No hizo
falta ningún token fuera de los del prototipo.

## Risks / Trade-offs

- [Contadores del menú escritos a mano en `mocks/index.js`, que no coinciden con los chips] →
  se corrige en el change de alineación con la narrativa.
- [Partes desactualizadas frente a `docs/narrativa.md`: ítem "Pendientes de validación", "Tipos
  de denuncia", estados "Sin confirmar"/"Confirmado", chip "Sin confirmar"] → change de
  alineación.
- [Tres lugares escriben `var(--siram-palette-…)` a mano (`MarcasCaso`, `OrigenCaso`, `Tabla`);
  si cambia el prefijo de variables, se rompen sin aviso] → reemplazar por `theme.vars` cuando se
  toquen esos archivos.
- [Componentes sin contrato de props] → evaluar PropTypes o JSDoc antes de que crezca la cantidad
  de componentes.
- [Sin estados de carga ni de error, y el vacío es texto suelto] → hoy los datos son sincrónicos;
  hace falta resolverlo (familias `Cargando…` y `Mensaje…`) al integrar la API.
- [La cabecera de la tabla solo queda fija dentro de su contenedor, no al desplazar la página] →
  igual que el prototipo; revisar si molesta en uso real.
- [Sin tests ni herramienta de tests] → decidir cuándo sumar Vitest + Testing Library.
- [Sin README del repo con cómo levantar el proyecto] → agregar.
- [El build genera un archivo de ~590 KB (aviso de Vite)] → dividir por ruta cuando haya más
  pantallas.
- [Interacciones nunca probadas en el navegador] → se verifican en `tasks.md`.
