import { QueriesContext } from "@/context/QueriesContext"
import { ICountry } from "@/utils/schemas/queries";
import { useContext } from "react";
import { ExcelButton } from "./export-excel-button";

export function LastQueries() {
  const { lastQueries, setCurrentQuery } = useContext(QueriesContext);

  return (
    <table 
      className="block w-full lg:w-6/12 h-fit max-h-[calc(100%_-_210px)] mx-auto rounded-lg 
      border border-slate-100 shadow-lg"
    >
      <thead className="sticky top-0">
        <tr className="bg-slate-900 py-2">
          <th 
            colSpan={5} 
            className="relative w-[800px] text-sm text-white py-2.5 rounded-tl-lg rounded-tr-lg"
          >
            Histórico de consultas
            <div 
              className="flex items-center absolute top-1/2 right-0
              transform -translate-x-1/2 -translate-y-1/2"
            >
             <ExcelButton />
            </div>
          </th>
        </tr>
        <tr className="bg-white border-b border-b-slate-100">
          <th className="w-[198px] text-start text-sm text-slate-900 font-bold px-2 py-2.5">
            Data de consulta
          </th>
          <th className="text-start text-sm text-slate-900 font-bold py-2.5">
            Consulta
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody className="block overflow-y-scroll w-full max-h-[calc(100vh_-_290px)]">
        {
          lastQueries.length === 0 
          ? 
            <tr>
              <td className="w-[800px] text-sm text-center py-2.5" colSpan={5}>Nenhuma consulta efetuada</td>
            </tr>

          : 
          lastQueries.map((country: ICountry, index: number) => {
            return (
              <tr className="odd:bg-slate-50 border-b border-slate-100" key={index}>
                <td className="w-[384px] text-start text-sm px-2 py-2">
                  {country?.datetime}
                </td>
                <td className="w-[40vw] text-start text-sm py-2">
                  {country?.name.common}
                </td>
                <td className="text-start text-sm px-2 py-2">
                  <button 
                    type="button"
                    className="bg-slate-900 text-white text-xs rounded-md px-4 py-2 ml-2 
                    shadow-lg shadow-slate-300" 
                    onClick={() => setCurrentQuery(country)}
                    aria-label="Buscar novamente esta consulta"
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