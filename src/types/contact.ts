export type ContactFormState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"name" | "phone" | "serviceId" | "message", string[]>>;
};

export const initialContactFormState: ContactFormState = { status: "idle" };
