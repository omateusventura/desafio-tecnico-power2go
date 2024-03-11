import { z } from "zod";

export const countrySchema = z.object({
  country: z.string().min(1, { message: 'Por favor, informe o país.' })
})

export type CountrySchema = z.infer<typeof countrySchema>;