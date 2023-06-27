
import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { HTMLAttributes } from "react";
import { UserCircle, List, Gear } from "@phosphor-icons/react"
import { Linking } from './Linking';
import React, { useContext, useState } from 'react';
import { Context } from '../contexts/Context';


interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> { }

export const Header = ({ ...rest }: HeaderProps) => {
  const navigate = useNavigate();
  const { auth } = useContext(Context);
  const { perfil } = useContext(Context);
  const [display, setDisplay] = useState("hidden");

  const Click = () => {
    setDisplay(display === "hidden" ? "block" : "hidden")

  };

  return (

    <header className="fixed border-b-zinc-200 shadow border-b-[1px] px-4 py-[1rem] bg-white flex w-[100%] h-[auto] items-center justify-between dark:bg-zinc-800 dark:border-b-zinc-700" {...rest}>
      <div className="w-auto flex items-center gap-[1rem] py-[1rem]">
        <p className="leading-[30px] text-custom-salmon font-[Sacramento] min-[220px]:text-[2.2rem] min-[240px]:text-[2.5rem] min-[320px]:text-[3.2rem] min-[426px]:text-[3.6rem] min-[600px]:text-[3.8rem] ">Entre Linhas</p>
        <img src='/bobina.png' alt="Imagem de uma bobina" className="min-[220px]:h-[2rem] min-[240px]:h-[2.2rem] min-[320px]:h-[2.8rem] min-[426px]:h-[3rem] min-[600px]:h-[3.rem]" />
      </div>

      <nav className="hidden lg:flex gap-[2.5rem] font-medium mx-auto text-custom-salmon text-[2.2rem]">
        <ul className='flex gap-6'>
          {auth ? 
          (
            <div className='flex gap-6'>
            <li className="relative">
              <Linking to="/" title='Inicio' />
            </li>
            <li className="relative">
              <Linking to="/Trilha" title='Trilha' />
            </li>
            <li className="relative">
              <Linking to="/Ferramentas" title='Ferramentas' />
            </li>
            <li className="relative">
              <Linking to="/Comunidade" title='Comunidade' />
            </li>
            <li className="relative">
              <Linking to="/Eventos" title='Eventos' />
            </li>
          </div>
           ) 
           
           : // se tiver feio pode trocar, é só pra testar. 
           
           ( 
         
          <div className='flex gap-6'> 
          <li className="relative">
            <Linking to="/" title='Inicio' />
          </li>
          <li className="relative">
            <Linking to="/eventos" title="Eventos" />
          </li>
          <li className="relative">
            <Linking to="/ajuda" title='Ajuda' />
          </li>
          <li className="relative">
            <Linking to="/ferramentas" title='Ferramentas' />
          </li>
          <li className="relative">
            <Linking to="/Sobre" title='Sobre' />
          </li>
        </div>
          )
          }
        </ul>
      </nav>

      <div>
        {auth ? 
        (
          <div>
          <button onClick={Click}>
          <div className='hidden lg:flex items-center gap-[1.2rem]'>
            <div className="w-[3.5rem] h-[3.5rem] rounded-full bg-black">
              <img src={perfil.foto} className="max-w-[100%] h-full rounded-full"/>
            </div>
             <p>{perfil.usuario.nome}</p>
          </div>
          </button>
          <div className={`${display}`}>
              <ul className="shadow-xl text-custom-salmon absolute right-0 z-10 mt-4 bg-white py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                 <li className="block px-8 py-5 hover:bg-custom-salmon hover:text-white">
                    <Linking to="/Profile" title="Configurações" />
                </li>
                <li className="block px-8 py-5 hover:bg-custom-salmon hover:text-white">
                    <Linking to="/" title="Sair" />
                </li>
              </ul>
            </div>
          </div>
        ) 
        
        : 
        
        (
          <div className='hidden lg:flex gap-[1.2rem]'>
            <Button title='Login' typeStyle='secondary' onClick={() => navigate("/signin")} />
            <Button title='Registro' onClick={() => navigate("/SignUp")} />
          </div>
        )
        }
      </div>


        <div className="lg:hidden">
          <button onClick={Click}>
            <div className="flex gap-5"> 
            <span className="text-custom-salmon m-auto text-[2.2rem] max-[425px]:hidden">Menu</span>
            <List size={32} className="text-custom-salmon m-auto" />
            </div>
          </button>

        <div className={`${display}`}>
          <ul className="shadow-xl text-custom-salmon absolute right-0 z-10 mt-6 bg-white py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
            {auth ? 
            (
              <div>
                 <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <div className="flex items-center gap-5 text-zinc-600 dark:text-zinc-200">
                    <UserCircle size={32} weight="fill"/>
                    <Linking to="/Profile" title={perfil.usuario.nome} />
                  </div>
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                    <Linking to="/Profile" title="Configurações" />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/" title='Inicio' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/trilha" title='Trilha' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Gerenciamento" title='Ferramentas' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Comunidade" title='Comunidade' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Eventos" title='Eventos' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Contato" title='Ajuda' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Sobre" title='Sobre nós' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/" title='Sair' />
                </li>
              </div>
            ) 

            : // acho que indexado assim fica mais fácil de entender
            
            (
              <div>
                 <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/SignIn" title='Login' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/SignUp" title='Registrar' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/" title='Inicio' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Eventos" title='Eventos' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Ajuda" title='Ajuda' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Ferramentas" title='Ferramentas' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Sobre" title='Sobre nós' />
                </li>
              </div>
            )
            }
          </ul>
        </div>

      </div>

    </header>
  );
}
