# By Manoel — Next.js + TypeScript + Tailwind + shadcn

Este proyecto se migró de un sitio HTML/CSS/JS plano (ver `legacy-static-site/`)
a una app **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**, con la
estructura de carpetas que usa **shadcn** (`/components/ui`, `/lib/utils.ts`,
`components.json`), e integra el componente `ResponsiveHeroBanner` como el
nuevo hero de la página.

## ✅ Node.js ya está instalado y el proyecto corre

Instalé **Node.js 24 LTS** (`winget install OpenJS.NodeJS.LTS`), corrí
`npm install` y levanté `npm run dev` — el sitio compiló y cargó
correctamente en `http://localhost:3000` (lo verifiqué en el navegador:
hero, precios, clientes, agenda, FAQ, contacto y footer, todo con estilos y
sin errores). De paso subí Next.js de `15.1.0` a `15.5.25` porque la
versión original tenía una vulnerabilidad crítica ya parcheada, y actualicé
Tailwind CSS v4 a la última versión porque la inicial (`4.0.0`) tenía un bug
de compatibilidad con su propio motor nativo.

Si en el futuro trabajas este proyecto en **otro computador**, ahí sí
necesitarás instalar Node.js primero: descarga la versión **LTS** desde
[nodejs.org](https://nodejs.org/es) (o `winget install OpenJS.NodeJS.LTS`),
y luego:

```bash
npm install
npm run dev
```

para levantarlo en `http://localhost:3000`.

### (Opcional) Confirmar que shadcn está bien inicializado

El archivo `components.json` ya está creado a mano con la configuración
estándar de shadcn (`/components/ui`, alias `@/*`, Tailwind v4). Si más
adelante quieres agregar componentes oficiales de shadcn (botones, inputs,
diálogos, etc.), ya puedes usar directamente:

```bash
npx shadcn@latest add button
```

y se instalará en `/components/ui/button.tsx`, coherente con lo que ya hay.

## Cómo publicar / actualizar tu hosting con estos cambios

Configuré el proyecto (`next.config.ts`, con `output: "export"`) para que
`npm run build` genere un sitio **100% estático** — los mismos
HTML/CSS/JS planos que puedes subir a un hosting tradicional (cPanel,
Hostinger, etc.), exactamente como hacías con la versión anterior. Ya lo
probé: el build corre sin errores y genera la carpeta `out/` con todo
adentro (~1.5 MB).

### Cada vez que quieras actualizar tu web con cambios nuevos:

1. **Genera la versión de producción:**

   ```bash
   npm run build
   ```

   Esto crea (o regenera) la carpeta `out/` en la raíz del proyecto, con
   `index.html`, `robots.txt`, `sitemap.xml`, los estilos, el JS y las
   imágenes — todo lo que tu hosting necesita.

2. **Sube el contenido de `out/` a la raíz de tu hosting** (no la carpeta
   `out` en sí, sino lo que hay *adentro* de ella), reemplazando lo que
   haya ahí. Dos formas típicas:

   - **Administrador de archivos de cPanel/Hostinger**: entra a
     `public_html/` (o la carpeta raíz de tu dominio), borra el contenido
     anterior y sube/arrastra todo lo de `out/`.
   - **FTP** (FileZilla u otro cliente): conéctate con los datos de tu
     hosting, navega a `public_html/`, y sube el contenido de `out/` ahí,
     sobrescribiendo los archivos existentes.

3. Verifica en el navegador que tu dominio cargue la versión nueva (si no
   se ve actualizado, prueba refrescar con `Ctrl+Shift+R` para saltarte la
   caché del navegador).

**En resumen: cada actualización futura es "`npm run build` → subir el
contenido de `out/`"**, el mismo flujo que ya conocías, solo que ahora el
HTML final lo genera Next.js en vez de que tú lo edites a mano.

⚠️ Antes de la primera subida real, reemplaza `https://www.tudominio.cl`
por tu dominio de verdad en `app/layout.tsx`, `app/sitemap.ts` y
`app/robots.ts` (ver más abajo), y vuelve a correr `npm run build`.

## Por qué `/components/ui` importa

Es la convención que usa shadcn (y la que pediste seguir): mantener ahí los
componentes de interfaz "de bajo nivel" y reutilizables (el hero, botones,
tarjetas, etc.), separados de la lógica de página. Esto permite que el CLI
de shadcn (`npx shadcn add ...`) sepa exactamente dónde instalar nuevos
componentes sin pisar tu código de negocio, y que cualquier otro desarrollador
(o yo, en una sesión futura) sepa de inmediato dónde buscar cada pieza.
Las secciones específicas del negocio (precios, clientes, agenda, FAQ,
contacto) viven aparte, en `/components/sections/`, para no mezclar
"piezas de UI genéricas" con "secciones armadas para By Manoel".

## Estructura del proyecto

```
├── app/
│   ├── layout.tsx        Metadata SEO, JSON-LD, fuentes (next/font)
│   ├── page.tsx          Ensambla todas las secciones
│   ├── globals.css       Tema oscuro (variables de color/tipografía)
│   ├── sitemap.ts         /sitemap.xml generado por Next.js
│   └── robots.ts          /robots.txt generado por Next.js
├── components/
│   ├── ui/
│   │   └── responsive-hero-banner.tsx   (el componente que pediste integrar)
│   ├── sections/
│   │   ├── services-section.tsx   (precios: Paquete Inicial + Suscripción)
│   │   ├── clients-section.tsx    (Inflables Champa, Zona Trofeos)
│   │   ├── booking-section.tsx    (agenda de horas, con bloqueo de cupos)
│   │   ├── faq-section.tsx        (acordeón de preguntas frecuentes)
│   │   └── contact-section.tsx    (WhatsApp + QR + aviso de seguridad)
│   ├── site-footer.tsx
│   └── whatsapp-fab.tsx   (botón flotante)
├── lib/
│   ├── site-config.ts     ⭐ TODOS los datos del negocio en un solo lugar
│   └── utils.ts            Helper cn() estándar de shadcn
├── public/clients/         Logos reales de Inflables Champa y Zona Trofeos
└── legacy-static-site/     El sitio HTML anterior, archivado como respaldo
```

## Qué cambié respecto al componente que me pasaste

El `ResponsiveHeroBanner` original (de 21st.dev, con temática "vuelos a
Marte") lo adapté así:

1. **Contenido**: textos, botones y enlaces ahora son los de By Manoel
   (en español), no los de la demo espacial.
2. **Logo**: el componente original solo aceptaba una imagen de fondo para
   el logo. Como By Manoel todavía no tiene un isotipo exportado como
   archivo, agregué un modo de texto (`logoText`) que usa la fuente firma
   (Alex Brush) — si más adelante exportas un logo real, basta con pasar
   `logoUrl` y usa la imagen.
3. **Menú móvil**: el botón hamburguesa existía en el componente original,
   pero no desplegaba ningún menú al hacer clic (el `mobileMenuOpen` no se
   usaba en ningún lado). Le agregué el panel desplegable correspondiente.
4. **Imagen de fondo**: usé una foto real de Unsplash (código en pantalla,
   ambiente oscuro) en vez del placeholder de la nave espacial — con
   `next/image` y un overlay oscuro para que el texto siempre sea legible.
5. **Clientes ("partners")**: en vez de logos inventados, usa los dos logos
   reales que ya tenías (Inflables Champa, Zona Trofeos), extraídos del
   diseño anterior en Claude Design y guardados como archivos PNG en
   `/public/clients/`.

## Cosas para revisar/decidir tú

- **Dominio real**: reemplaza `https://www.tudominio.cl` en
  `app/layout.tsx`, `app/sitemap.ts` y `app/robots.ts`.
- **Imagen de fondo del hero**: elegí una foto de Unsplash (código en
  pantalla) porque no tenías una foto propia del negocio. Si prefieres otra
  imagen (o una foto real tuya/de tu oficina), se cambia en un solo lugar:
  la prop `backgroundImageUrl` en `app/page.tsx`.
- **El agendamiento sigue usando `localStorage`** (igual que en la versión
  anterior): el bloqueo de horarios es por navegador, no hay backend
  compartido. Sigue siendo válido porque cada reserva llega por WhatsApp y
  tú confirmas a mano, pero no evita que dos personas en dispositivos
  distintos reserven la misma hora sin saberlo.
- Añadí la librería `qrcode` (no estaba en tu prompt original) porque la
  sección de contacto necesitaba generar el código QR de WhatsApp — es la
  forma estándar de hacerlo en React sin depender de un script externo por
  CDN como en la versión HTML anterior.
