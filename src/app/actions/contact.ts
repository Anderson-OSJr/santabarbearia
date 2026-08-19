"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/validations/contact";
import type { ContactFormState } from "@/types/contact";

// Cada Lead criado aqui é hoje repassado manualmente ao atendimento via
// WhatsApp. É também o ponto de extensão natural para a futura automação
// de IA (classificação de mensagens + agendamento) — ver comentário no
// model Lead em prisma/schema.prisma.
export async function submitLead(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      status: "error",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  await prisma.lead.create({
    data: {
      name: parsed.data.name,
      phone: parsed.data.phone,
      message: parsed.data.message || null,
      serviceId: parsed.data.serviceId || null,
      source: "website",
    },
  });

  return { status: "success" };
}
