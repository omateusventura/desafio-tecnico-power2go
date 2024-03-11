import { GraphicCard } from "@/components/graphic/card";
import { QueriesContext } from "@/context/QueriesContext"
import { numberFormat } from "@/utils/helpers/number-format";
import { useContext } from "react";

export function Graphics() {
  const { currentQuery } = useContext(QueriesContext);

  return (
    <div className="w-6/12 h-fit pr-4">
      {
        currentQuery &&
        <div className="mb-5">
          <div className="flex items-center gap-3">
            <h2 className="font-bold text-4xl text-slate-900">{currentQuery?.name.common}</h2>
            <h6 className="text-slate-400 text-lg font-medium mt-2.5">{currentQuery?.continents}</h6>
          </div> 
      
          <div className="mt-2 flex items-center gap-2">
            <img className="mt-1 rounded-[2px]" src={currentQuery?.flags.svg}width={40} />
            <h3 className="text-xl">{currentQuery?.name.official}</h3>
          </div>
        </div>
      }

      <div className="w-full flex flex-wrap gap-2">
        <GraphicCard 
          className="from-emerald-400 to-emerald-500 shadow-emerald-200"
          title="Capital"
          information={currentQuery?.capital}    
        />

        <GraphicCard 
          className="from-amber-400 to-amber-500 shadow-amber-200"
          title="Population"
          information={numberFormat({ number: currentQuery?.population ?? 0 })}    
        />

        <GraphicCard 
          className="from-red-400 to-red-500 shadow-red-200"
          title="Language"
          information={currentQuery?.languages.value}    
        />

        <GraphicCard 
          className="from-indigo-400 to-indigo-500 shadow-indigo-200"
          title="Currency"
          information={currentQuery?.currencies.value}    
        />
      </div>
    </div>
  )
}