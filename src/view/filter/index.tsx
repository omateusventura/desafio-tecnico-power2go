import { useForm } from "react-hook-form";
import { QueriesContext } from "@/context/QueriesContext";
import { useContext, useEffect } from "react";
import { CountrySchema, countrySchema } from "@/utils/schemas/queries";
import { zodResolver } from '@hookform/resolvers/zod';
import { GrFormSearch } from "react-icons/gr";
import { Spinner } from "@/components/spinner";
import { Combobox } from "@/components/combobox";
import { getCountries } from "@/services/get-countries";

import toast from "react-hot-toast";
import { ICountry } from "@/utils/interfaces/country";

export function Filter() {
  const { setLastQueries, setCurrentQuery } = useContext(QueriesContext);
  const { 
    handleSubmit, 
    register, 
    formState: { errors, isSubmitting }
  } = useForm<CountrySchema>({ resolver: zodResolver(countrySchema) });


  async function onSubmit(data: CountrySchema) {
    const response = await getCountries({ country: data.country });
    if (response.status !== 200)  {
      return toast.error(response?.message);
    }

    setLastQueries((prevState: ICountry[]) => {
      setCurrentQuery(response.data!);
      return [ 
        response.data!,
        ...prevState,
      ];
    });
  }

  useEffect(() => {
    if (errors.country) {
      const errMessage = errors.country.message!;
      toast.error(errMessage, {
        id: 'toast'
      });
    }
  }, [errors])
  
  return (
    <form 
      className="flex flex-col md:flex-row gap-2 md:gap-4" 
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full md:w-10/12 relative">
        <Combobox 
          { ...register('country') } 
          isInvalid={!!errors.country} 
          autoComplete="off"
        />
      </div>

      <button 
        type="submit"
        className="w-full md:w-2/12 h-[50px] bg-slate-900 text-white rounded-md 
        flex items-center justify-center gap-1 shadow-lg shadow-slate-300
        hover:bg-slate-800 ease-in-out duration-300" 
        aria-label="Enviar formulário"
      >
        { isSubmitting 
          ? <Spinner />
          : <>
              <GrFormSearch className="text-2xl text-slate-400" />
              <span>Buscar</span>
            </>
        }
      </button>
    </form>
  )
}