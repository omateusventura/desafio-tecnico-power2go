import { ViewingModeEnum } from "@/utils/enums/viewing-mode";
import { ICountry } from "@/utils/interfaces/country";
import { createContext, useEffect, useMemo, useState } from "react";

type QueriesContextProps = {
  lastQueries: ICountry[];
  currentQuery: ICountry | null;
  viewingMode: ViewingModeEnum;
  setLastQueries: (value: unknown) => void;
  setCurrentQuery: (country: ICountry) => void;
  setViewingMode: (mode: ViewingModeEnum) => void;
} 

export const QueriesContext = createContext({} as QueriesContextProps);

export function QueriesProvider({ children }: { children: React.ReactNode }) {
  const [lastQueries, setLastQueries] = useState<ICountry[]>([]);
  const [currentQuery, setCurrentQuery] = useState<ICountry|null>(null);
  const [viewingMode, setViewingMode] = useState<ViewingModeEnum>(ViewingModeEnum.Graphic);

  useMemo(() => {
    const latestSearches = localStorage.getItem('lastQueries');
    const mode = localStorage.getItem('viewing-mode') as ViewingModeEnum;

    /**
     * Seta as últimas consultas caso estejam salvas no
     * local storage
     */
    if (latestSearches) {
      const data = JSON.parse(latestSearches);
      const lastQuery = data[0] as ICountry;
      setLastQueries(data);
      setCurrentQuery(lastQuery);
    }

    /**
     * Seta modo de visualização caso esteja salvo no local
     * storage
     */
    if (mode) {
      setViewingMode(mode);
    }

  }, []);

  useEffect(() => {
    if (lastQueries.length > 0) {
      localStorage.setItem('lastQueries', JSON.stringify(lastQueries))
    }
  }, [lastQueries]);

  return (
    <QueriesContext.Provider value={{ 
      lastQueries, 
      setLastQueries, 
      currentQuery, 
      setCurrentQuery,
      viewingMode,
      setViewingMode
    }}>
      { children }
    </QueriesContext.Provider>
  )
}