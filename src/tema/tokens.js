// Tokens de color de SIRAM, tomados del prototipo (docs/prototipo-siram.html).
// Ningún componente escribe un color a mano: todo sale de acá a través del tema.
// El tema oscuro se suma en una segunda pasada, redefiniendo estos mismos roles.

export const tokensClaro = {
  ground: '#F6F7F7',
  surface: '#FFFFFF',
  surface2: '#ECF0EF',
  ink: '#16211F',
  ink2: '#4A5856',
  ink3: '#6E7C7A',
  line: '#D8DEDD',
  accent: '#00776F',
  accentSoft: '#DDEFEC',
  accentContrast: '#FFFFFF',
  ok: '#2E7D32',
  okSoft: '#E3F1E4',
  warn: '#B26A00',
  warnSoft: '#F7ECD9',
  crit: '#B3261E',
  critSoft: '#F8E4E2',
  info: '#00668F',
  infoSoft: '#DEEDF5',
  dup: '#6B4FA8',
  dupSoft: '#EAE4F5',
  rel: '#9A5B2D',
  relSoft: '#F5E9DC',
  neutralSoft: '#E7EBEA',
  rowHover: '#F1F4F3',
  chromeHover: '#E1E7E6',
  shadow: 'rgba(22,33,31,.14)',
  focus: '#00776F',
}

export const fuentes = {
  titulos: '"Archivo", sans-serif',
  cuerpo: '"Source Sans 3", system-ui, sans-serif',
  mono: '"IBM Plex Mono", monospace',
}

// Medidas fijas de la cáscara.
export const cascara = {
  alturaBarra: 89,
  anchoMenu: 240,
  anchoMenuColapsado: 65,
}
