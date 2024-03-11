import { QueriesContext } from "@/context/QueriesContext";
import { Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { CSVLink } from "react-csv";
import { FaFileExcel } from "react-icons/fa6";

export function ExcelButton () {
  const { lastQueries } = useContext(QueriesContext);

  return (
    <CSVLink data={JSON.stringify(lastQueries)}>
    <Tooltip 
      marginTop="5px" 
      fontSize="xs" 
      padding="5px 10px" 
      bg="gray.900"
      label="Exportar Excel" 
      placement='bottom' 
      hasArrow
    >
      <button 
        className="px-2 py-1.5 flex justify-center items-center gap-2 rounded-md 
        bg-emerald-400 text-white shadow-md shadow-emerald-800 hover:bg-emerald-500
        duration-300 ease-in-out" 
        type="button" 
        aria-label="Exportar informações para excel"
      >
        <FaFileExcel className="text-white text-sm" />
      </button>
    </Tooltip>
  </CSVLink>
  )
}