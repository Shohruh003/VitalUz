import { Route, Routes } from "react-router-dom";
import { Client } from "./Hooks/Client";
import { Public } from "./Public";
import { Private } from "./Private";
import { SerUzb } from "./components/Sertifikat/SerUzb";
import { SerRus } from "./components/Sertifikat/SerRus";


function App() {
  const {client} = Client()

  if (client?.signed === !true) {
    return <Routes>
            <Route path="/" element={<Public/>}/>
            <Route path="/uzb" element={<SerUzb/>}/>
            <Route path='/rus' element={<SerRus/>}/>
          </Routes>
  }

  return <Private/>

}

export default App;
