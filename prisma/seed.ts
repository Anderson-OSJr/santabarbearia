// ATENÇÃO: os valores de `priceFrom` e `durationMin` abaixo são placeholders
// realistas para uma barbearia clássica. Antes de publicar em produção, o
// proprietário deve confirmar/ajustar esses valores aqui e rodar
// `npx prisma db seed` novamente.
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

const services = [
  {
    name: "Corte Clássico",
    slug: "corte-classico",
    description: "Corte na tesoura e máquina, com acabamento na navalha.",
    priceFrom: 45,
    durationMin: 40,
    order: 1,
  },
  {
    name: "Barba Completa",
    slug: "barba-completa",
    description:
      "Toalha quente, navalha e produtos premium para uma barba alinhada.",
    priceFrom: 40,
    durationMin: 30,
    order: 2,
  },
  {
    name: "Corte + Barba",
    slug: "corte-barba",
    description:
      "O combo completo para quem não abre mão da precisão em cada detalhe.",
    priceFrom: 75,
    durationMin: 60,
    order: 3,
  },
  {
    name: "Sobrancelha",
    slug: "sobrancelha",
    description: "Design e alinhamento na navalha para um olhar mais expressivo.",
    priceFrom: 20,
    durationMin: 15,
    order: 4,
  },
  {
    name: "Pigmentação de Barba",
    slug: "pigmentacao-barba",
    description:
      "Uniformiza falhas e realça o desenho da barba com produtos profissionais.",
    priceFrom: 50,
    durationMin: 45,
    order: 5,
  },
  {
    name: "Corte Infantil",
    slug: "corte-infantil",
    description: "Atendimento especial e paciente para os pequenos clientes.",
    priceFrom: 35,
    durationMin: 30,
    order: 6,
  },
];

// Depoimentos reais, coletados da ficha do Google Maps "Santa Barbearia
// Araraquara" (5,0 · 207 avaliações) em 2026-08-20. Só 2 avaliações tinham
// nome de autor legível no momento da coleta — dá pra completar depois
// direto pelo Google Business Profile do proprietário.
const testimonials = [
  {
    authorName: "Sandra Díaz",
    rating: 5,
    text: 'Tratamento sempre impecável. Cabelo cacheado do meu filho é "treta" de cortar e fica sempre perfeito. (Corte com tesoura) Cliente há anos e recomendo muito.',
    featured: true,
  },
  {
    authorName: "Anderson Sanchez",
    rating: 5,
    text: "Ótimo profissional, recomendo a todos! Top",
    featured: false,
  },
];

async function main() {
  for (const s of services) {
    await prisma.service.upsert({
      where: { slug: s.slug },
      update: s,
      create: s,
    });
  }

  await prisma.testimonial.deleteMany();
  await prisma.testimonial.createMany({ data: testimonials });

  console.log(
    `Seed concluído: ${services.length} serviços, ${testimonials.length} depoimentos.`,
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
