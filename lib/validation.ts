import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(120),
  service: z.string().trim().min(1, "Choose a service").max(80),
  message: z.string().trim().min(10, "Tell us a bit more (10+ characters)").max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
