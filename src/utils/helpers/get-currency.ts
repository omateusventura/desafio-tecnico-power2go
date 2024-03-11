import { ICountry } from "../schemas/queries";

export function getCurrency({ country }: {country: ICountry}) {
  const keys = Object.keys(country?.currencies)[0];
  const currency = country.currencies[keys].name;
  
  return currency
}