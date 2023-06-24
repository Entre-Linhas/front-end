import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";


var nome_pedido = "Roupas da Juliana";
var valor_pedido = 170;
var dtentrega_pedido = "10/10/2010";
var nome_cliente = "teste";
var desc_produtos = "A calça é confeccionada com um tecido de alta qualidade, proporcionando conforto e durabilidade. Seu corte é ajustado, valorizando a silhueta e oferecendo um caimento impecável. O design é versátil, permitindo combinações com diferentes estilos de blusas e sapatos. Além disso, a calça possui bolsos funcionais e detalhes sutis que adicionam um toque de sofisticação."


export const Acordes = () => {

  const [display, setDisplay] = useState("hidden");

  const handleClick = () => {
    setDisplay(display === "hidden" ? "block" : "hidden")

  };

  const [icon, setIcon] = useState("hidden");

  const handleIcon = () => {
    setIcon(icon === "hidden" ? "block" : "hidden")
  }


  return (

    <div className="py-10">
      <div className={`${display === "hidden" ? "block" : "hidden"} py-3 bg-white w-[100%] flex items-center justify-between`}>
        <span className="px-5 text-2.2rem">{nome_pedido}</span>
        <div className="flex items-center px-5">
          <span className="px-5 text-2.2rem">R$ {valor_pedido}</span>
          <div className="rounded-full h-2.5rem w-2.5rem bg-green-500"></div>
        </div>
      </div>

      {/* esconder essa abaixo e só mostrar quando o usuário clicar no outro botão */}

      <div className={`${display} border-[1px] solid border-[#CCCCCC] bg-white px-12 py-8`}>

        <ul className="text-2rem">
          <li className="flex gap-5 py-4 max-[319px]:flex-col">
            <span>Nome do pedido:</span>
            <span className="text-gray-400">{nome_pedido}</span>
          </li>

          <li>
            <div className="flex gap-5 items-center">
              <span>Status:</span>
              <div className="rounded-full h-2.5rem w-2.5rem bg-green-500"></div>
            </div>
          </li>

          <li className="flex gap-5 py-4">
            <span>Data de Entrega:</span>
            <span className="text-gray-400">{dtentrega_pedido}</span>
          </li>
          <li className="flex gap-5 py-4">
            <span>Nome do Cliente:</span>
            <span className="text-gray-400">{nome_cliente}</span>
          </li>
          <li className="py-5">
            <span>Descrição dos Produtos:</span>
            <br />
            <span className="text-gray-400">{desc_produtos}</span>
          </li>
        </ul>
        <div className="mt-full">
          <div className="flex justify-between py-1.2rem">
            <span>Preço total:</span>
            <span>R$ {valor_pedido}</span>
          </div>
          <hr />
          <br />
          <button className="text-red-600">Excluir produto</button>
        </div>

      </div>

      <button className="bg-[#62B8AF] w-full text-white py-2 rounded-0.5rem flex items-center justify-center" onClick={handleClick}>
        {display === "hidden" ? (<CaretDown size={32} />) : (<CaretUp size={32} />)}
      </button>

    </div>
  )
}