import { IconProps } from "@phosphor-icons/react"
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { Context } from "../contexts/Context";
import React, { useState } from 'react';

export function Footer() {

  const [auth, setAuth] = useState(false);

  return (
    <div className="py-[2rem] bg-custom-salmon">
      <div className="flex items-center box-border w-[100%] m-auto px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="flex flex-col gap-[3.8rem] items-center w-[100%] py-[1.6rem]">
          <div className="w-[100%] flex justify-between text-white max-[660px]:flex max-[660px]:flex-col items-center gap-8">
            <nav>
              <ul className="text-[1.8rem] font-bold"><NavLink to="/sobre">Sobre Nós</NavLink> </ul>
              <div className="max-[660px]:hidden">
                <ul>Parceiros</ul>
                <ul>Educacional</ul>
              </div>
            </nav>
            <nav>
              <ul className="text-[1.8rem] font-bold"><NavLink to={auth ? "/profile" : "/signin"}>Conta</NavLink></ul>
              <div className="max-[660px]:hidden">
                <ul><NavLink to="/comunidade">Comunidade</NavLink></ul>
                <ul><NavLink to={auth ? "/Configurar" : "/signin"}>Configurações</NavLink></ul>
              </div>
            </nav>
            <nav>
              <ul className="text-[1.8rem] font-bold"><NavLink to="/contato">Suporte</NavLink></ul>
              <div className="max-[660px]:hidden">
                <ul><NavLink to="/contato">Contato</NavLink></ul>
              </div>
            </nav>
            <nav>
              <ul className="text-[1.8rem] font-bold max-[660px]:hidden">Mapa do site</ul>
              <div className="max-[660px]:hidden">
                <ul><NavLink to="/">Home</NavLink></ul>
                <ul><NavLink to={auth ? "/precificacao" : "/ferramentas"}>Ferramentas</NavLink></ul>
                <ul><NavLink to="/eventos">Eventos</NavLink></ul>
                <ul><NavLink to="/contato">Ajuda</NavLink></ul>
                <ul><NavLink to="/sobre">Sobre Nós</NavLink></ul>
              </div>
            </nav>
            <nav className="text-center">
              <ul className="text-[1.8rem] font-bold">Redes sociais</ul>
              <div className="flex gap-[1rem] justify-center">
                <a href="https://www.instagram.com/entrelinhas.empreenda/" target="_blank"><InstagramLogo size="32" className="text-white" /></a>
                <a href="https://www.linkedin.com/company/entre-linhas-empreenda/" target="_blank"><LinkedinLogo size="32" className="text-white" /></a>
              </div>
            </nav>
          </div>
          <h3 className="text-[1.8rem] text-white">Copyright © 2023-2023 Entre Linhas</h3>
        </div>
      </div>
    </div>

  )
}

// cloud front disponibiliza recursos para web, ele usa a rede da AWS pra agilizar suas funcionalidades. As zonas de disponibilidade possuem ad locations, ele cria um cast global dentro da estrutura da AWS, dentro desse casting ele propaga a mudança em qualquer lugar do mundo

// invalidation: "diz pra todo o lugar do mundo que uma cópia já não é valida, e pega o arquivo mais atual"