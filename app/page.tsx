import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { ServicesSection } from "@/components/sections/services-section";
import { ClientsSection } from "@/components/sections/clients-section";
import { BookingSection } from "@/components/sections/booking-section";
import { FaqSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFab } from "@/components/whatsapp-fab";
import { siteConfig, waLink } from "@/lib/site-config";

export default function Home() {
  return (
    <main>
      <ResponsiveHeroBanner
        ctaButtonHref={waLink()}
        partners={siteConfig.clients.map((c) => ({
          name: c.name,
          logoUrl: c.logo,
          href: c.url,
        }))}
      />
      <ServicesSection />
      <ClientsSection />
      <BookingSection />
      <FaqSection />
      <ContactSection />
      <SiteFooter />
      <WhatsappFab />
    </main>
  );
}
