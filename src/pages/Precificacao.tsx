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



         <div className="text-3xl flex h-[100dvh] gap-5 py-[10rem] px-3 max-lg:flex-col">
            <Menu SelectPage="Precificacao" />


            <div className="py-10 flex flex-col flex-1 max-w-[80rem]  mt-16 m-auto max-lg:px-[1rem] px-[3rem] ">

               <div className="py-10">
                  <h1 className="font-bold py-3">Precificação</h1>
                  <p>Saiba quanto cobrar por seus produtos!</p>
               </div>

               <div className="w-full text-black bg-white px-5 py-10 dark:bg-zinc-900 rounded-3xl">
                  <div className="py-10 flex flex-col gap-8">
                     <h2 className="py-5 text-white">Calcule abaixo:</h2>
                     <CalculadoraPrecificacao />
                  </div>

               </div>


                    







               


            </div>

            <Modal _showModal={showModal} _close={handleModal}>
                     <form id="Precifica">  
                      




                     </form>
            </Modal>

         </div>



      </>


   )
}