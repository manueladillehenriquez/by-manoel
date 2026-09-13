"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface Partner {
  name: string;
  logoUrl: string;
  href: string;
}

interface ResponsiveHeroBannerProps {
  /** Texto del logo (por defecto, mientras no exista un isotipo exportado). */
  logoText?: string;
  /** Si se pasa, se usa como imagen de logo en vez del texto. */
  logoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  badgeText?: string;
  badgeLabel?: string;
  title?: string;
  titleLine2?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  partnersTitle?: string;
  partners?: Partner[];
}

/**
 * ResponsiveHeroBanner
 * ------------------------------------------------------------------
 * Adaptado del componente original (21st.dev) para By Manoel:
 * - `logoUrl` (imagen de fondo) se volvió opcional; si no se pasa,
 *   se renderiza `logoText` con la fuente firma (--font-signature).
 *   Motivo: By Manoel aún no tiene un isotipo exportado como imagen.
 * - Se agregó el panel de menú móvil: el botón hamburguesa existía
 *   en el original pero no desplegaba ningún contenido.
 * - `partners` ahora requiere `name` (para el `alt` de la imagen).
 * ------------------------------------------------------------------
 */
const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  logoText = "By Manoel",
  logoUrl,
  backgroundImageUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2070&auto=format&fit=crop",
  navLinks = [
    { label: "Servicios", href: "#servicios" },
    { label: "Clientes", href: "#clientes" },
    { label: "Agendar", href: "#agenda" },
    { label: "Preguntas", href: "#faq" },
  ],
  ctaButtonText = "Escríbenos",
  ctaButtonHref = "#contacto",
  badgeLabel = "Nuevo",
  badgeText = "Kit de Lanzamiento + suscripción mensual",
  title = "Tu negocio, listo",
  titleLine2 = "para brillar en internet",
  description = "Diseñamos tu página web, activamos tu SEO local y te entregamos tarjetas QR y NFC para reseñas en Google. Después, la administramos por ti cada mes.",
  primaryButtonText = "Agendar reunión",
  primaryButtonHref = "#agenda",
  secondaryButtonText = "Ver planes y precios",
  secondaryButtonHref = "#servicios",
  partnersTitle = "Negocios que ya confían en nosotros",
  partners = [],
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="inicio"
      className="w-full isolate min-h-screen overflow-hidden relative"
    >
      <Image
        src={backgroundImageUrl}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay oscuro para que el texto siempre sea legible sobre la foto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/30" />

      <header className="z-20 xl:top-4 relative">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-4">
            {logoUrl ? (
              <a
                href="#inicio"
                aria-label={logoText}
                className="inline-flex items-center justify-center bg-center w-[100px] h-[40px] bg-cover rounded"
                style={{ backgroundImage: `url(${logoUrl})` }}
              />
            ) : (
              <a
                href="#inicio"
                aria-label={logoText}
                className="text-3xl leading-none text-white [font-family:var(--font-signature)]"
              >
                {logoText}
              </a>
            )}

            <nav className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-1 rounded-full bg-white/5 px-1 py-1 ring-1 ring-white/10 backdrop-blur">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium hover:text-white font-sans transition-colors ${
                      link.isActive ? "text-white/90" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={ctaButtonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-sm font-medium text-neutral-900 hover:bg-white/90 font-sans transition-colors"
                >
                  {ctaButtonText}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </nav>

            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15 backdrop-blur"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Abrir o cerrar el menú"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-white/90" />
              ) : (
                <Menu className="h-5 w-5 text-white/90" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav
              id="mobile-nav"
              className="md:hidden mt-3 flex flex-col gap-1 rounded-2xl bg-white/10 p-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1"
            >
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-white/85 hover:bg-white/10 hover:text-white font-sans transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={ctaButtonHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 font-sans"
              >
                {ctaButtonText}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          )}
        </div>
      </header>

      <div className="z-10 relative">
        <div className="sm:pt-28 md:pt-32 lg:pt-40 max-w-7xl mx-auto pt-28 px-6 pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white/10 px-2.5 py-2 ring-1 ring-white/15 backdrop-blur animate-fade-slide-in-1">
              <span className="inline-flex items-center text-xs font-medium text-neutral-900 bg-white/90 rounded-full py-0.5 px-2 font-sans">
                {badgeLabel}
              </span>
              <span className="text-sm font-medium text-white/90 font-sans">
                {badgeText}
              </span>
            </div>

            <h1 className="sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl text-white tracking-tight font-instrument-serif font-normal animate-fade-slide-in-2">
              {title}
              <br className="hidden sm:block" />
              {titleLine2}
            </h1>

            <p className="sm:text-lg animate-fade-slide-in-3 text-base text-white/80 max-w-2xl mt-6 mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center animate-fade-slide-in-4">
              <a
                href={primaryButtonHref}
                className="inline-flex items-center gap-2 hover:bg-white/15 text-sm font-medium text-white bg-white/10 ring-white/15 ring-1 rounded-full py-3 px-5 font-sans transition-colors"
              >
                {primaryButtonText}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={secondaryButtonHref}
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 text-sm font-medium text-white/90 hover:text-white font-sans transition-colors"
              >
                {secondaryButtonText}
              </a>
            </div>
          </div>

          {partners.length > 0 && (
            <div className="mx-auto mt-20 max-w-5xl">
              <p className="animate-fade-slide-in-1 text-sm text-white/70 text-center">
                {partnersTitle}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 animate-fade-slide-in-2 text-white/70 mt-6 items-center justify-items-center gap-6">
                {partners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-16 w-32 items-center justify-center rounded-xl bg-white/95 p-2 opacity-90 hover:opacity-100 transition-opacity"
                  >
                    {/* Logos reales de clientes, con fondo blanco para que se vean bien */}
                    <Image
                      src={partner.logoUrl}
                      alt={partner.name}
                      width={112}
                      height={56}
                      className="h-full w-full object-contain"
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
