import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site-config";

/** Botón flotante de WhatsApp, visible en todas las secciones. */
export function WhatsappFab() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--whatsapp)] text-white shadow-lg shadow-black/40 transition-colors hover:bg-[var(--whatsapp-dark)]"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
    </a>
  );
}
