import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";


var nome_material = "Linha";
var valor_material = "1,70";

export const Accordion = () => {

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
        <span className="px-5 text-2.2rem">{nome_material}</span>
        <div className="flex items-center px-5">
          <span className="px-5 text-2.2rem">R$ {valor_material}</span>
          <div className="rounded-full h-2.5rem w-2.5rem bg-green-500"></div>
        </div>
      </div>

      {/* esconder essa abaixo e só mostrar quando o usuário clicar no outro botão */}

      <div className={`${display} border-[1px] solid border-[#CCCCCC] bg-white px-12 py-8`}>

        <ul className="text-2rem">
          <li className="flex gap-5 py-4 max-[319px]:flex-col">
            <span>Material:</span>
            <span className="text-gray-400">{nome_material}</span>
          </li>

        </ul>
        <div className="mt-full">
          <div className="flex justify-between py-1.2rem">
            <span>Preço total:</span>
            <span>R$ {valor_material}</span>
          </div>
          <hr />
          <br />
          <button className="text-red-600">Excluir material</button>
        </div>

      </div>

      <button className="bg-[#62B8AF] w-full text-white py-2 rounded-0.5rem flex items-center justify-center" onClick={handleClick}>
        {display === "hidden" ? (<CaretDown size={32} />) : (<CaretUp size={32} />)}
      </button>

    </div>
  )
}