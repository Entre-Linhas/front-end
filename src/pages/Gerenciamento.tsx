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
  const [showModal, setShowModal] = useState(false);
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
      <div className="text-3xl flex flex-wrap min-h-[900px] gap-5 py-[10rem]">


        <Menu SelectPage="Gerenciamento" />

        <div className="flex flex-col max-w-[80rem] mt-16 m-auto px-[3rem] box-border">
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

      <Modal _showModal={showModal} _close={handleModal} _Ajuste="max-[320px]:top-[7rem]" >
        <div className="flex flex-col items-center">
          <h1 className="text-center font-semibold text-4xl dark:text-gray-900">Experimente as ferramentas do Entre Linhas e otimize sua <span className="text-custom-salmon">produtividade</span>!</h1>
          <img src="/admin_pana.svg" alt="Ilustração de uma mulher gerenciando." style={{ width: "-webkit-fill-available", height: "" }} className="" />

          <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md">Saiba mais</button>
        </div>
      </Modal>

      <Modal _showModal={showForm} _close={newForm} key={keyModal} _Ajuste="max-[360px]:abslute max-[360px]:top-24" _Custom="bg-white dark:bg-zinc-800">


        <form className="space-y-4 max-[360px]:overflow-auto max-[360px]:overflow-x-hidden" id="formGeren">
          <div className="py-5">
            <label htmlFor="title" className="block text-gray-700 font-bold dark:text-white">
              Título
            </label>
            <input
              type="text"
              id="title"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:border-custom-salmon dark:bg-zinc-800"
            />
          </div>
          <div className="py-5">
            <label htmlFor="date" className="block text-gray-700 font-bold dark:text-white">
              Data de entrega
            </label>
            <input
              type="date"
              id="date"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:border-custom-salmon dark:bg-zinc-800"
            />
          </div>
          <div className="py-5">
            <label htmlFor="nome" className="block text-gray-700 font-bold dark:text-white">
              Nome do(a) cliente:
            </label>
            <input
              type="text"
              id="nome"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:border-custom-salmon dark:bg-zinc-800"

            />
          </div>
          <div className="py-5">
            <label htmlFor="description" className="block text-gray-700 font-bold dark:text-white">
              Descrição dos Produtos
            </label>
            <textarea
              id="description"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-5 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:border-custom-salmon resize-y dark:bg-zinc-800">
            </textarea>
          </div>
          <div className="py-5">
            <label htmlFor="price" className="block text-gray-700 font-bold dark:text-white">
              Preço Total
            </label>
            <input
              type="number"
              id="price"
              className="w-[25rem] min-[425px]:w-[35rem] px-2 py-1 border border-gray-300 dark:text-white rounded-md focus:outline-none focus:border-custom-salmon dark:bg-zinc-800"
            />
          </div>
          <Button titleBt="Adicionar" onClick={saveForm} type="button" title="Adicionar" />
        </form>


      </Modal>
    </>
  )
}