# ✅ Checklist de Implementación SEO - Ng Conf Perú 2026

## 🎯 Acciones Inmediatas

### Google Search Console
- [ ] Crear cuenta en [Google Search Console](https://search.google.com/search-console)
- [ ] Verificar la propiedad (agregar DNS TXT record o archivo HTML)
- [ ] Enviar `sitemap.xml` manualmente
- [ ] Revisar cobertura de indexación
- [ ] Verificar ausencia de errores de crawl

### Bing Webmaster Tools
- [ ] Crear cuenta en [Bing Webmaster Tools](https://www.bing.com/webmasters)
- [ ] Verificar propiedad
- [ ] Enviar sitemap

### Google Analytics 4
- [ ] Configurar GA4 para ngconf.pe
- [ ] Agregar tag en `layout.tsx` o usar Google Tag Manager
- [ ] Configurar metas de conversión (compra de entradas, registros)
- [ ] Monitorear Core Web Vitals

### Validación de Datos Estructurados
- [ ] Usar [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Validar JSON-LD de Event
- [ ] Verificar que los datos sean correctos

---

## 🖼️ Recursos Gráficos Necesarios

Crear y optimizar las siguientes imágenes:

### Tamaño Recomendado
```
og-image.png           1200x630px   (~200KB comprimida)
twitter-image.png      1024x512px   (~150KB)
event-banner.png       1600x900px   (~300KB)
hero-screenshot.png    540x720px    (~150KB)
favicon.ico            64x64px
icon-192.png           192x192px
icon-512.png           512x512px
```

### Especificaciones
- Incluir logo de Ng Conf
- Fecha y ubicación visible
- Colores del branding (#E5097F, #0A0A0C)
- Guardar en `public/` directorio
- Usar formatos WebP y AVIF además de PNG/JPG

---

## 🌐 Configuración DNS y Hosting

### Records DNS Recomendados
```
A Record          ngconf.pe  →  [IP del servidor]
CNAME             www        →  ngconf.pe
MX Record         (si usan email)
TXT Record        (SPF, DKIM para email)
```

### Headers Vercel (si usan Vercel)
```
add_header X-Content-Type-Options "nosniff";
add_header X-Frame-Options "SAMEORIGIN";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

---

## 📝 Contenido Pendiente

### Home Page
- [ ] Agregar meta description más descriptivo (160 caracteres max)
- [ ] Validar que las imágenes tengan `alt` descriptivos
- [ ] Agregar schema.org FAQPage si existe sección de preguntas

### Página de Agenda
- [ ] Agregar schema.org Event para cada charla
- [ ] Incluir hora, durador, speaker, descripción
- [ ] Crear URLs canónicas para cada charla

### Página de Speakers
- [ ] Schema.org Person para cada speaker
- [ ] Incluir foto, biografía, redes sociales
- [ ] Enlaces a GitHub, Twitter, LinkedIn

### Página de Sponsors
- [ ] Schema.org Organization para cada sponsor
- [ ] Logo de alta calidad
- [ ] Descripción de la empresa
- [ ] Enlaces a sitios web

---

## 🔧 Optimizaciones Técnicas

### Velocidad de Página
- [ ] Ejecutar [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Optimizar imágenes (comprimir con TinyPNG, ImageOptim)
- [ ] Minificar CSS/JS (ya hace Next.js)
- [ ] Implementar lazy loading (`loading="lazy"`)
- [ ] Usar next/image para imágenes optimizadas

### Core Web Vitals Objetivo
- LCP (Largest Contentful Paint): < 2.5s ✅
- FID (First Input Delay): < 100ms ✅
- CLS (Cumulative Layout Shift): < 0.1 ✅

### Mobile First
- [ ] Verificar responsive en iPhone/Android
- [ ] Probar Mobile Page Speed con Google
- [ ] Asegurar botones son clickeables (48x48px mín)
- [ ] Prueba de Core Web Vitals en móvil

---

## 🔗 Enlaces Internos Estratégicos

Optimizar enlaces internos:
```
Home       → Agenda, FAQ, Código Conducta
Agenda     → Home, Speakers, Venue
FAQ        → Home, Tickets
Conduct    → Home
```

Mejor aún, crear enlazado temático:
- Mencionar speakers en home → link a página speakers
- Mencionar ubicación → link a mapa/venue
- Mencionar entradas → link a TicketSection

---

## 📊 Monitoreo Continuo

### Semanal
- [ ] Revisar Google Search Console nuevas queries
- [ ] Monitorear Core Web Vitals
- [ ] Revisar errores de indexación

### Mensual
- [ ] Analizar tráfico orgánico en GA4
- [ ] Revisar posiciones de keywords
- [ ] Auditar enlaces rotos
- [ ] Verificar sitemap actualizado

### Trimestral
- [ ] Auditoría SEO completa
- [ ] Competencia: investigar websites similares
- [ ] Actualizar estrategia de keywords

---

## 🎓 Educación del Equipo

Documentar para futuros cambios:
- [ ] Leer `SEO.md` en root del proyecto
- [ ] Entender estructura de metadatos
- [ ] Aprender sobre JSON-LD
- [ ] Revisar guías de Google SEO Starter

---

## 🚨 Errores Comunes a Evitar

❌ **NO HACER:**
- Duplicar contenido en múltiples URLs
- Cambiar URLs sin redirecciones 301
- Hidden text o keyword stuffing
- Ocultar contenido en JavaScript
- Agregar metadata en exceso
- Usar robots.txt para indexar el sitemap

✅ **HACER:**
- Mantener URLs consistentes
- Usar 301 redirects para cambios
- Contenido natural y útil
- Renderizar en servidor
- 1-2 keywords principales por página
- Sitemap XML referenciado en robots.txt

---

## 📞 Contactos Útiles

- Google Search Central: https://developers.google.com/search
- Next.js Deployment: https://vercel.com
- Toolbox SEO: https://moz.com/tools
- Lighthouse: https://chrome.google.com/webstore/detail/lighthouse

---

**Fecha de revisión:** 17 de agosto, 2026
**Responsable:** Equipo Ng Conf Perú

💡 **Pro Tip:** Revisar este checklist cada mes y actualizar según resultados analíticos.
