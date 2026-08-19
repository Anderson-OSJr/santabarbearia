import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { WhatsappButton } from "@/components/layout/whatsapp-button";
import { Toaster } from "@/components/ui/sonner";
import { BUSINESS } from "@/lib/constants";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://santabarbearia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${BUSINESS.name} | Barbearia clássica em ${BUSINESS.city}`,
  description:
    "Cortes clássicos, barba na navalha com toalha quente e um atendimento que respeita a tradição da barbearia. Agende pelo WhatsApp.",
  openGraph: {
    title: `${BUSINESS.name} | Barbearia clássica em ${BUSINESS.city}`,
    description:
      "Cortes clássicos, barba na navalha com toalha quente e um atendimento que respeita a tradição da barbearia.",
    url: siteUrl,
    siteName: BUSINESS.name,
    locale: "pt_BR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: BUSINESS.name,
  telephone: `+${BUSINESS.phoneE164}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.addressLine,
    addressLocality: BUSINESS.city,
    addressRegion: "SP",
    postalCode: BUSINESS.postalCode,
    addressCountry: "BR",
  },
  priceRange: "$$",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <WhatsappButton />
        <Toaster />
      </body>
    </html>
  );
}
