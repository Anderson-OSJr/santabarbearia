import { prisma } from "@/lib/prisma";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { StarRating } from "@/components/shared/star-rating";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export async function Testimonials() {
  const testimonials = await prisma.testimonial.findMany({
    orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
    take: 6,
  });

  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Confiança"
            title="O que dizem nossos clientes"
            subtitle="Avaliações reais, direto do Google."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <Card className="flex h-full flex-col border-border bg-card">
                <CardContent className="flex flex-1 flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <StarRating rating={t.rating} />
                    <Badge variant="secondary" className="capitalize">
                      {t.source}
                    </Badge>
                  </div>
                  <p className="flex-1 text-sm text-foreground/90">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-2">
                    <Avatar className="size-9 border border-primary/30">
                      <AvatarFallback className="bg-gradient-to-br from-primary/40 to-primary/10 text-xs font-semibold text-primary">
                        {initials(t.authorName)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{t.authorName}</span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
