import { siteConfig } from "@/lib/site-config";

/**
 * Pequeño sello de autoría, fijo en la esquina inferior derecha en todas
 * las secciones (igual que el botón de WhatsApp, pero más arriba para no
 * pisarlo). Es solo el nombre del negocio, en la fuente firma: funciona
 * como garantía visual de que el sitio es realmente de {businessName},
 * reforzando el aviso antifraude de la sección de contacto.
 */
export function SiteSignature() {
  return (
    <a
      href="#inicio"
      aria-label={`${siteConfig.businessName} — sitio oficial`}
      className="fixed bottom-24 right-5 z-40 text-lg leading-none text-foreground/40 [font-family:var(--font-signature)] transition-colors hover:text-foreground/70"
    >
      {siteConfig.businessName}
    </a>
  );
}
