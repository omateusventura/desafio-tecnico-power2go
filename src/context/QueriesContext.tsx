import { ICountry } from "@/utils/schemas/queries";
import { createContext, useEffect, useState } from "react";

type QueriesContextProps = {
  lastQueries: ICountry[];
  currentQuery: ICountry | null;
  selectionType: 'graphic' | 'table';
  setLastQueries: (value: unknown) => void;
  setCurrentQuery: (country: ICountry) => void;
  setSelectionType: (type: 'graphic' | 'table') => void;
} 

export const QueriesContext = createContext({} as QueriesContextProps);

export function QueriesProvider({ children }: { children: React.ReactNode }) {
  const [lastQueries, setLastQueries] = useState<ICountry[]>([]);
  const [currentQuery, setCurrentQuery] = useState<ICountry|null>(null);
  const [selectionType, setSelectionType] = useState<'graphic'|'table'>('graphic');

  useEffect(() => {
    const latestSearches = localStorage.getItem('lastQueries');

    if (latestSearches) {
      const data = JSON.parse(latestSearches);
      setLastQueries(data);
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
      selectionType,
      setSelectionType
    }}>
      { children }
    </QueriesContext.Provider>
  )
}