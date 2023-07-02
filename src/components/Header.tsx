import { Button } from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { HTMLAttributes } from "react";
import { Linking } from './Linking';
import { useContext, useState } from 'react';
import { Context } from '../contexts/Context';
import { NavLink } from 'react-router-dom';
import { UserCircle, List } from '@phosphor-icons/react';

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement> { }

export const Header = ({ ...rest }: HeaderProps) => {
  const navigate = useNavigate();
  const { auth, perfil, LogOut } = useContext(Context);
  const [display, setDisplay] = useState("hidden");


  const Click = () => {
    setDisplay(display === "hidden" ? "block" : "hidden")
  };

  return (
    <header className="fixed z-10 border-b-zinc-200 shadow border-b-[1px] px-4 py-[1rem] bg-white flex w-[100%] h-[auto] items-center justify-between dark:bg-zinc-800 dark:border-b-zinc-700" {...rest}>
      <div className="w-auto flex items-center gap-[1rem] py-[1rem]">
        <p className="leading-[30px] text-custom-salmon font-[Sacramento] min-[220px]:text-[2.2rem] min-[240px]:text-[2.5rem] min-[320px]:text-[3.2rem] min-[426px]:text-[3.6rem] min-[600px]:text-[3.8rem] ">Entre Linhas</p>
        <img src='/bobina.png' alt="logo bobina do Entre Linhas" className="min-[220px]:h-[2rem] min-[240px]:h-[2.2rem] min-[320px]:h-[2.8rem] min-[426px]:h-[3rem] min-[600px]:h-[3.rem]" />
      </div>

      <nav className="hidden lg:flex gap-[2.5rem] font-medium mx-auto text-custom-salmon text-[2.2rem]" title='Menu'>
        <ul className='flex gap-6'>
          <li className={`relative`}>
            <Linking to="/" title='Inicio' />
          </li>
          <li className={`relative ${auth ? "" : "hidden"}`}>
            <Linking to="/Trilha" title='Trilha' />
          </li>
          <li className={`relative`}>
            <Linking to={auth ? "/Gerenciamento" : "/ferramentas"} title='Ferramentas' />
          </li>
          <li className={`relative`}>
            <Linking to="/Comunidade" title='Comunidade' />
          </li>
          <li className={`relative`}>
            <Linking to="/Eventos" title='Eventos' />
          </li>
          <li className={`relative`}>
            <Linking to="/sobre" title='Sobre' />
          </li>
          <li className={`relative`}>
            <Linking to="/ajuda" title='Ajuda' />
          </li>
        </ul>
      </nav>

      <div>
        {auth ? (
          <div>
            <button onClick={Click}>
              <div className='hidden lg:flex items-center gap-[1.2rem]'>
                <div className="w-[3.5rem] h-[3.5rem]">
                  <img src={perfil?.foto} className="max-w-[100%] h-full rounded-full" alt='imagem de perfil do usuário' />
                </div>
                <p className="max-w-[8rem] truncate">{perfil?.usuario?.nome}</p>
              </div>
            </button>

            <div className={`${display}`}>
              <ul className="max-lg:hidden shadow-xl text-custom-salmon absolute right-0 z-10 mt-4 bg-white py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                <li className="block px-8 py-5 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Profile" title="Meu perfil" />
                </li>
                <li className="block px-8 py-5 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/Configurar" title="Configurações" />
                </li>
                <li className="block px-8 py-5 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/" title="Sair" onClick={() => LogOut()} />
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className='hidden lg:flex gap-[1.2rem]'>
            <Button titleBt='Login' typeStyle='secondary' onClick={() => navigate("/signin")} title='Fazer login' />
            <Button titleBt='Registro' onClick={() => navigate("/SignUp")} title='Fazer cadastro' />
          </div>
        )}
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
            {auth && perfil ? (
              <>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <NavLink to="/profile">
                    <UserCircle size={32} weight="fill" />
                    <span>{perfil?.usuario?.nome}</span>
                  </NavLink>
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <Linking to="/" title='Sair' />
                </li>
              </>
            ) : (
              <>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <NavLink to="/SignIn" title='Login' />
                </li>
                <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
                  <NavLink to="/SignUp" title='Registrar' />
                </li>
              </>
            )}
            <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
              <Linking to="/" title='Inicio' />
            </li>
            <li className={`${auth ? "" : "hidden"} block px-8 py-2 hover:bg-custom-salmon hover:text-white`}>
              <Linking to="/trilha" title='Trilha' />
            </li>
            <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
              <Linking to={auth ? "/Gerenciamento" : "/ferramentas"} title='Ferramentas' />
            </li>
            <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
              <Linking to="/Comunidade" title='Comunidade' />
            </li>
            <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
              <Linking to="/Eventos" title='Eventos' />
            </li>
            <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
              <Linking to="/sobre" title='Sobre' />
            </li>
            <li className="block px-8 py-2 hover:bg-custom-salmon hover:text-white">
              <Linking to="/ajuda" title='Ajuda' />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
