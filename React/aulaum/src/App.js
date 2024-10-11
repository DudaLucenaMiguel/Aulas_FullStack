import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from "./Styles/GlobalStyles";
import Cadastro from "./Pages/Cadastro";
import Contato from "./Pages/Contato";
import Home from "./Pages/Home";
import Personagens from "./Pages/Personagens";
import Temporadas from "./Pages/Temporadas";
import Bio from "./Pages/Bio";
import Temporada from "./Pages/Temporada";



function App() {
  return (
    <div>
      <Router>
        <GlobalStyles/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/personagens" element={<Personagens/>}/>
          <Route path="/temporadas" element={<Temporadas/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/cadastro" element={<Cadastro/>}/>
          <Route path="/Bio/:id" element={<Bio/>}/>
          <Route path="/Temporada/:id" element={<Temporada/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
