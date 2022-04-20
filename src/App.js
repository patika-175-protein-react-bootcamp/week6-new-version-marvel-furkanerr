import "./App.css";
import { CharacterDetailProvider } from "./context/characterDetailContext";
import { PaginationProvider } from "./context/paginationContext";

import Routers from "./routers/routers";

function App() {
  return (
    <div className="App">
      
        <CharacterDetailProvider>
          <PaginationProvider>
            <Routers />
          </PaginationProvider>
        </CharacterDetailProvider>
   
    </div>
  );
}

export default App;
