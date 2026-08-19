import { prisma } from "@/lib/prisma";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function formatPrice(value: unknown) {
  const n = Number(value);
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export async function Services() {
  const services = await prisma.service.findMany({
    where: { active: true },
    orderBy: { order: "asc" },
  });

  return (
    <section id="servicos" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="O que fazemos" title="Barba & Cabelo" />
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <Badge variant="outline" className="shrink-0 border-primary/40 text-primary">
                      {formatPrice(service.priceFrom)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <span className="text-xs font-medium tracking-wide text-muted-foreground/80 uppercase">
                    ~{service.durationMin} min
                  </span>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
