import { createContext } from "react";
import { QueriesProvider } from "./QueriesContext";
import { Toaster } from "react-hot-toast";
import { ChakraProvider } from '@chakra-ui/react'

export const GlobalContenxt = createContext({});

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContenxt.Provider value={{}}>
      <ChakraProvider>
        <QueriesProvider>
          { children }
        </QueriesProvider>
        <Toaster 
          toastOptions={{
            position: 'bottom-right',
            error: {
              style: {
                background: 'red',
                color: 'white'
              }
            }
          }}
        />
      </ChakraProvider>
    </GlobalContenxt.Provider>
  )
}