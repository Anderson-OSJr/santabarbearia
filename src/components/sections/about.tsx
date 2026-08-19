import { Award, Clock, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const PILLARS = [
  {
    icon: Award,
    title: "Precisão",
    description: "Técnica clássica de barbearia, executada com atenção a cada detalhe.",
  },
  {
    icon: Clock,
    title: "Tradição",
    description: "Navalha, toalha quente e um ritual que atravessa gerações.",
  },
  {
    icon: HeartHandshake,
    title: "Respeito ao cliente",
    description: "Pontualidade e um atendimento que trata cada cliente como único.",
  },
];

export function About() {
  return (
    <section id="sobre" className="border-t border-border/60 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Nossa história"
            title="Mais que um corte, um ritual."
          />
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
            Na Santa Barbearia, cada atendimento é conduzido com a precisão de
            quem respeita o ofício da barbearia clássica. Navalha afiada,
            toalha quente e atenção a cada detalhe — do primeiro cumprimento
            ao último ajuste no espelho. Em Araraquara, construímos uma
            barbearia pensada para quem valoriza tradição, pontualidade e um
            resultado impecável a cada visita.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={(i * 100) as 0 | 100 | 200}>
              <div className="flex flex-col items-center gap-4 rounded-lg border border-border bg-card p-8 text-center">
                <pillar.icon className="size-8 text-primary" strokeWidth={1.5} />
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
