// Criterios de caso: una sola definición de "qué casos entran" en cada lista.
// Los usan los chips de la Bandeja y los contadores del menú, así nunca se contradicen.

export const criterios = {
  incompleto: (caso) => caso.marcas.includes('incompleto'),
  duplicado: (caso) => caso.marcas.includes('duplicado'),
  relacionado: (caso) => caso.marcas.includes('relacionado'),
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
