import { ICountry } from "../schemas/queries";

export function getLanguage({ country }: { country: ICountry }) {
  const languagesKeys = Object.keys(country?.languages)[0];
  const language = country.languages[languagesKeys];

  return language;
}