// Criterios de caso: una sola definición de "qué casos entran" en cada lista.
// Los usan los chips de la Bandeja y los contadores del menú, así nunca se contradicen.

// Las listas de trabajo (Incompletos, Posibles duplicados, Eventos relacionados) solo muestran
// casos vigentes: con los desestimados y los unificados no queda nada por hacer.
export function esVigente(caso) {
  return caso.estado !== 'desestimado' && caso.estado !== 'unificado'
}

const vigenteConMarca = (marca) => (caso) => esVigente(caso) && caso.marcas.includes(marca)

export const criterios = {
  incompleto: vigenteConMarca('incompleto'),
  duplicado: vigenteConMarca('duplicado'),
  relacionado: vigenteConMarca('relacionado'),
  enSeguimiento: (caso) => caso.estado === 'en_seguimiento',
}

export function contar(casos, criterio) {
  return casos.filter(criterios[criterio]).length
}

// Orden de la Bandeja: por número de caso, del más reciente al más antiguo.
// Provisorio: cuando exista la API, el orden lo da ella.
export function compararNumeroCaso(a, b) {
  return b.id.localeCompare(a.id, undefined, { numeric: true })
}
