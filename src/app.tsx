import { Filter } from "./view/filter";
import { QueryDetail } from "./view/query-detail";
import { LastQueries } from "./view/last-queries";
import { QueriesContext } from "./context/QueriesContext";
import { useContext } from "react";
import { Graphics } from "./view/graphics";
import { ViewingMode } from "./view/viewing-mode";

export function App() {
  const { viewingMode } = useContext(QueriesContext);
  
  return (
    <main className="area">
      <ViewingMode />

      <div className="main-area">
        <Filter />
        <section className="information-area" >
          { viewingMode === 'table' ? <QueryDetail /> : <Graphics /> }
          <LastQueries />
        </section>
      </div>
    </main>
  )
}

