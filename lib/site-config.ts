/**
 * site-config.ts
 * ------------------------------------------------------------------
 * Toda la información del negocio (precios, WhatsApp, dirección,
 * horarios, clientes) vive en un solo lugar. Los componentes de
 * /components/sections la importan desde acá — así, para actualizar
 * un precio o el número de WhatsApp solo se edita este archivo.
 * ------------------------------------------------------------------
 */

const DOMAIN_TRANSFER_PRICE = "$21.990";

export const siteConfig = {
  businessName: "By Manoel",
  tagline: "Administración web y digital",
  description:
    "Diseño y administración de páginas web, tarjetas QR y NFC para reseñas en Google, y soporte mensual para pequeños negocios.",

  // WhatsApp (sin +, sin espacios, con código de país)
  whatsappNumber: "56979914514",
  whatsappNumberDisplay: "+56 9 7991 4514",
  whatsappDefaultMessage:
    "Hola By Manoel, quiero saber más sobre el Paquete Inicial y la suscripción mensual.",

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
      name: "Paquete Inicial",
      price: "$99.000",
      note: "pago único",
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
      name: "Suscripción Mensual",
      price: "$9.990",
      note: "/ mes",
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
      logo: "/clients/inflables-champa.png",
    },
    {
      name: "Zona Trofeos",
      url: "https://www.zonatrofeos.cl",
      logo: "/clients/zona-trofeos.png",
    },
  ],

  faq: [
    {
      question: "¿Qué pasa si cancelo la suscripción?",
      answer: "Solo se dará de baja la página, nada más.",
    },
    {
      question: "¿Cuántas actualizaciones de contenido incluye el mes?",
      answer: "Ilimitadas.",
    },
    {
      question: "¿Cuánto demora la entrega?",
      answer: "1 semana desde que se concreta la reunión.",
    },
    {
      question: "¿El dominio queda a mi nombre?",
      answer: `No, queda a nuestro nombre; sin embargo, es transferible por ${DOMAIN_TRANSFER_PRICE}.`,
    },
    {
      question: "¿Hay planes más grandes o más chicos?",
      answer:
        "De momento existe un único Paquete Inicial y un único Plan mensual.",
    },
  ],
} as const;

/** Construye un link de WhatsApp (wa.me) con mensaje precargado. */
export function waLink(message: string = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
