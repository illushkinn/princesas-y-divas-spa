/**
 * ─────────────────────────────────────────────
 * Princesas & Divinas — Testimonios
 * ─────────────────────────────────────────────
 * ⚠️ Reemplazá con testimonios reales de clientas.
 *    Pediles autorización por escrito para usar
 *    sus nombres y fotos.
 *
 * Los testimonios se muestran en carousel (mobile)
 * y grilla (desktop).
 */

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;     // 1-5
  photo: string;      // placeholder
  service?: string;   // qué servicio contrató
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "María García",
    text: "Mi hija cumplió 7 años y fue la experiencia más mágica de su vida. Salió feliz, maquillada, con las uñas pintadas y su corona puesta. ¡No paraba de mirarse al espejo!",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=maria-garcia",
    service: "Fiesta Princesa",
  },
  {
    id: "t2",
    name: "Lucía Fernández",
    text: "El taller de belleza fue un éxito. Vinieron 8 amiguitas y todas se fueron con su kit de maquillaje y su diploma. Super recomendable, muy buena atención.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=lucia-fernandez",
    service: "Taller de Belleza",
  },
  {
    id: "t3",
    name: "Carolina Martínez",
    text: "La experiencia Deluxe es alucinante. Mi hija y sus amigas se sintieron princesas de verdad. La sesión de fotos quedó hermosa, el álbum digital lo re compartimos.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=carolina-martinez",
    service: "Experiencia Deluxe",
  },
  {
    id: "t4",
    name: "Sofía Rodríguez",
    text: "Llevé a mi nena de 5 años al spa infantil y fue amor total. Las chicas son re pacientes y amorosas. Volvemos seguro para el próximo cumple.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=sofia-rodriguez",
    service: "Spa Infantil",
  },
  {
    id: "t5",
    name: "Valentina López",
    text: "El maquillaje artístico es precioso. Le hicieron una mariposa en el cachete con purpurina y duró todo el día. Precio súper accesible.",
    rating: 4,
    photo: "https://i.pravatar.cc/150?u=valentina-lopez",
    service: "Maquillaje Artístico",
  },
  {
    id: "t6",
    name: "Camila Pérez",
    text: "El local es divino, todo decorado con mucho gusto. Mi hija no quería irse. La atención es cálida y profesional. 100% recomendado.",
    rating: 5,
    photo: "https://i.pravatar.cc/150?u=camila-perez",
    service: "Spa Infantil",
  },
];
