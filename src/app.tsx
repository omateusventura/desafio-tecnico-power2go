
import { Filter } from "./view/filter";
import { QueryDetail } from "./view/query-detail";
import { LastQueries } from "./view/last-queries";
import { QueriesContext } from "./context/QueriesContext";
import { useContext } from "react";
import { Graphics } from "./view/graphics";
import { IoEyeSharp } from "react-icons/io5";

export function App() {
  const { selectionType, setSelectionType } = useContext(QueriesContext);
  
  return (
    <main className="w-screen h-screen bg-slate-50 flex items-center justify-center flex-wrap">
      <div className="w-10/12 flex justify-end items-center gap-2 py-2">
        <div className="flex items-center gap-1">
          <IoEyeSharp className="text-slate-900" />
          <label htmlFor="inputFilter" className="text-sm font-medium text-slate-500">
            Modo de visualização
          </label>
        </div>
        <select 
          className="w-36 bg-transparent border-b px-2 py-1 text-sm focus:outline-none" 
          onChange={(event) => {
            const value = event.target.value as 'table' | 'graphic';
            setSelectionType(value)
          }}
        >
          <option value="graphic">Gráfico</option>
          <option value="table">Tabela</option>
        </select>
      </div>

      <div 
        className="w-10/12 h-[calc(100%_-_80px)] overflow-y-scroll bg-white shadow-lg 
        border border-slate-200 rounded-lg px-5 py-5 relative -top-3"
      >
        <Filter />
        <section className="w-full h-fit max-w-full flex flex-col lg:flex-row justify-between gap-4 mt-6" >
          { selectionType === 'table' ? <QueryDetail /> : <Graphics /> }
          <LastQueries />
        </section>
      </div>
    </main>
  )
}

