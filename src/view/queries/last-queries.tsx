import { QueriesContext } from "@/context/QueriesContext"
import { ICountry } from "@/utils/schemas/queries";
import { useContext } from "react";

export function Queries() {
  const { lastQueries, setCurrentQuery } = useContext(QueriesContext);

  return (
    <table 
      className="block w-full lg:w-6/12 h-fit max-h-[calc(100%_-_100px)] mx-auto rounded-lg 
      border border-slate-100 shadow-lg"
    >
      <thead className="sticky top-0">
        <tr className="bg-slate-900 py-2">
          <th colSpan={5} className="w-[800px] text-sm text-white py-2 rounded-tl-lg rounded-tr-lg">
            Histórico de consultas
          </th>
        </tr>
        <tr className="border-b border-b-slate-100">
          <th className="w-[320px] text-start text-sm text-slate-900 font-bold px-2 py-2">
            Data de consulta
          </th>
          <th className="w-[800px] text-start text-sm text-slate-900 font-bold px-2 py-2">
            Consulta
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody className="block overflow-y-scroll w-full max-h-[calc(100%_-_70px)]">
        {
          lastQueries.length === 0 
          ? 
            <tr>
              <td className="w-[800px] text-sm text-center py-2.5" colSpan={5}>Nenhuma consulta efetuada</td>
            </tr>

          : 
          lastQueries.slice().reverse().map((country: ICountry, index: number) => {
            return (
              <tr className="odd:bg-slate-50 border-b border-slate-100" key={index}>
                <td className="text-start text-sm px-2 py-2 w-[800px]">
                  {country.datetime}
                </td>
                <td className="text-start text-sm px-2 py-2 w-[800px]">
                  {country.name.common}
                </td>
                <td className="text-start text-sm px-2 py-2 w-[800px]">
                  <button 
                      className="bg-slate-900 text-white text-xs rounded-md px-4 py-2 ml-2" 
                      type="button"
                      onClick={() => setCurrentQuery(country)}
                    >
                    Buscar
                  </button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}