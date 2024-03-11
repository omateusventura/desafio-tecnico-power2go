import { instance } from "@/lib/axios";
import { getCurrency } from "@/utils/helpers/get-currency";
import { getLanguage } from "@/utils/helpers/get-language";
import { ICountry } from "@/utils/interfaces/country";
import axios from "axios";
import moment from "moment";

export interface OutputGetCountries {
  status: number;
  message: string;
  data?: ICountry;
}

export async function getCountries({ country }: { country: string }) : Promise<OutputGetCountries> {
  try {
    const { status, data: response } = await instance.get(`/name/${country}`);
    
    /**
    * Ajusta valores para serem exibidos corretamente
    * * Datetime
    * * Currency
    * * Language
    */

    const countryData = response[0];
    const datetime = moment().format('DD/MM/YYYY H:mm');
    countryData.currencies.value = getCurrency({country: countryData});
    countryData.languages.value = getLanguage({country: countryData});

    const data: ICountry = { 
      datetime, 
      ...countryData
    };

    return {
      status, 
      message: 'Requisição efetuada com sucesso',
      data
    }

  } catch (error) {
    console.log(error)
    if (axios.isAxiosError(error)) {
      const errCode = error.response?.data.status;
      const errMessage = error.response?.data.message;

      return {
        status: errCode,
        message: errMessage,
      }
    }

    return {
      status: 500,
      message: 'Um erro insperado ocorreu',
    }
  }
}