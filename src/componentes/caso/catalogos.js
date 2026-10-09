// Valores de ejemplo (docs/README.md). Los definitivos vienen de la API.
// `color` es una clave de la paleta del tema; `neutral` es el de "Registrado".

export const estados = {
  registrado: { etiqueta: 'Registrado', color: 'neutral' },
  en_seguimiento: { etiqueta: 'En seguimiento', color: 'warning' },
  finalizado: { etiqueta: 'Finalizado', color: 'success' },
  desestimado: { etiqueta: 'Desestimado', color: 'error' },
  unificado: { etiqueta: 'Unificado en otro caso', color: 'dup' },
}

export const motivosEspera = {
  contacto: 'Pendiente de contacto',
  respuesta: 'Pendiente de respuesta',
  certificado: 'Pendiente de certificado',
}

export const marcas = {
  incompleto: {
    etiqueta: 'Incompleto',
    descripcion: 'Incompleto: faltan datos obligatorios',
  },
  duplicado: {
    etiqueta: 'Posible duplicado',
    descripcion: 'Posible duplicado de otro caso',
  },
  relacionado: {
    etiqueta: 'Posible evento relacionado',
    descripcion: 'Posible evento relacionado: mismo animal, otra víctima',
  },
}
