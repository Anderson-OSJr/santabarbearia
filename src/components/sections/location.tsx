import { Clock, MapPin } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BUSINESS,
  MAPS_DIRECTIONS_URL,
  MAPS_EMBED_SRC,
  buildWhatsappLink,
} from "@/lib/constants";

export function Location() {
  return (
    <section id="localizacao" className="border-t border-border/60 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Nos visite" title="Onde Estamos" align="left" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-border">
              <iframe
                title={`Mapa - ${BUSINESS.name}`}
                src={MAPS_EMBED_SRC}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full grayscale-[30%] sm:h-96"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex h-full flex-col justify-center gap-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium">{BUSINESS.addressLine}</p>
                  <p className="text-sm text-muted-foreground">
                    {BUSINESS.addressCity}, {BUSINESS.postalCode}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="flex gap-4">
                <Clock className="mt-1 size-5 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  {BUSINESS.hours.map((h) => (
                    <div key={h.day} className="flex gap-2 text-sm">
                      <span className="w-36 text-muted-foreground">{h.day}</span>
                      <span className="font-medium">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <Button render={<a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer" />}>
                  Ver rota no Google Maps
                </Button>
                <Button
                  variant="outline"
                  render={<a href={buildWhatsappLink()} target="_blank" rel="noopener noreferrer" />}
                >
                  Chamar no WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
