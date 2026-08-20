import { prisma } from "@/lib/prisma";

// Serviços e depoimentos vêm do Postgres (via Prisma Studio ou seed).
// Renderização dinâmica: o build da imagem Docker não tem acesso ao banco
// de produção, então a página não pode ser pré-renderizada (SSG/ISR) —
// cada request busca os dados atuais direto do Postgres.
export const dynamic = "force-dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Gallery } from "@/components/sections/gallery";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { ContactForm } from "@/components/sections/contact-form";
import { Footer } from "@/components/sections/footer";

export default async function Home() {
  const services = await prisma.service.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
    select: { id: true, name: true },
  });

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Location />
      <ContactForm services={services} />
      <Footer />
    </>
  );
}
