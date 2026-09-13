/**
 * script.js
 * ------------------------------------------------------------------
 * Toma los valores de config.js y los vuelca en el HTML:
 *  - Todos los enlaces [data-whatsapp] apuntan al número + mensaje.
 *  - Todos los [data-config="clave"] muestran el valor de esa clave.
 *  - Todos los [data-config-href="clave"] usan el valor como href.
 * También maneja el acordeón de preguntas frecuentes.
 * ------------------------------------------------------------------
 */

document.addEventListener("DOMContentLoaded", function () {
  applyConfig();
  wireWhatsappLinks();
  setupAccordion();
  setupContactFormFallback();
  document.getElementById("year").textContent = new Date().getFullYear();
});

function applyConfig() {
  document.querySelectorAll("[data-config]").forEach(function (el) {
    const key = el.getAttribute("data-config");
    if (SITE_CONFIG[key] !== undefined) {
      el.textContent = SITE_CONFIG[key];
    }
  });

  document.querySelectorAll("[data-config-href]").forEach(function (el) {
    const key = el.getAttribute("data-config-href");
    if (SITE_CONFIG[key] !== undefined) {
      el.setAttribute("href", SITE_CONFIG[key]);
    }
  });

  document.title = document.title.replace(
    "[NOMBRE_DEL_NEGOCIO]",
    SITE_CONFIG.businessName
  );
}

function wireWhatsappLinks() {
  const text = encodeURIComponent(SITE_CONFIG.whatsappMessage || "");
  const number = (SITE_CONFIG.whatsappNumber || "").replace(/\D/g, "");
  const url = "https://wa.me/" + number + (text ? "?text=" + text : "");

  document.querySelectorAll("[data-whatsapp]").forEach(function (el) {
    el.setAttribute("href", url);
  });
}

function setupAccordion() {
  document.querySelectorAll(".accordion-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const item = btn.closest(".accordion-item");
      const isOpen = item.classList.contains("is-open");

      // Cierra los demás (acordeón exclusivo); comenta estas líneas
      // si prefieres que se puedan abrir varias preguntas a la vez.
      document.querySelectorAll(".accordion-item.is-open").forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove("is-open");
          openItem.querySelector(".accordion-trigger").setAttribute("aria-expanded", "false");
        }
      });

      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

function setupContactFormFallback() {
  // Si no se configuró un servicio de envío (formsubmit/formspree),
  // evita el error 404 y ofrece un mailto: como respaldo simple.
  const form = document.getElementById("contact-form");
  if (!form) return;

  const action = form.getAttribute("action") || "";
  if (action.includes("[EMAIL_CONTACTO]")) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.querySelector("#name").value;
      const phone = form.querySelector("#phone").value;
      const message = form.querySelector("#message").value;
      const body = encodeURIComponent(
        "Nombre: " + name + "\nTeléfono: " + phone + "\n\n" + message
      );
      window.location.href =
        "mailto:" + SITE_CONFIG.email + "?subject=Nuevo contacto desde la landing&body=" + body;
    });
  }
}
