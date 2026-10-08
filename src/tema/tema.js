import { createTheme } from '@mui/material/styles'
import { fuentes, tokensClaro as t } from './tokens'

function paleta(tk) {
  return {
    primary: { main: tk.accent, soft: tk.accentSoft, contrastText: tk.accentContrast },
    success: { main: tk.ok, soft: tk.okSoft },
    warning: { main: tk.warn, soft: tk.warnSoft },
    error: { main: tk.crit, soft: tk.critSoft },
    info: { main: tk.info, soft: tk.infoSoft },
    dup: { main: tk.dup, soft: tk.dupSoft, contrastText: tk.surface },
    rel: { main: tk.rel, soft: tk.relSoft, contrastText: tk.surface },
    neutral: { main: tk.ink2, soft: tk.neutralSoft, contrastText: tk.surface },
    background: {
      default: tk.ground,
      paper: tk.surface,
      chrome: tk.surface2,
      chromeHover: tk.chromeHover,
      rowHover: tk.rowHover,
    },
    text: { primary: tk.ink, secondary: tk.ink2, tertiary: tk.ink3, disabled: tk.ink3 },
    divider: tk.line,
    sombra: tk.shadow,
    foco: tk.focus,
  }
}

const tema = createTheme({
  cssVariables: { cssVarPrefix: 'siram', colorSchemeSelector: 'data-theme' },
  colorSchemes: {
    light: { palette: paleta(t) },
  },
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: fuentes.cuerpo,
    body1: { fontSize: '0.9375rem', lineHeight: 1.45 },
    body2: { fontSize: '0.875rem', lineHeight: 1.45 },
    button: { textTransform: 'none', fontWeight: 600, fontSize: '0.875rem' },
    h1: {
      fontFamily: fuentes.titulos,
      fontWeight: 800,
      fontSize: '1.625rem',
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      '@media (max-width:560px)': { fontSize: '1.375rem' },
    },
    h2: { fontFamily: fuentes.titulos, fontWeight: 800, fontSize: '1.375rem', lineHeight: 1.2 },
    h3: { fontFamily: fuentes.titulos, fontWeight: 600, fontSize: '1.125rem', lineHeight: 1.25 },
    // Datos y códigos: fechas, DNI, identificadores, cantidades.
    mono: {
      fontFamily: fuentes.mono,
      fontSize: '0.84375rem',
      letterSpacing: '-0.01em',
      fontVariantNumeric: 'tabular-nums',
    },
    // Encabezados de columna y rótulos chicos en mayúsculas.
    rotulo: {
      fontSize: '0.6875rem',
      fontWeight: 600,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiTypography: {
      defaultProps: { variantMapping: { mono: 'span', rotulo: 'span' } },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: { overflow: 'hidden', WebkitFontSmoothing: 'antialiased' },
        ':focus-visible': {
          outline: `2px solid ${theme.vars.palette.foco}`,
          outlineOffset: 2,
          borderRadius: 4,
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*': { transition: 'none !important', animation: 'none !important' },
        },
      }),
    },
    MuiButtonBase: { defaultProps: { disableRipple: true } },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { height: 38, paddingInline: 16 },
        containedPrimary: ({ theme }) => ({
          '&:hover': { backgroundColor: theme.vars.palette.primary.main, filter: 'brightness(1.08)' },
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: 4 } },
    },
    MuiTooltip: { defaultProps: { arrow: true } },
  },
})

export default tema
