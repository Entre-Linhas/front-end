import { Header } from "../components/Header";
import { Tag, Storefront, ShoppingCart, CaretDown } from "@phosphor-icons/react";
import { Modal } from "../components/Modal";
import { Linking } from "../components/Linking";
import { useState } from "react";
import { Acordes } from "../components/Acordes";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";




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
      <div className="text-3xl flex flex-wrap min-h-[900px] gap-5 py-[10rem] max-[860px]:flex-col">
       
       
       <Menu SelectPage="Gerenciamento" />
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        {/* <div className="flex flex-col w-[300px] max-w-[300px]">
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
        </div> */}


        <div className="flex flex-col flex-1 max-w-[80rem] mt-16 m-auto max-lg:px-[1rem]  px-[3rem]">
          <h1 className="font-bold">Gerenciamento de Pedidos</h1>
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

          <Acordes />
          <Acordes />




        </div>
      </div>

      <Modal _showModal={showModal} _close={handleModal}>
        <div className="flex flex-col items-center">
          <h1 className="text-center font-semibold text-4xl">Experimente as ferramentas do Entre Linhas e otimize sua <span className="text-custom-salmon">produtividade</span>!</h1>
          <img src="/admin_pana.svg" alt="Ilustração de uma mulher gerenciando." style={{ width: "-webkit-fill-available" }} />
          <Linking to={"/ferramentas"} title="Saiba mais" className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md" />
        </div>
      </Modal>

      <Modal _showModal={showForm} _close={newForm}>

        <div className="space-y-4">
          <div className="py-5">
            <label htmlFor="titulo" className="block text-gray-700 font-bold">
              Título
            </label>
            <input
              type="text"
              id="titulo"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <div className="py-5">
            <label htmlFor="dataEntrega" className="block text-gray-700 font-bold">
              Data de entrega
            </label>
            <input
              type="date"
              id="dataEntrega"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <div className="py-5">
            <label htmlFor="nomeCliente" className="block text-gray-700 font-bold">
              Nome do(a) cliente:
            </label>
            <input
              type="text"
              id="nomeCliente"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <div className="py-5">
            <label htmlFor="descricaoProdutos" className="block text-gray-700 font-bold">
              Descrição dos Produtos
            </label>
            <textarea
              id="descricaoProdutos"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-5 border border-gray-300 rounded-md focus:outline-none focus:border-custom-salmon resize-y"
            ></textarea>
          </div>
          <div className="py-5">
            <label htmlFor="precoTotal" className="block text-gray-700 font-bold">
              Preço Total
            </label>
            <input
              type="number"
              id="precoTotal"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <Button title="Adicionar" />
        </div>



      </Modal>
    </>
  )
}