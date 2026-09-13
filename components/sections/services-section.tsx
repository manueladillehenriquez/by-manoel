import { Check } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site-config";

function PriceCard({
  plan,
  featured,
}: {
  plan: (typeof siteConfig.pricing)["launch" | "monthly"];
  featured?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 rounded-2xl border p-8 ${
        featured
          ? "border-accent bg-card shadow-[0_0_0_1px_var(--whatsapp)]"
          : "border-border bg-card"
      }`}
    >
      <h3 className="font-instrument-serif text-2xl text-foreground">
        {plan.name}
      </h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-semibold tracking-tight text-foreground">
          {plan.price}
        </span>
        <span className="text-sm text-muted-foreground">{plan.note}</span>
      </div>
      <ul className="flex flex-col gap-3">
        {plan.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
            <Check className="mt-0.5 h-4 w-4 flex-none text-accent" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="border-t border-border bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-16 max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Servicios
          </p>
          <h2 className="mt-3 font-instrument-serif text-3xl text-foreground sm:text-4xl">
            Parte con todo resuelto. Después, no te preocupas de nada más.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Nada de plantillas genéricas ni letra chica: pagas una vez para
            lanzarte, y una suscripción simple para que tu web nunca quede
            abandonada.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <PriceCard plan={siteConfig.pricing.launch} featured />
          <PriceCard plan={siteConfig.pricing.monthly} />
        </div>

        <div className="mt-10 text-center">
          <a
            href={waLink("Hola By Manoel, quiero cotizar el Kit de Lanzamiento + Plan de Mantención.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-colors hover:bg-[var(--whatsapp-dark)]"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
