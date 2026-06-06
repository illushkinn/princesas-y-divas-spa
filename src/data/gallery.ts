/**
 * ─────────────────────────────────────────────
 * Princesas & Divinas — Galería de Fotos
 * ─────────────────────────────────────────────
 * ⚠️ Reemplazá los picsum.photos con las fotos
 *    reales del spa antes del lanzamiento.
 *
 * Las imágenes se cargan con lazy-loading.
 * Para fotos reales: subilas a /public/images/
 * y actualizá la URL acá.
 */

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: string;   // spa | fiestas | talleres | instalaciones
  width: number;
  height: number;
}

// Usamos picsum.photos con seed para consistencia
const W = (id: number) => `https://picsum.photos/seed/pd${id}/800/600`;
const W_PORTRAIT = (id: number) => `https://picsum.photos/seed/pdp${id}/600/800`;

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    src: W(1),
    alt: "Sala de spa infantil decorada",
    caption: "Nuestra sala principal de spa",
    category: "instalaciones",
    width: 800,
    height: 600,
  },
  {
    id: "g2",
    src: W_PORTRAIT(2),
    alt: "Niña con maquillaje artístico de mariposa",
    caption: "Maquillaje artístico de mariposa",
    category: "spa",
    width: 600,
    height: 800,
  },
  {
    id: "g3",
    src: W(3),
    alt: "Grupo de niñas con vestidos de princesa",
    caption: "Fiesta Princesa — momento photocall",
    category: "fiestas",
    width: 800,
    height: 600,
  },
  {
    id: "g4",
    src: W_PORTRAIT(4),
    alt: "Mesa dulce decorada temática",
    caption: "Mesa dulce personalizada",
    category: "fiestas",
    width: 600,
    height: 800,
  },
  {
    id: "g5",
    src: W(5),
    alt: "Taller de belleza grupal",
    caption: "Taller de belleza en acción",
    category: "talleres",
    width: 800,
    height: 600,
  },
  {
    id: "g6",
    src: W_PORTRAIT(6),
    alt: "Peinado con glitter y accesorios brillantes",
    caption: "Peinado con glitter",
    category: "spa",
    width: 600,
    height: 800,
  },
  {
    id: "g7",
    src: W(7),
    alt: "Sala de fiestas decorada",
    caption: "Ambientación para cumpleaños",
    category: "instalaciones",
    width: 800,
    height: 600,
  },
  {
    id: "g8",
    src: W(8),
    alt: "Uñas decoradas infantiles",
    caption: "Esmaltado artístico",
    category: "spa",
    width: 800,
    height: 600,
  },
  {
    id: "g9",
    src: W_PORTRAIT(9),
    alt: "Niña con corona y varita mágica",
    caption: "Princesa por un día",
    category: "fiestas",
    width: 600,
    height: 800,
  },
];

export const GALLERY_CATEGORIES = [
  { id: "all", label: "Todas" },
  { id: "spa", label: "Spa" },
  { id: "fiestas", label: "Fiestas" },
  { id: "talleres", label: "Talleres" },
  { id: "instalaciones", label: "Instalaciones" },
] as const;
