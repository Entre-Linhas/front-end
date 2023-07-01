import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Linking } from '../components/Linking';
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { Itens } from "../components/Itens";
import { Clock } from "@phosphor-icons/react";
import { useState } from "react";
import { Modal } from "../components/Modal";

export default function Precificacao() {
   const [showModal, setShowModal] = useState(false);

   function handleModal() {
      setShowModal(!showModal)
   }
   return (
      <>
         <Header />



         <div className="text-3xl flex h-[100dvh] gap-5 py-[10rem] px-3 max-lg:flex-col">
            <Menu SelectPage="Precificacao" />


            <div className="py-10 flex flex-col flex-1 max-w-[80rem]  mt-16 m-auto max-lg:px-[1rem] px-[3rem]">

               <div className="py-10">
                  <h1 className="font-bold py-3">Precificação</h1>
                  <p>Adicione itens usados no seu produto e calcule o preço dele.</p>
               </div>

               <div className="w-full text-black bg-white px-5 py-10">


                  <h2 className="py-5">Nome do produto: { }</h2>
                  <hr />
                  <div className="py-10 flex flex-col gap-8">
                     <h2 className="py-5">Materiais usados</h2>

                     <Itens />
                     <Itens />
                     <Itens />
                     <Itens />


                  </div>

                  <div className="flex flex-col gap-10">
                     <button className="w-full py-5 border-dashed border-[1px] border-[#8F8F8F] rounded-xl text-[#8F8F8F]" onClick={handleModal}>
                        + Adicionar material
                     </button>
                     <hr />

                     <button className="w-full py-5 px-5 border-dashed border-[1px] border-[#8F8F8F] rounded-xl text-[#8F8F8F] flex items-center gap-3">
                        <Clock size={24} className="text-black" />
                        tempo gasto
                     </button>

                     <button className="w-full py-5 border-solid bg-[#62B8AF] border-[1px] border-[#CCCCCC] rounded-xl text-white text-center">
                        Calcular
                     </button>

                  </div>

               </div>














            </div>

            <Modal _showModal={showModal} _close={handleModal}>
               <div className="flex flex-col gap-8 mx-14 my-10">
                 teste
               </div>
            </Modal>

         </div>



      </>


   )
}