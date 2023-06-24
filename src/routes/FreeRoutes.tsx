import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Ferramentas from "../pages/Ferramentas";
import Eventos from "../pages/Eventos";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import TermsUse from "../pages/TermsUse";
import Comunidade from "../pages/Comunidade"
import { Gerenciamento } from "../pages/Gerenciamento";
import { Trofeu } from "../pages/Trofeu";
import Profile from "../pages/Profile";

export default function FreeRoutes() {
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
        <Route path="/Comunidade" element={<Comunidade />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
