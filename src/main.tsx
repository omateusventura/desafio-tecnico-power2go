import ReactDOM from 'react-dom/client'
import { App } from './app.tsx'
import { GlobalProvider } from './context/GlobalContext.tsx';

import '@assets/css/globals.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
)
