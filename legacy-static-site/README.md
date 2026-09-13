# Landing page — Servicio de administración web

Sitio estático de una sola página, listo para subir a cualquier hosting
(Hostinger, cPanel, Netlify, Vercel, GitHub Pages, etc.). No necesita
build ni instalación: son archivos HTML/CSS/JS planos.

## Estructura

```
landing-page/
├── index.html          Página principal (todas las secciones)
├── css/styles.css       Estilos (colores y tipografía en variables :root)
├── js/config.js         ← EDITA AQUÍ los precios, WhatsApp, email, redes
├── js/script.js         Lógica: aplica config.js, acordeón FAQ, WhatsApp
├── sitemap.xml          Sitemap básico para Google Search Console
└── robots.txt           Referencia al sitemap
```

## Qué editar antes de publicar

### 1. `js/config.js` (lo más importante — un solo lugar para todo esto)
- `businessName` — nombre de tu marca
- `whatsappNumber` — tu número con código de país, solo dígitos (ej. `5491122334455`)
- `whatsappMessage` — el mensaje precargado al abrir el chat
- `launchPrice` — precio del Kit de Lanzamiento
- `monthlyPrice` — precio de la mensualidad
- `updatesPerMonth` — cuántas actualizaciones de contenido incluye el mes
- `deliveryTime` — tiempo de entrega del kit
- `cancellationPolicy` — qué pasa si el cliente cancela la suscripción
- `email`, `instagramUrl`, `facebookUrl`

### 2. `index.html`
Busca los textos entre corchetes `[ASI]` que quedan fuera de `config.js`:
- Meta tags del `<head>`: título, descripción, Open Graph, `canonical` (tu dominio real)
- Sección **Portafolio**: reemplázala con capturas/enlaces reales, o elimínala si aún no tienes ejemplos
- FAQ: "¿El dominio y el hosting quedan a mi nombre?" (política a redactar)
- El `action` del formulario de contacto (ver punto 3)

### 3. Formulario de contacto
El formulario no tiene backend propio. Tienes dos opciones:

- **Opción rápida (recomendada):** crea una cuenta gratis en
  [formsubmit.co](https://formsubmit.co) o [formspree.io](https://formspree.io)
  y reemplaza el `action="https://formsubmit.co/[EMAIL_CONTACTO]"` en
  `index.html` por el email/endpoint que te den.
- **Mientras tanto:** si no configuras nada, el formulario cae automáticamente
  a un `mailto:` (abre el correo del visitante con los datos precargados),
  gracias a `setupContactFormFallback()` en `js/script.js`.

### 4. Imagen para redes sociales (Open Graph)
Sube una imagen (1200×630px recomendado) como `assets/og-image.jpg` y
actualiza la ruta en `og:image` / `twitter:image` dentro de `index.html`.

### 5. Colores e identidad visual
Todos los colores están centralizados en `css/styles.css`, dentro de
`:root { ... }` (arriba del archivo). Cambia esos valores hexadecimales
para aplicar tu paleta definitiva sin tocar el resto del CSS.

## Subir al hosting

1. Sube **todo el contenido de esta carpeta** (no la carpeta en sí) a la
   raíz del hosting (por ejemplo `public_html/` en cPanel).
2. Apunta tu dominio a ese hosting.
3. Da de alta el sitio en [Google Search Console](https://search.google.com/search-console)
   y envía `sitemap.xml`.
4. Reemplaza `https://www.tudominio.com/` por tu dominio real en:
   - `index.html` (`canonical`, `og:url`, `og:image`, JSON-LD)
   - `sitemap.xml`
   - `robots.txt`

## Checklist final antes de publicar

- [ ] Precios y WhatsApp reales en `js/config.js`
- [ ] Formulario conectado a formsubmit/formspree (o dejado con el fallback de mailto)
- [ ] Dominio real reemplazado en meta tags, sitemap y robots.txt
- [ ] Política de cancelación y tiempo de entrega redactados
- [ ] Sección de portafolio actualizada o eliminada
- [ ] Paleta de colores definitiva aplicada en `styles.css`
