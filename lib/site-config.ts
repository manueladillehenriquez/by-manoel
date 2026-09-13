/**
 * site-config.ts
 * ------------------------------------------------------------------
 * Toda la información del negocio (precios, WhatsApp, dirección,
 * horarios, clientes) vive en un solo lugar. Los componentes de
 * /components/sections la importan desde acá — así, para actualizar
 * un precio o el número de WhatsApp solo se edita este archivo.
 * ------------------------------------------------------------------
 */

const DOMAIN_TRANSFER_PRICE = "$19.990";

// Cuando el sitio se publica en GitHub Pages como repo de proyecto
// (https://usuario.github.io/by-manoel/), las imágenes de /public
// necesitan este prefijo — `next/image` con `images.unoptimized`
// (requerido para el export estático) NO lo agrega solo. El workflow
// de GitHub Actions (.github/workflows/deploy.yml) define esta
// variable al buildear; en local o en un hosting con dominio propio
// queda vacía y las rutas se sirven desde la raíz, como siempre.
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  businessName: "By Manoel",
  tagline: "Administración web y digital",
  description:
    "Diseño de páginas web y SEO local para pymes en Santiago. Tarjetas QR y NFC para reseñas en Google, con administración mensual a cargo de una persona real.",

  // Contenido del hero: se pasa como props a ResponsiveHeroBanner desde
  // app/page.tsx, para que todo el mensaje del sitio viva en un solo lugar.
  hero: {
    badgeLabel: "Nuevo",
    badgeText: "Tu web lista en 7 días",
    title: "Que te encuentren en Google,",
    titleLine2: "antes que tu competencia.",
    description:
      "Diseñamos tu página, activamos tu SEO local para que aparezcas primero cuando te buscan cerca, y te damos QR y NFC para juntar reseñas de 5 estrellas. Nosotros la administramos cada mes — tú solo atiendes tu negocio.",
    primaryButtonText: "Quiero mi página web",
    partnersTitle: "Pymes que ya aparecen mejor en Google gracias a nosotros",
  },

  // WhatsApp (sin +, sin espacios, con código de país)
  whatsappNumber: "56979914514",
  whatsappNumberDisplay: "+56 9 7991 4514",
  whatsappDefaultMessage:
    "Hola By Manoel, quiero saber más sobre el Kit de Lanzamiento y el Plan de Mantención.",

  address: {
    street: "José Miguel Infante 1415",
    comuna: "Providencia",
    region: "Región Metropolitana",
    country: "CL",
  },

  hours: {
    weekdays: "Lunes a viernes: 11:00 a 15:00 hrs, presencial",
    saturday: "Sábado: 10:00 a 14:00 hrs, solo por videollamada Zoom",
  },

  pricing: {
    launch: {
      name: "Kit de Lanzamiento",
      price: "$69.990",
      note: "pago único · IVA incluido",
      items: [
        "Diseño y desarrollo de tu página web",
        "Activación y optimización SEO local en Google",
        "1.000 flyers personalizados",
        "100 tarjetas de presentación personalizadas",
        "Tarjeta con código QR",
        "Tarjeta NFC para reseñas instantáneas en Google",
      ],
    },
    monthly: {
      name: "Plan de Mantención",
      price: "$9.990",
      note: "/ mes · IVA incluido",
      items: [
        "Administración continua de tu sitio",
        "Actualizaciones de contenido ilimitadas",
        "Soporte y mantenimiento",
        "Requisitos de la Ley 21.719 al día",
      ],
    },
    domainTransfer: DOMAIN_TRANSFER_PRICE,
  },

  clients: [
    {
      name: "Inflables Champa",
      url: "https://www.inflableschampa.cl",
      logo: `${BASE_PATH}/clients/inflables-champa.png`,
    },
    {
      name: "Zona Trofeos",
      url: "https://www.zonatrofeos.cl",
      logo: `${BASE_PATH}/clients/zona-trofeos.png`,
    },
  ],

  faq: [
    {
      question: "¿Qué pasa si cancelo la suscripción?",
      answer:
        "Se da de baja tu página, sin costo ni letra chica. Vuelves cuando quieras.",
    },
    {
      question: "¿Cuántas actualizaciones de contenido incluye el mes?",
      answer:
        "Ilimitadas: cambias precios, fotos, textos o promociones las veces que necesites.",
    },
    {
      question: "¿Cuánto demora la entrega?",
      answer: "Una semana desde que definimos los detalles en la reunión inicial.",
    },
    {
      question: "¿El dominio queda a mi nombre?",
      answer: `Por defecto no, para poder administrarlo sin trabas mientras estás en la suscripción. Si en algún momento lo quieres 100% a tu nombre, es una opción disponible por ${DOMAIN_TRANSFER_PRICE}.`,
    },
    {
      question: "¿Hay planes más grandes o más chicos?",
      answer:
        "Por ahora manejamos un solo Kit de Lanzamiento y un solo Plan de Mantención, simple a propósito. Si tu negocio necesita algo más específico, escríbenos y lo vemos juntos.",
    },
    {
      question: "¿Por qué no lo hago yo mismo en Wix o Canva?",
      answer:
        "Puedes, pero te va a tomar tiempo que no tienes, y sin SEO técnico igual no te va a encontrar nadie en Google. Nosotros lo hacemos y lo mantenemos al día — tú te dedicas a tu negocio.",
    },
    {
      question: "¿Con quién voy a hablar?",
      answer:
        "Conmigo, Manuel. No hay call center ni ticket de soporte: me escribes por WhatsApp y te respondo yo, el mismo día.",
    },
  ],
} as const;

/** Construye un link de WhatsApp (wa.me) con mensaje precargado. */
export function waLink(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
