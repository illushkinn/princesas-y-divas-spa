/**
 * ─────────────────────────────────────────────
 * Princesas & Divinas — Preguntas Frecuentes
 * ─────────────────────────────────────────────
 * Editá o agregá preguntas según las consultas
 * que recibas por WhatsApp.
 */

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ: FAQItem[] = [
  {
    id: "edad",
    question: "¿A partir de qué edad pueden venir las niñas?",
    answer:
      "Recomendamos el spa infantil desde los 3 hasta los 12 años. Para el Taller de Belleza recomendamos desde 8 años. Igual, consultanos por WhatsApp si tenés dudas con la edad de tu hija.",
  },
  {
    id: "duracion",
    question: "¿Cuánto dura cada experiencia?",
    answer:
      "Depende del servicio: desde 30 minutos (maquillaje artístico) hasta 4 horas (Experiencia Deluxe). En la descripción de cada servicio te decimos la duración exacta.",
  },
  {
    id: "grupos",
    question: "¿Cuántas niñas pueden venir?",
    answer:
      "Tenemos capacidad para hasta 15 niñas en la Experiencia Deluxe. Para grupos más grandes, consultanos por WhatsApp y armamos un plan a medida.",
  },
  {
    id: "que-llevar",
    question: "¿Qué tiene que llevar mi hija?",
    answer:
      "Solamente ropa cómoda. Nosotros proveemos todo: toallones, productos de spa hipoalergénicos, maquillaje, esmaltes, vestidos de princesa, coronas y accesorios. Si querés que traiga algo en especial, te avisamos al reservar.",
  },
  {
    id: "alergias",
    question: "¿Usan productos hipoalergénicos?",
    answer:
      "Sí, todos nuestros productos son hipoalergénicos y aptos para piel infantil. Usamos marcas profesionales como Disney Princess Beauty y MGA Entertainment. Si tu hija tiene alguna alergia específica, decinos al reservar.",
  },
  {
    id: "adultos",
    question: "¿Las mamás pueden quedarse?",
    answer:
      "¡Por supuesto! Las mamás (y papás) pueden quedarse durante toda la experiencia. Tenemos un espacio de espera con café, wifi y lugar para trabajar. También pueden sacar fotos y grabar.",
  },
  {
    id: "metodo-pago",
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos efectivo, transferencia bancaria, Mercado Pago y tarjetas de crédito/débito (con recargo según el plan). Consultanos por promociones y descuentos.",
  },
  {
    id: "reserva-anticipacion",
    question: "¿Con cuánta anticipación hay que reservar?",
    answer:
      "Recomendamos reservar con al menos una semana de anticipación, especialmente los fines de semana. Para fechas especiales como el Día del Niño o vísperas de vacaciones, reservá con 2-3 semanas de anticipación.",
  },
  {
    id: "cancelacion",
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Podés cancelar sin cargo hasta 48 horas antes. Pasado ese plazo, se cobra el 50% del servicio. Si cancelás el mismo día, se cobra el total. Obviamente, si hay un imprevisto de salud, hablamos y lo resolvemos.",
  },
  {
    id: "domicilio",
    question: "¿Hacen eventos a domicilio?",
    answer:
      "Sí, hacemos eventos a domicilio en CABA y zonas cercanas. Consultanos por WhatsApp con la dirección y la cantidad de niñas, y te armamos un presupuesto sin compromiso.",
  },
];
