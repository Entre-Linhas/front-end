import { IconProps } from "@phosphor-icons/react";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { Context } from "../contexts/Context";
import React, { useState } from 'react';

export function Footer() {

  const [auth, setAuth] = useState(false);

  return (
    <div className="py-[2rem] bg-custom-salmon dark:bg-zinc-800">
      <div className="flex items-center box-border w-[100%] m-auto px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="flex flex-col gap-[3.8rem] w-[100%] py-[1.6rem]">
          <div className="w-[100%] flex justify-between text-white  max-[660px]:flex-col max-[660px]:items-center gap-8 ">
            <nav className="max-[660px]:hidden">
              <ul className="text-[1.8rem] font-medium">
                <li><NavLink to="/sobre" className="text-[2rem] font-bold">Sobre Nós</NavLink></li>
                <li><NavLink to="/agradecimento">Parceiros</NavLink></li>
                <li><NavLink to="/Fornecedores">Fornecedores</NavLink></li>
              </ul>
            </nav>
            <nav className="max-[660px]:hidden">
              <ul className="text-[1.8rem] font-medium">
                <li><NavLink to={auth ? "/profile" : "/signin"} className="text-[2rem] font-bold">Conta</NavLink></li>
                <li><NavLink to="/comunidade">Comunidade</NavLink></li>
                <li><NavLink to={auth ? "/Configurar" : "/signin"}>Configurações</NavLink></li>
              </ul>
            </nav>
            <nav className="max-[660px]:hidden">
              <ul className="text-[1.8rem] font-medium">
                <li><NavLink to="/contato" className="text-[2rem] font-bold">Suporte</NavLink></li>
                <li><NavLink to="/contato">Contato</NavLink></li>
              </ul>
            </nav>
            <nav>
              <ul className="text-[1.8rem] font-medium max-[660px]:text-center">
                <li><NavLink to="/" className="text-[2rem] font-bold">Mapa do site</NavLink></li>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to={auth ? "/precificacao" : "/ferramentas"}>Ferramentas</NavLink></li>
                <li><NavLink to="/eventos">Eventos</NavLink></li>
                <li><NavLink to="/contato">Ajuda</NavLink></li>
                <li><NavLink to="/sobre">Sobre Nós</NavLink></li>
                <li><NavLink to="/sobre">Parceiros</NavLink></li>
              </ul>
            </nav>
            <nav className="text-center py-5">
              <ul className="text-[1.8rem] font-medium">
                <li className="text-[2rem] font-bold">Redes sociais</li>
              </ul>
              <div className="flex gap-[1rem] justify-center">
                <a href="https://www.instagram.com/entrelinhas.empreenda/" target="_blank"><InstagramLogo size="32" className="text-white" /></a>
                <a href="https://www.linkedin.com/company/entre-linhas-empreenda/" target="_blank"><LinkedinLogo size="32" className="text-white" /></a>
              </div>
            </nav>
          </div>
          <h3 className="text-[1.8rem] text-white self-center">Copyright © 2023-2023 Entre Linhas</h3>
        </div>
      </div>
    </div>
  )
}
