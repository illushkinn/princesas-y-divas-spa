# 👑 Princesas & Divinas — Spa Infantil

**Sitio web del spa infantil en Godoy Cruz, Palermo, CABA.**

Stack: [Astro](https://astro.build) + [TailwindCSS v4](https://tailwindcss.com) + [Vercel](https://vercel.com)

---

## 🚀 Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build producción a `./dist/` |
| `npm run preview` | Preview del build local |

## 📁 Estructura

```
src/
├── layouts/         # Layout.astro, BlogLayout.astro
├── components/
│   ├── ui/          # Button, Card, WhatsAppFAB
│   └── sections/    # Hero, Services, Gallery, FAQ, etc.
├── data/            # site-config, services, gallery, testimonials, faq
├── content/
│   └── blog/        # Posts en markdown
└── pages/           # index, 404, blog, gracias
```

---

## ✅ PRE-LAUNCH CHECKLIST (T12b)

Antes de subir a producción, verificá cada item:

### 🔧 Configuración

- [ ] **1. Formspree**: Reemplazar `https://formspree.io/f/xxxxx` en `BookingForm.astro` con el endpoint real de Formspree
- [ ] **2. Teléfono WhatsApp**: Verificar que `SITE_CONFIG.whatsapp` en `src/data/site-config.ts` tenga el número REAL con código de país (ej: `5491123456789`)
- [ ] **3. Dirección**: Actualizar `SITE_CONFIG.address` con la dirección exacta del local
- [ ] **4. Instagram**: Cambiar `SITE_CONFIG.instagram` y `SITE_CONFIG.instagramUrl` con la cuenta real
- [ ] **5. Google Maps**: Reemplazar el `MAPS_EMBED` en `Footer.astro` con el embed real de Google Maps de la dirección exacta
- [ ] **6. Site URL**: En `astro.config.mjs` y `robots.txt`, cambiar `https://princesasdivinas.vercel.app` por el dominio real (ej: `https://princesasdivinas.com`)

### 🖼️ Contenido

- [ ] **7. Fotos reales**: Reemplazar las imágenes placeholder de `picsum.photos` en `gallery.ts` con fotos reales del spa. Subir a `/public/images/` o usar un CDN
- [ ] **8. Precios**: Verificar y actualizar los precios en `services.ts` con los valores reales
- [ ] **9. Testimonios**: Reemplazar testimonios de ejemplo en `testimonials.ts` con reseñas reales de clientas (con autorización)
- [ ] **10. Blog images**: Las imágenes de portada de los posts (`coverImage`) deben apuntar a imágenes reales. Crear las imágenes en `/public/images/` o actualizar las URLs
- [ ] **11. OG Image**: Crear una imagen OG (1200x630px) y colocarla en `/public/og-image.jpg`. Debe tener el logo, nombre y tagline del spa
- [ ] **12. Contenido legal**: Si corresponde, agregar página de Términos y Condiciones y Política de Privacidad

### 🌐 Dominio + Deploy

- [ ] **13. Dominio personalizado**: Configurar el dominio en Vercel (ej: `princesasdivinas.com.ar`)
- [ ] **14. SSL**: Verificar que Vercel genere el certificado SSL automáticamente
- [ ] **15. Formspree + dominio**: En Formspree, configurar el dominio verificado para evitar problemas de CORS

### ✅ Tests finales

- [ ] **16. `npm run build`**: Pasa sin errores ni warnings
- [ ] **17. Lighthouse test**: Correr Lighthouse en producción y verificar:
   - Performance ≥ 90
   - Accessibility ≥ 90
   - Best Practices ≥ 90
   - SEO ≥ 95
- [ ] **18. Mobile test**: Verificar que el sitio se ve bien en mobile (Chrome DevTools o BrowserStack)
- [ ] **19. Formulario**: Enviar un formulario de prueba y confirmar que llega a Formspree
- [ ] **20. WhatsApp links**: Probar que TODOS los links de WhatsApp abren correctamente con el mensaje pre-filled
- [ ] **21. Google Search Console**: Agregar el sitio a Search Console y verificar la propiedad
- [ ] **22. Analytics (opcional)**: Si se desea, agregar Google Analytics 4 o Vercel Web Analytics

---

## 📞 Contacto

Para consultas sobre el desarrollo: [@tu-usuario](https://github.com/tu-usuario)

---

*Hecho con 💖 para las princesas más divinas de CABA*
