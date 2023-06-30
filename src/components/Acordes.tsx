import { CaretDown, CaretUp, Circle, X } from "@phosphor-icons/react";
import { useState } from "react";


var nome_pedido = "Roupas da Juliana";
var valor_pedido = 170;
var dtentrega_pedido = "10/10/2010";
var nome_cliente = "teste";
var desc_produtos = "A calça é confeccionada com um tecido de alta qualidade, proporcionando conforto e durabilidade. Seu corte é ajustado, valorizando a silhueta e oferecendo um caimento impecável. O design é versátil, permitindo combinações com diferentes estilos de blusas e sapatos. Além disso, a calça possui bolsos funcionais e detalhes sutis que adicionam um toque de sofisticação."


export const Acordes = () => {

  const [display, setDisplay] = useState("hidden");
  const [display2, setDisplay2] = useState(false);
  const [status, setStatus] = useState("text-gray-500")

   
  const handleClick = () => {
    setDisplay(display === "hidden" ? "block" : "hidden")

  };

  const handleClick2 = () => {
    setDisplay2(!display2);
    
  };

  const StatusGreen = () => {
    setStatus("text-green-500");
    setDisplay2(!display2);
  };

  const StatusYellow = () => {
    setStatus("text-yellow-500");
    setDisplay2(!display2);
  };

  const StatusRed = () => {
    setStatus("text-red-500");
    setDisplay2(!display2);
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
          <div className="flex items-center max-lg:flex-col-reverse"> 
                  <span>Status: </span>
                  <Circle size={26} weight="fill" onClick={handleClick2} className={`${status}`}/>
                <div className={`${display2 ? "block" : "hidden"} min-lg:self-start rounded-md shadow-xl`}>
                  <ul className="  text-custom-salmon absolute z-10 max-lg:-mt-[13rem] bg-black rounded-xl py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                    <div className="flex px-5 py-2 gap-5 max-lg:flex-col"> 
                      <li> <Circle size={26} weight="fill" className="text-green-500" onClick={StatusGreen}/></li>
                      <li> <Circle size={26} weight="fill" className="text-yellow-500" onClick={StatusYellow}/></li>
                      <li> <Circle size={26} weight="fill" className="text-red-500" onClick={StatusRed}/></li>
                    </div>
                  </ul>
                 </div>
              </div>
        </div>
      </div>

      {/* esconder essa abaixo e só mostrar quando o usuário clicar no outro botão */}

      <div className={`${display} border-[1px] solid border-[#CCCCCC] bg-white px-12 py-8`}>

        <ul className="text-2rem">
          
          <div className="flex items-center justify-between"> 
            <li className="flex gap-5 py-4 max-[319px]:flex-col">
              <span>Título:</span>
              <span className="text-[#5B5B5B]">{nome_pedido}</span>
            </li>
            <div className="flex items-center max-lg:flex-col-reverse"> 
                  <span>Status: </span>
                  <Circle size={26} weight="fill" onClick={handleClick2} className={`${status}`}/>
                <div className={`${display2 ? "block" : "hidden"} min-lg:self-start rounded-md shadow-xl`}>
                  <ul className="  text-custom-salmon absolute z-10 max-lg:-mt-[13rem] bg-black rounded-xl py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                    <div className="flex px-5 py-2 gap-5 max-lg:flex-col"> 
                      <li> <Circle size={26} weight="fill" className="text-green-500" onClick={StatusGreen}/></li>
                      <li> <Circle size={26} weight="fill" className="text-yellow-500" onClick={StatusYellow}/></li>
                      <li> <Circle size={26} weight="fill" className="text-red-500" onClick={StatusRed}/></li>
                       
                    </div>
                  </ul>
                 </div>
              </div>
          </div>
 
          <li className="flex gap-5 py-4">
            <span>Data de Entrega:</span>
            <span className="text-[#5B5B5B]">{dtentrega_pedido}</span>
          </li>
          <li className="flex gap-5 py-4">
            <span>Nome do Cliente:</span>
            <span className="text-[#5B5B5B]">{nome_cliente}</span>
          </li>
          </ul>

        <div className="flex flex-col gap-[25rem]">
          <ul>
          <li className="py-5">
            <span>Descrição dos Produtos:</span>
            <br />
            <span className="text-[#5B5B5B]">{desc_produtos}</span>
          </li>
        </ul>
        <div className="mt-full">
          <div className="flex justify-between py-1.2rem">
            <span>Preço total:</span>
            <div className="flex items-center gap-5"> 
              <span>R$ {valor_pedido}</span>
             
              <div className="flex items-center max-lg:flex-col-reverse"> 
                  <Circle size={26} weight="fill" onClick={handleClick2} className={`${status}`}/>
                <div className={`${display2 ? "block" : "hidden"} min-lg:self-start rounded-md shadow-xl`}>
                  <ul className="  text-custom-salmon absolute z-10 max-lg:-mt-[13rem] bg-black rounded-xl py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                    <div className="flex px-5 py-2 gap-5 max-lg:flex-col"> 
                      <li> <Circle size={26} weight="fill" className="text-green-500" onClick={StatusGreen}/></li>
                      <li> <Circle size={26} weight="fill" className="text-yellow-500" onClick={StatusYellow}/></li>
                      <li> <Circle size={26} weight="fill" className="text-red-500" onClick={StatusRed}/></li>
                       
                    </div>
                  </ul>
                 </div>
              </div>
              
            </div>
          </div>
          <hr />
          <br />
          <button className="text-red-600">Excluir produto</button>
        </div>
        </div>
      </div>

      <button className="bg-[#62B8AF] w-full text-white py-2 rounded-0.5rem flex items-center justify-center" onClick={handleClick}>
        {display === "hidden" ? (<CaretDown size={32} />) : (<CaretUp size={32} />)}
      </button>

    </div>
  )
}