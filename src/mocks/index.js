// Único punto de acceso a los datos de ejemplo. Cuando exista la API, las pantallas
// dejan de importar de acá y pasan a consumirla; no deberían tener que cambiar más que eso.
import { casos } from './casos'

export function obtenerCasos() {
  return casos
}

// Contadores del menú lateral (del prototipo).
export function obtenerContadoresMenu() {
  return {
    pendientesValidacion: 14,
    posiblesDuplicados: 8,
    eventosRelacionados: 5,
    incompletos: 23,
  }
}

export const usuarioActual = { nombre: 'Daniela Marchisoney', iniciales: 'DM' }
