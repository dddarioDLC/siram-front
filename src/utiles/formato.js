// Fechas con forma 'AAAA-MM-DDTHH:mm' (hora local). Se separan a mano para no depender de la zona horaria.
export function fechaCorta(iso) {
  const [fecha] = iso.split('T')
  const [a, m, d] = fecha.split('-')
  return `${d}/${m}/${a}`
}

export function hora(iso) {
  return iso.split('T')[1]?.slice(0, 5) ?? ''
}

// Para buscar sin distinguir mayúsculas ni tildes.
export function normalizar(texto) {
  return String(texto ?? '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}
