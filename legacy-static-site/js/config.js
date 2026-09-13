/**
 * config.js
 * ------------------------------------------------------------------
 * TODOS los valores que cambian con frecuencia (precios, teléfono,
 * email, redes sociales, políticas) viven ÚNICAMENTE aquí.
 * script.js lee este objeto y lo vuelca en el HTML automáticamente,
 * así que para actualizar un precio o el número de WhatsApp solo
 * necesitas editar ESTE archivo, en un solo lugar.
 * ------------------------------------------------------------------
 */

const SITE_CONFIG = {
  // Nombre del negocio / marca
  businessName: "[NOMBRE_DEL_NEGOCIO]",

  // Número de WhatsApp CON código de país, solo dígitos (ej: 5491122334455)
  whatsappNumber: "[NUMERO_WHATSAPP_SOLO_DIGITOS_CON_CODIGO_PAIS]",

  // Mensaje precargado al abrir WhatsApp
  whatsappMessage:
    "Hola! Vi la página y quiero más información sobre el Kit de Lanzamiento y el Plan de Administración.",

  // Precios (formato libre: "$150.000", "USD 200", "S/ 600", etc.)
  launchPrice: "[PRECIO_KIT_DE_LANZAMIENTO]",
  monthlyPrice: "[PRECIO_MENSUAL]",

  // Cantidad de actualizaciones de contenido incluidas por mes
  updatesPerMonth: "[NUMERO]",

  // Tiempo estimado de entrega del Kit de Lanzamiento
  deliveryTime: "[por ejemplo: 5 a 7 días hábiles]",

  // Qué sucede si el cliente cancela la suscripción mensual
  cancellationPolicy:
    "[Describe aquí qué ocurre con el sitio, el dominio y el contenido si se cancela el Plan de Administración.]",

  // Contacto
  email: "[email@tudominio.com]",
  instagramUrl: "https://instagram.com/[tu_usuario]",
  facebookUrl: "https://facebook.com/[tu_pagina]",
};
