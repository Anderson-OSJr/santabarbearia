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

// Depoimentos de EXEMPLO — substituir pelos textos reais do Google
// Maps/Business Profile assim que a coleta de avaliações reais for feita.
const testimonials = [
  {
    authorName: "Rafael M.",
    rating: 5,
    text: "Ambiente impecável e atendimento de outro nível. Saí de lá parecendo outra pessoa. Virei cliente fixo.",
    featured: true,
  },
  {
    authorName: "Lucas A.",
    rating: 5,
    text: "Barba feita na navalha com toalha quente é diferencial. Recomendo demais, equipe muito atenciosa.",
    featured: true,
  },
  {
    authorName: "Gabriel S.",
    rating: 5,
    text: "Melhor barbearia de Araraquara. Pontualidade, capricho no corte e preço justo.",
    featured: true,
  },
  {
    authorName: "Thiago R.",
    rating: 5,
    text: "Já indiquei para vários amigos. Ambiente clássico, profissionais excelentes.",
    featured: false,
  },
  {
    authorName: "Bruno C.",
    rating: 5,
    text: "Atendimento rápido pelo WhatsApp e resultado sempre acima do esperado.",
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
