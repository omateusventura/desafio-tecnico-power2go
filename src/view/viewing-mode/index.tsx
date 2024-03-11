import { QueriesContext } from "@/context/QueriesContext";
import { ViewingModeEnum } from "@/utils/enums/viewing-mode";
import { useContext } from "react";
import { IoEyeSharp } from "react-icons/io5";

export function ViewingMode() {
  const { setViewingMode } = useContext(QueriesContext);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const mode = event.currentTarget.value as ViewingModeEnum;
    localStorage.setItem('viewing-mode', mode);
    setViewingMode(mode)
  }

  return (
    <div className="w-10/12 flex justify-end items-center gap-2 py-2">
      <div className="flex items-center gap-1">
        <IoEyeSharp className="text-slate-900" />
        <label htmlFor="inputFilter" className="text-sm font-medium text-slate-500">
          Modo de visualização
        </label>
      </div>
      <select 
        className="w-36 bg-transparent border-b px-2 py-1 text-sm focus:outline-none" 
        onChange={(event) => handleChange(event)}>
        <option value="graphic">Gráfico</option>
        <option value="table">Tabela</option>
      </select>
    </div>
  )
}