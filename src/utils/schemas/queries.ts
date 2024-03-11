import { z } from "zod";

export interface ICountry {
  datetime: string,
  name: {
    common: string;
    official: string;
  },
  continents: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  },
  languages:  { 
    [ key: string ]: string 
  };
  population: number;
  currencies:  { 
    [key: string]: string 
  };
}

export const countrySchema = z.object({
  country: z.string().min(1, { message: 'Por favor, informe o país.' })
})

export type CountrySchema = z.infer<typeof countrySchema>;