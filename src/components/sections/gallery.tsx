import {
  Armchair,
  Award,
  Clock3,
  Scissors,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { PlaceholderTile } from "@/components/shared/placeholder-tile";

// Quando as fotos reais chegarem, troque cada PlaceholderTile abaixo por
// <Image src="/images/gallery/0N.jpg" .../> — ver public/images/gallery/README-swap.txt
const TILES = [
  { icon: Armchair, caption: "Sala de Atendimento" },
  { icon: Scissors, caption: "Estação de Barba" },
  { icon: Sparkles, caption: "Acabamento na Navalha" },
  { icon: Users, caption: "Ambiente Santa Barbearia" },
  { icon: Award, caption: "Produtos Premium" },
  { icon: Clock3, caption: "Atendimento Pontual" },
];

export function Gallery() {
  return (
    <section id="galeria" className="border-t border-border/60 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Conheça"
            title="Nosso Espaço"
            subtitle="Em breve, fotos reais do nosso ambiente. Por ora, um preview do que está por vir."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal key={tile.caption} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <PlaceholderTile icon={tile.icon} caption={tile.caption} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
