import { Header } from "../components/Header";
import { Tag, Storefront, ShoppingCart, CaretDown } from "@phosphor-icons/react";
import { Modal } from "../components/Modal";
import { Linking } from "../components/Linking";
import { useState } from "react";
import { Acordes } from "../components/Acordes";
import New from "../components/FormGerenc"
import { FormGerenciamento } from "../components/FormGerenciamento";


export const Gerenciamento = () => {
  const [showModal, setShowModal] = useState(true);
  const [showForm, setShowForm] = useState(false)

  function handleModal() {
      setShowModal(!showModal)
  };

  function newForm() {
    setShowForm(!showForm)
  }


return (
<>
<Header />
<div className="flex flex-wrap min-h-[900px] gap-5 py-[10rem] max-[860px]:flex-col">
    <div className="flex flex-col w-[300px] max-w-[300px]">
      <div className="px-10">
        <h2 className="font-bold text-2.2rem">Ferramentas</h2>
        <div className="px-5 py-5 space-y-5 font-medium">
          <div className="flex items-center gap-2">
            <Tag size={32} />
            <span>Precificação</span>
          </div>
          <div className="flex items-center gap-2">
            <Storefront size={32} />
            <span>Gerenciamento de Pedidos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart size={32} />
            <span>Fornecedores</span>
          </div>
        </div>
      </div>
    </div>

    {/* Coluna 2: */}
    <div className="flex flex-col flex-1 max-w-[80rem] mt-16 m-auto px-[3rem]">
      <h1 className="text-2.2rem font-bold">Gerenciamento de Pedidos</h1>
      <p>Aqui você encontra os pedidos pendentes, em andamento e concluídos.</p>

      <div className="py-5">
        <input type="search" className="px-2 w-full shadow-md" placeholder="Buscar pedidos" />
      </div>
      <div className="py-12">
        <button className="bg-[#62B8AF] w-full text-white py-5 rounded-0.5rem" onClick={newForm}>
          + Novo pedido
        </button>
      </div>


  {/* componente */}
      
      <Acordes />

      <Acordes />




    </div>
  </div>

  <Modal _showModal={showModal} _close={handleModal}>
                <div className="flex flex-col items-center">
                    <h1 className="text-center font-semibold text-4xl">Experimente as ferramentas do Entre Linhas e otimize sua <span className="text-custom-salmon">produtividade</span>!</h1>
                    <img src="/admin_pana.svg" alt="Ilustração de uma mulher gerenciando." style={{width: "-webkit-fill-available"}}/>
                    <Linking to={"/ferramentas"} title="Saiba mais" className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md"/>
                </div>
  </Modal>

  <Modal _showModal={showForm} _close={newForm}>
  <div className="flex flex-col items-center gap-10">
      <h1 className="text-center font-semibold text-4xl text-black">Informações do pedido</h1>
      <ul className="space-y-6">
        <li>
          <input type="text" name="Np" placeholder="Nome do pedido" className="px-4 py-2 rounded-md border" />
        </li>
        <li className="flex items-center justify-evenly">
          <input type="radio" name="Status" value="Concluido"  className="px-4 py-2 rounded-md border" />
          <input type="radio" name="Status" value="Pendente"  className="px-4 py-2 rounded-md border" />
          <input type="radio" name="Status" value="Em atraso"  className="px-4 py-2 rounded-md border" />
        </li>
        <li>
          <input type="date" name="DtEnt" placeholder="Data de entrega" className="px-4 py-2 rounded-md border" />
        </li>
        <li>
          <input type="text" name="Nc" placeholder="Nome do cliente" className="px-4 py-2 rounded-md border" />
        </li>
        <li>
          <input type="text" name="Desc" placeholder="Descrição do pedido" className="px-4 py-2 rounded-md border" />
        </li>
        <li>
          <input type="number" name="Valor" placeholder="Valor total" className="px-4 py-2 rounded-md border" />
        </li>
      </ul>
    </div>
  </Modal>
</>
)
}