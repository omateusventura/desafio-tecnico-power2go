import { QueriesContext } from "@/context/QueriesContext";
import { useContext } from "react";

export function QueryDetail() {
  const { currentQuery } = useContext(QueriesContext);

  return (
    <table className="w-full lg:w-6/12 h-fit mx-auto rounded-lg border border-slate-100 shadow-lg">
      <thead>
        <tr>
          <th 
            colSpan={10} 
            className="text-center text-sm text-white font-bold bg-slate-900 px-2 py-2.5 
            rounded-tr-lg rounded-tl-lg"
          >
            Consulta detalhada
          </th>
        </tr>
      </thead>
      <tbody>
        {
          !currentQuery 
          ? 
          <tr>
            <td colSpan={5} className="text-sm text-center py-2.5">Nenhuma informação encontrada</td>
          </tr>
          : 
          <>
            <tr className="bg-slate-50 border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Country</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.name.common }</td>
            </tr>

            <tr className="border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Official Name</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.name.official }</td>
            </tr>

            <tr className="bg-slate-50 border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Continent</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.continents }</td>
            </tr>

            <tr className="border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Capital</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.capital }</td>
            </tr>

            <tr className="bg-slate-50 border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Population</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.population }</td>
            </tr>

            <tr className="border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Currency</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.currencies.value }</td>
            </tr>

            <tr className="bg-slate-50 border-b border-b-slate-100">
              <td className="w-48 text-start text-sm text-slate-900 px-2 py-2 font-bold">Language</td>
              <td className="text-start text-sm px-2 py-2.5">{ currentQuery?.languages.value }</td>
            </tr>
          </>
        }
      </tbody>
    </table>
  )
}