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
import { Trilha } from "../pages/Trilha/Trilha"
import Comunidade from "../pages/Comunidade"
import { Gerenciamento } from "../pages/Gerenciamento";
import Profile from "../pages/Profile";
import Precificacao from "../pages/Precificacao";
import { Pagamento } from "../pages/Pagamento";
import { Configurar } from "../pages/Configurar"
import Agradecimento from "../pages/Agradecimento";
import CalculadoraPrecificacao from "../pages/CalculadoraPrecificacao";
import { Fornecedores } from "../pages/Fornecedores";
import { useContext, useEffect } from "react";
import { Context } from "../contexts/Context";

export default function CloseRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-use" element={<TermsUse />} />
        <Route path="/ferramentas" element={<Ferramentas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/ajuda" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/Nivelamento" element={<Nivelamento />} />
        <Route path="/Conteudo" element={<Conteudo />} />
        <Route path="/Trilha" element={<Trilha />} />
        <Route path="/Comunidade" element={<Comunidade />} />
        <Route path="/Gerenciamento" element={<Gerenciamento />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Precificacao" element={<Precificacao />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/Configurar" element={<Configurar />} />
        <Route path="/agradecimento" element={<Agradecimento />} />
        {/* <Route path="*" element={<Navigate replace to="/"/>} /> */}
        <Route path="fornecedores" element={<Fornecedores />} />
        <Route path="/teste" element={<CalculadoraPrecificacao />} />
        <Route path="*" element={<Home />} />  
      </Routes>
    </BrowserRouter>
  );
}
