import { Header } from "../components/Header";
import { Tag, Storefront, ShoppingCart, CaretDown } from "@phosphor-icons/react";
import { Modal } from "../components/Modal";
import { Linking } from "../components/Linking";
import { useContext, useEffect, useState } from "react";
import { Acordes } from "../components/Acordes";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";
import { Pedido } from "../models/pedido";
import api from "../apiInstance";
import { Context } from "../contexts/Context";
import { Link } from "react-router-dom";
import { pedidoParser } from "../utils/parsers";




export const Gerenciamento = () => {
  const { perfil, pedido2, setPedido, pegarDadosPedido } = useContext(Context);
  const [showModal, setShowModal] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [pedidos, setPedidos] = useState<Pedido[]>([{ date: new Date(), nome: "", description: "", price: 100.00, title: "", estado: "" }, { date: new Date(), nome: "", description: "", price: 100.00, title: "", estado: "" }]);
  const [keyModal, setKeyModal] = useState(crypto.randomUUID())
  function handleModal() {
    setShowModal(!showModal)
  };

  function newForm() {
    setShowForm(!showForm)
  }

  useEffect(() => { pegarDadosPedido?.() }, [])


  function saveForm() {

    const data: any = {}


    const inputs = document.querySelectorAll('#formGeren input, #formGeren textarea') as any as HTMLInputElement[]
    // sobre o "as any as HTMLInputElement" eu to dizendo transformo em qualquer coisa e depois transforme em algo, que no caso é o elemento input do HTML"
    inputs.forEach(item => {
      data[item.id] = item.value

    }
    )
    data.usuario = perfil.usuario
    console.log(data)
    api.post("/pedidos", pedidoParser(data)).then((response) => {
      if (response.data) {
        pegarDadosPedido?.();
        setShowForm(false)
        setKeyModal(crypto.randomUUID())

      } else {
        console.log("vazio");
      }
    })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <>
      <Header />
      <div className="text-3xl flex flex-wrap min-h-[900px] gap-5 py-[10rem] max-[860px]:flex-col">


        <Menu SelectPage="Gerenciamento" />

        <div className="flex flex-col flex-1 max-w-[80rem] mt-16 m-auto max-lg:px-[3rem]  px-[3rem]">
          <h1 className="font-bold">Gerenciamento de Pedidos</h1>
          <p>Aqui você encontra os pedidos pendentes, em andamento e concluídos.</p>

          <div className="py-12">
            <button className="bg-[#62B8AF] w-full text-white py-5 rounded-[1.5rem]" onClick={newForm} title="Adicionar novo pedido">
              Registrar novo pedido
            </button>
          </div>



          {pedido2.map(pedido => <Acordes key={pedido.id} pedido={pedido} />)}



        </div>
      </div>

      <Modal _showModal={showModal} _close={handleModal}>
        <div className="flex flex-col items-center">
          <h1 className="text-center font-semibold text-4xl dark:text-gray-900">Experimente as ferramentas do Entre Linhas e otimize sua <span className="text-custom-salmon">produtividade</span>!</h1>
          <img src="/admin_pana.svg" alt="Ilustração de uma mulher gerenciando." style={{ width: "-webkit-fill-available", height: "" }} className="" />

          <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md"><Link to="/ferramentas" title="Saiba mais">Saiba mais</Link></button>
        </div>
      </Modal>

      <Modal _showModal={showForm} _close={newForm} key={keyModal}>


        <form className="space-y-4" id="formGeren">
          <div className="py-5">
            <label htmlFor="title" className="block text-gray-700 font-bold">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-gray-900 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <div className="py-5">
            <label htmlFor="date" className="block text-gray-700 font-bold">
              Data de entrega
            </label>
            <input
              type="date"
              id="date"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-gray-900 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <div className="py-5">
            <label htmlFor="nome" className="block text-gray-700 font-bold">
              Nome do(a) cliente:
            </label>
            <input
              type="text"
              id="nome"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-gray-900 rounded-md focus:outline-none focus:border-custom-salmon"

            />
          </div>
          <div className="py-5">
            <label htmlFor="description" className="block text-gray-700 font-bold">
              Descrição dos Produtos
            </label>
            <textarea
              id="description"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-5 border border-gray-300 dark:text-gray-900 rounded-md focus:outline-none focus:border-custom-salmon resize-y">
            </textarea>
          </div>
          <div className="py-5">
            <label htmlFor="price" className="block text-gray-700 font-bold">
              Preço Total
            </label>
            <input
              type="number"
              id="price"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-gray-900 rounded-md focus:outline-none focus:border-custom-salmon"
            />
          </div>
          <Button titleBt="Adicionar" onClick={saveForm} type="button" title="Adicionar" />
        </form>


      </Modal>
    </>
  )
}