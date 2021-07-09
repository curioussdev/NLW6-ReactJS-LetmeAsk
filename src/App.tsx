import {createContext} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export const TestContext = createContext('');

export function App() {
  return(
    
    <BrowserRouter>

     <TestContext.Provider value={'Teste'}> {/* todo componente de dentro do provider, sempre conseguirá enchegar o valor do contexto*/}
        <Route  path="/" exact component={Home} />
        <Route  path="/rooms/new" component={NewRoom} />
      </TestContext.Provider>

    </BrowserRouter>
  );
};

export default App;