import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const TILES = [
  { src: "/images/gallery/01.jpg", caption: "Acabamento na Navalha" },
  { src: "/images/gallery/02.jpg", caption: "Design de Fade" },
  { src: "/images/gallery/03.jpg", caption: "Atendimento Santa Barbearia" },
  { src: "/images/gallery/04.jpg", caption: "Estilo e Precisão" },
  { src: "/images/gallery/05.jpg", caption: "Cortes Modernos" },
  { src: "/images/gallery/06.jpg", caption: "Ambiente Santa Barbearia" },
];

export function Gallery() {
  return (
    <section id="galeria" className="border-t border-border/60 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Conheça"
            title="Nosso Espaço"
            subtitle="Cortes, acabamentos e o dia a dia da Santa Barbearia."
          />
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TILES.map((tile, i) => (
            <Reveal key={tile.src} delay={((i % 3) * 100) as 0 | 100 | 200}>
              <Image
                src={tile.src}
                alt={tile.caption}
                width={800}
                height={600}
                className="aspect-4/3 w-full rounded-lg border border-border object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
