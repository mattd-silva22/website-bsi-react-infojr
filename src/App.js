import {HomePage} from "./pages/HomePage";
import { BrowserRouter , Route , Routes} from "react-router-dom"


import { InstitucionalPage } from "./pages/InstitucionalPage";
import { GenericPage} from "./pages/GenericPage";
import { ColegiadoPage} from "./pages/ColegiadoPage";
import { ContatoPage} from "./pages/ContatoPage";

import "./styles/global.scss"

function App() {
  return (

    <BrowserRouter>
      <Routes> 

        <Route path="/"  element={<HomePage/>}/>
        <Route path='/institucional' element={<InstitucionalPage selectedPage="institucional"/>}/>
        <Route path='/generic' element={<GenericPage selectedPage="regulamento"/>}/>
        <Route path='/colegiado' element={<ColegiadoPage/>}/>
        <Route path='/contato' element={<ContatoPage/>}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
