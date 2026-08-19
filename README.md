# Santa Barbearia — site institucional

Site institucional da Santa Barbearia (Araraquara-SP). Next.js (App Router) +
TypeScript + Tailwind CSS + shadcn/ui + Prisma ORM + Zod + PostgreSQL.

## Rodando localmente

Pré-requisitos: Node 20+, Docker Desktop.

```bash
docker compose up -d        # sobe o Postgres local (porta 5433)
npm install
npx prisma migrate dev      # aplica as migrações
npx prisma db seed          # popula serviços e depoimentos de exemplo
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Use `npx prisma studio` para ver/editar os dados diretamente no banco.

## Antes de publicar em produção

- [ ] Trocar as fotos placeholder pelas reais em `public/images/gallery/`
      (veja `public/images/gallery/README-swap.txt`)
- [ ] Substituir os depoimentos de exemplo em `prisma/seed.ts` pelos reais
      do Google, depois rodar `npx prisma db seed` de novo
- [ ] Confirmar/ajustar preços (`priceFrom`) e durações dos serviços em
      `prisma/seed.ts`
- [ ] Confirmar os horários reais em `src/lib/constants.ts`
- [ ] Configurar `DATABASE_URL` e `NEXT_PUBLIC_WHATSAPP_NUMBER` no ambiente
      de produção (ver `.env.example`)

## Sobre o formulário de contato

Os pedidos de horário enviados pelo site ficam salvos na tabela `Lead`
(Postgres, via Prisma). Esse é o ponto de partida para uma futura automação
de atendimento por IA (classificação de mensagens + agendamento automático),
que ainda não foi implementada — hoje o proprietário acompanha os leads
manualmente (ex.: via `npx prisma studio`) e responde pelo WhatsApp.
# santabarbearia
