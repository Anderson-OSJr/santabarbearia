"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import { submitLead } from "@/app/actions/contact";
import { initialContactFormState } from "@/types/contact";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ServiceOption = { id: string; name: string };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="h-11 w-full" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" /> Enviando...
        </>
      ) : (
        "Enviar solicitação"
      )}
    </Button>
  );
}

export function ContactForm({ services }: { services: ServiceOption[] }) {
  const [state, formAction] = useActionState(submitLead, initialContactFormState);

  return (
    <section id="contato" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Fale com a gente"
            title="Solicite seu horário"
            subtitle="Prefere agendar por aqui? Preencha os dados e retornaremos rapidinho. Ou, se preferir, fale direto no WhatsApp."
          />
        </Reveal>

        <Reveal delay={100}>
          {state.status === "success" ? (
            <Alert className="mt-10 border-primary/40 bg-primary/5">
              <CheckCircle2 className="size-4 text-primary" />
              <AlertTitle>Solicitação recebida!</AlertTitle>
              <AlertDescription>
                Em breve entraremos em contato pelo WhatsApp para confirmar seu
                horário.
              </AlertDescription>
            </Alert>
          ) : (
            <form action={formAction} className="mt-10 flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Nome*</Label>
                <Input id="name" name="name" placeholder="Seu nome completo" required />
                {state.errors?.name ? (
                  <p className="text-xs text-destructive">{state.errors.name[0]}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone">Telefone / WhatsApp*</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(16) 99999-9999"
                  required
                />
                {state.errors?.phone ? (
                  <p className="text-xs text-destructive">{state.errors.phone[0]}</p>
                ) : null}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="serviceId">Serviço de interesse</Label>
                <Select name="serviceId">
                  <SelectTrigger id="serviceId" className="w-full">
                    <SelectValue placeholder="Selecione um serviço (opcional)" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte um pouco sobre o que procura (opcional)"
                  rows={4}
                />
              </div>

              <SubmitButton />
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
