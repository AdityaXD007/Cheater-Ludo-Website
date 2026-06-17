import { z } from "zod";

export const templateSchema = z.object({
  name: z.string().min(1, "Template name is required"),
  category: z.enum(["Modern", "Professional", "Creative", "Minimalist", "Corporate"]),
  is_premium: z.boolean(),
  coin_cost: z.string().min(0, "Coins mus\t be a positive number").optional(),
  layout: z.string().min(1, "Template HTML is required"),
  image_upload: z.any().optional(),
});

export type TemplateFormValues = z.infer<typeof templateSchema>;
