import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Alex_Brush } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--inter-font",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--instrument-serif-font",
  display: "swap",
});

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: "400",
  variable: "--alex-brush-font",
  display: "swap",
});

// TODO: cuando conectes un dominio propio (ej. bymanoel.cl) a GitHub Pages,
// reemplaza esta URL por la real.
const siteUrl = "https://manueladillehenriquez.github.io/by-manoel";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.businessName} — Administración web y digital para tu negocio`,
    template: `%s · ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: [
    "administración web",
    "diseño de páginas web",
    "tarjeta NFC reseñas Google",
    "código QR",
    "SEO local Chile",
    "páginas web para pymes",
    "Providencia Santiago",
  ],
  authors: [{ name: siteConfig.businessName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    title: `${siteConfig.businessName} — Administración web y digital`,
    description: siteConfig.description,
    siteName: siteConfig.businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.businessName} — Administración web y digital`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.businessName,
  description: siteConfig.description,
  url: siteUrl,
  telephone: `+${siteConfig.whatsappNumber}`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.comuna,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: "CL",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "15:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${instrumentSerif.variable} ${alexBrush.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
