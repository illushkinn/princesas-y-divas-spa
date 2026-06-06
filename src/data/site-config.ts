/**
 * ─────────────────────────────────────────────
 * Princesas & Divinas — Configuración del Sitio
 * ─────────────────────────────────────────────
 * 📍 Godoy Cruz, Palermo, CABA
 * 📞 WhatsApp directo: wa.me/5491123456789
 *
 * EDITÁ estos valores con los datos reales
 * antes del lanzamiento (ver T12b checklist).
 */

export interface Address {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  province: string;
  full: string;
}

export interface SiteConfig {
  name: string;
  nameShort: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;           // ej: "5491123456789" (sin + ni espacios)
  phoneDisplay: string;    // ej: "11 2345-6789"
  whatsapp: string;         // ej: "5491123456789"
  instagram: string;
  instagramUrl: string;
  address: Address;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  url: string;
  rating: number;
  priceRange: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: "Princesas & Divinas",
  nameShort: "P&D",
  tagline: "El spa infantil más mágico de CABA",
  description:
    "Fiestas de spa para niñas en Godoy Cruz, CABA. Maquillaje, peinados, uñas, peinados con glitter y mucho más. Viví una experiencia inolvidable.",
  email: "hola@princesasdivinas.com",
  phone: "5491123456789",
  phoneDisplay: "11 2345-6789",
  whatsapp: "5491123456789",
  instagram: "@princesasdivinas",
  instagramUrl: "https://instagram.com/princesasdivinas",
  address: {
    street: "Godoy Cruz",
    number: "1234",
    neighborhood: "Palermo",
    city: "CABA",
    province: "Buenos Aires",
    full: "Godoy Cruz 1234, Palermo, CABA",
  },
  hours: {
    weekdays: "Lunes a Viernes de 10:00 a 19:00",
    saturday: "Sábados de 10:00 a 17:00",
    sunday: "Domingos — cerrado",
  },
  url: "https://princesasdivinas.vercel.app",
  rating: 4.7,
  priceRange: "$$",
};

/**
 * Links de navegación — editá si querés
 * cambiar el orden o agregar secciones.
 */
export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Reservar", href: "#reservar" },
  { label: "Blog", href: "/blog" },
] as const;
