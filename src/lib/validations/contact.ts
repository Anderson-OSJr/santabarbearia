import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo.").max(80),
  phone: z.string().min(10, "Informe um telefone válido com DDD.").max(20),
  serviceId: z.string().optional(),
  message: z.string().max(500).optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
