import { z } from "zod";

export const coinSchema = z.object({
  package_name: z.string().min(1, "Package name is required"),
  platform: z.string().min(1, "Platform is required"),
  coin_amount: z.number().min(0, "Coin amount is required"),
  price: z.number().min(0, "Price is required"),
  currency: z.string().min(1, "Currency is required"),
  platform_product_id: z.string().min(1, "Platform product ID is required"),
  is_active: z.boolean(),
});

export type CoinFormValues = z.infer<typeof coinSchema>;
