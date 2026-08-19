export const BUSINESS = {
  name: "Santa Barbearia",
  city: "Araraquara",
  addressLine: "Av. Joaquim de Souza Pinheiro, 488 - Vila Nice",
  addressCity: "Araraquara - SP",
  postalCode: "14802-020",
  country: "Brasil",
  fullAddress:
    "Av. Joaquim de Souza Pinheiro, 488 - Vila Nice, Araraquara - SP, 14802-020",
  phoneDisplay: "+55 16 99735-7888",
  // Usado nos links wa.me — mantenha em sincronia com NEXT_PUBLIC_WHATSAPP_NUMBER
  phoneE164:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "5516997357888",
  // Horários PLACEHOLDER — confirmar com o proprietário antes de publicar
  hours: [
    { day: "Segunda a Sexta", value: "09:00 – 19:00" },
    { day: "Sábado", value: "09:00 – 17:00" },
    { day: "Domingo", value: "Fechado" },
  ],
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
] as const;

export function buildWhatsappLink(
  message = "Olá! Gostaria de agendar um horário na Santa Barbearia.",
) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.phoneE164}?text=${encoded}`;
}

export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  BUSINESS.fullAddress,
)}&output=embed`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  BUSINESS.fullAddress,
)}`;
