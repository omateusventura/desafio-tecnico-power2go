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
