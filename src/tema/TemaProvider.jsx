import { CssBaseline, ThemeProvider } from '@mui/material'
import '@fontsource/archivo/600.css'
import '@fontsource/archivo/800.css'
import '@fontsource/source-sans-3/400.css'
import '@fontsource/source-sans-3/600.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
import tema from './tema'

// Por ahora solo tema claro. El oscuro llega en la segunda pasada.
export default function TemaProvider({ children }) {
  return (
    <ThemeProvider theme={tema} defaultMode="light">
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
