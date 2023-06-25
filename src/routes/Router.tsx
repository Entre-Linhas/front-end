import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Ferramentas from "../pages/Ferramentas";
import Eventos from "../pages/Eventos";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import TermsUse from "../pages/TermsUse";
import Nivelamento from "../pages/Nivelamento"
import { Conteudo } from "../pages/Conteudo"
import { Trilha } from "../pages/Trilha"
import Comunidade from "../pages/Comunidade"
import { Gerenciamento } from "../pages/Gerenciamento";
import { Trofeu } from "../pages/Trofeu";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms-of-use" element={<TermsUse />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ajuda" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Nivelamento" element={<Nivelamento />}/>
        <Route path="/Conteudo" element={<Conteudo />}/>
        <Route path="/Trilha" element={<Trilha />}/>
        <Route path="/Comunidade" element={<Comunidade />}/>
        <Route path="/Gerenciamento" element={<Gerenciamento/>}/>
        <Route path="/Trofeu" element={<Trofeu />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
