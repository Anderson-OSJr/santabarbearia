import { MessageCircle } from "lucide-react";
import { buildWhatsappLink } from "@/lib/constants";

export function WhatsappButton() {
  return (
    <a
      href={buildWhatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_0_0_4px_color-mix(in_oklab,var(--whatsapp)_20%,transparent),0_8px_24px_-4px_rgba(0,0,0,0.5)] transition-transform hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-7" strokeWidth={2} />
    </a>
  );
}
