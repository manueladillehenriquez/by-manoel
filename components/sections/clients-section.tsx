import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function ClientsSection() {
  return (
    <section id="clientes" className="border-t border-border bg-card/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Nuestro trabajo
          </p>
          <h2 className="mt-3 font-instrument-serif text-3xl text-foreground sm:text-4xl">
            Páginas que administramos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Negocios reales que ya confían en {siteConfig.businessName} para
            su presencia digital.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-3">
          {siteConfig.clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-2xl p-4 transition-colors hover:bg-card"
            >
              <span className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-card bg-white shadow-lg shadow-black/30">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={112}
                  height={112}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-sm font-medium text-foreground">
                {client.name}
              </span>
              <span className="text-xs text-muted-foreground">
                {client.url.replace("https://www.", "")}
              </span>
            </a>
          ))}

          {/* Cupo para el próximo cliente */}
          <div className="flex flex-col items-center gap-3 rounded-2xl p-4 text-muted-foreground">
            <span className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-border text-3xl">
              +
            </span>
            <span className="text-sm font-medium">Tu negocio</span>
            <span className="text-xs">próximamente</span>
          </div>
        </div>
      </div>
    </section>
  );
}
