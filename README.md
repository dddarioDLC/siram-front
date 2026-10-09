# SIRAM — front

Front web de **SIRAM** (Sistema Integrado de Registro de Ataques y Mordeduras): el registro
provincial de casos de ataques y mordeduras de perros y gatos a personas en Tierra del Fuego.
Lo usan agentes de distintos organismos para registrar y completar casos, detectar duplicados y
consultar estadísticas.

Está hecho con React, Vite y MUI. Por ahora tiene la estructura general de las pantallas con
datos de ejemplo; todavía no se conecta a ninguna API.

## Cómo ponerlo en ejecución

Requisitos: Node.js 20.19 o más nuevo, y npm.

```bash
npm install
npm run dev
```

La aplicación queda disponible en http://localhost:5173.

### Otros comandos

| Comando | Qué hace |
|---|---|
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Sirve localmente el contenido de `dist/` |
| `npm run lint` | Revisa el código con ESLint |
