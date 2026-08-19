import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";
import { buildWhatsappLink } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--primary)_14%,transparent),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,var(--background)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(115deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 64px)",
          }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex size-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
          <Scissors className="size-7 text-primary" strokeWidth={1.5} />
        </div>

        <span className="text-xs font-semibold tracking-[0.3em] text-primary uppercase">
          Barbearia Clássica · Araraquara
        </span>

        <h1 className="max-w-3xl text-balance text-5xl leading-[1.05] font-semibold sm:text-6xl md:text-7xl">
          Onde a tradição vira ritual.
        </h1>

        <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
          Cortes clássicos, barba na navalha com toalha quente e um
          atendimento que começa e termina com respeito. Bem-vindo à Santa
          Barbearia.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-12 px-8 text-base"
            nativeButton={false}
            render={<a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" />}
          >
            Agendar no WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 text-base"
            nativeButton={false}
            render={<a href="#servicos" />}
          >
            Conhecer os serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
