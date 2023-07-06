import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Linking } from '../components/Linking';
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { Itens } from "../components/Itens";
import { Clock } from "@phosphor-icons/react";
import { useState } from "react";
import { Modal } from "../components/Modal";
import CalculadoraPrecificacao from "./CalculadoraPrecificacao";

export default function Precificacao() {
   const [showModal, setShowModal] = useState(false);

   function handleModal() {
      setShowModal(!showModal)
   }

   // const inputsP = document.querySelector(`form#Precifica inputs`).values 
 

   return (
      <>
      <Header />
      <div className="py-[11rem] m-auto flex flex-wrap"> 
          <Menu SelectPage="Precificacao"/>

                <div className="h-[100dvh] m-auto max-w-[70rem] w-full"> 
                  <CalculadoraPrecificacao />
               </div>
            </div>
         <Footer />
      </>


   )
}