/**
 * ─────────────────────────────────────────────
 * Princesas & Divinas — Servicios con Precios
 * ─────────────────────────────────────────────
 * ⚠️ Los precios son orientativos.
 *    Editá con los valores reales antes de lanzar.
 *
 * Diferenciador CLAVE: mostramos los precios
 * para que las mamás sepan exactamente cuánto sale.
 */

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;           // en ARS
  duration: string;        // ej: "2 horas"
  capacity: string;        // ej: "Hasta 6 niñas"
  category: string;        // agrupación visual
  image: string;           // placeholder
  features: string[];      // qué incluye
}

export const SERVICES: Service[] = [
  {
    id: "spa-infantil",
    name: "Spa Infantil",
    description:
      "La experiencia completa: bath de burbujas, mascarillas divertidas, peinado con glitter, maquillaje artístico y uñas decoradas.",
    price: 15000,
    duration: "2 horas",
    capacity: "Hasta 6 niñas",
    category: "spa",
    image: "/images/spa-infantil.jpg",
    features: [
      "Bath de burbujas con pétalos",
      "Mascarilla facial divertida",
      "Peinado con glitter y accesorios",
      "Maquillaje artístico",
      "Esmaltado de uñas",
      "Sesión de fotos",
    ],
  },
  {
    id: "fiesta-princesa",
    name: "Fiesta Princesa",
    description:
      "Todo el spa + vestimenta de princesa, corona, varita mágica y photocall temático. Ideal para cumpleaños inolvidables.",
    price: 25000,
    duration: "3 horas",
    capacity: "Hasta 10 niñas",
    category: "fiestas",
    image: "/images/fiesta-princesa.jpg",
    features: [
      "Todo lo del Spa Infantil",
      "Vestido de princesa incluido",
      "Corona y varita mágica",
      "Photocall temático",
      "Maquillaje de princesa Disney",
      "Peinado con tiara",
      "Merienda dulce incluida",
    ],
  },
  {
    id: "experiencia-deluxe",
    name: "Experiencia Deluxe",
    description:
      "La experiencia más completa con manicura semipermanente, peinado con extensiones, maquillaje profesional y sesión de fotos con álbum digital.",
    price: 38000,
    duration: "4 horas",
    capacity: "Hasta 15 niñas",
    category: "fiestas",
    image: "/images/experiencia-deluxe.jpg",
    features: [
      "Todo lo de la Fiesta Princesa",
      "Manicura semipermanente",
      "Peinado con extensiones",
      "Maquillaje profesional",
      "Sesión de fotos con álbum digital",
      " Mesa dulce personalizada",
      "Invitaciones digitales",
    ],
  },
  {
    id: "taller-belleza",
    name: "Taller de Belleza",
    description:
      "Taller grupal donde aprenden a maquillarse, peinarse y hacerse las uñas. Ideal para cumpleaños de 8+ años.",
    price: 12000,
    duration: "1.5 horas",
    capacity: "Hasta 8 niñas",
    category: "talleres",
    image: "/images/taller-belleza.jpg",
    features: [
      "Kit de maquillaje infantil",
      "Clase guiada por profesional",
      "Prácticas con esmaltes",
      "Peinado básico con accesorios",
      "Diploma de princesa",
    ],
  },
  {
    id: "maquillaje-artistico",
    name: "Maquillaje Artístico",
    description:
      "Solo maquillaje artístico: princesas, mariposas, unicornios, glitter y purpurina. Perfecto como adicional.",
    price: 5000,
    duration: "30 min",
    capacity: "Individual",
    category: "spa",
    image: "/images/maquillaje-artistico.jpg",
    features: [
      "Diseño a elección",
      "Glitter y purpurina",
      "Piedritas decorativas",
      "Hipoalergénico",
    ],
  },
  {
    id: "peinados-glitter",
    name: "Peinados con Glitter",
    description:
      "Peinado con glitter, accesorios brillantes, trenzas y rodete. El toque final perfecto.",
    price: 4500,
    duration: "30 min",
    capacity: "Individual",
    category: "spa",
    image: "/images/peinados-glitter.jpg",
    features: [
      "Peinado personalizado",
      "Glitter y purpurina",
      "Accesorios brillantes",
      "Laca de colores",
    ],
  },
];

/**
 * Categorías para filtrar en la UI
 */
export const SERVICE_CATEGORIES = [
  { id: "all", label: "Todos" },
  { id: "spa", label: "Spa" },
  { id: "fiestas", label: "Fiestas" },
  { id: "talleres", label: "Talleres" },
] as const;
