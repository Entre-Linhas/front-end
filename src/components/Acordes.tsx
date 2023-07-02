import { CaretDown, CaretUp, Circle, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Pedido } from "../models/pedido";
import api from "../apiInstance";
 
type AcordesProps = {

  pedido?: Pedido
}

export const Acordes = ({ pedido }: AcordesProps) => {
  const [display, setDisplay] = useState("hidden");
  const [display3, setDisplay3] = useState("hidden");
  const [status, setStatus] = useState("text-gray-500");
  // const [estado, setEstado] = useState(Pedido);

  const handleClick = () => {
    setDisplay(display === "hidden" ? "block" : "hidden");
  };


  useEffect(() => {
    const newPedido:any = {...pedido, estado:status} 
    saveEstado(newPedido);
    console.log("Testando se funciona", newPedido);
  }, [status]) 
  
  

  const saveEstado = (pedido: Pedido) => {
    api.put("/pedido/" + pedido.id, pedido)
      
      .then((response) => {

      })
      .catch((error) => {
        console.error(error);
      }
      )

  };



  const ShowStatus2 = () => {
    setDisplay3(display3 === "hidden" ? "block" : "hidden");

  };

  const StatusGreen = () => {
    setStatus("text-green-500");

    setDisplay3("hidden");

  };

  const StatusYellow = () => {
    setStatus("text-yellow-500");

    setDisplay3("hidden");

  };

  const StatusRed = () => {
    setStatus("text-red-500");
    setDisplay3("hidden");

  };

  return (
    <div className="py-10">
      <div
        className={`${display === "hidden" ? "block" : "hidden"
          } py-3 bg-white shadow-sm shadow-zinc-800 w-[100%] flex items-center justify-between dark:bg-zinc-700 `}
      >
        <span className="px-5 text-2.2rem text-gray-900 dark:text-white max-w-[20rem]">{pedido?.title}</span>
        <div className="flex items-center px-5">
          <span className="px-5 text-2.2rem text-gray-900 dark:text-white max-[620px]:hidden">R$ {pedido?.price}</span>
          <div className="flex items-center">
            <span title={status} className="text-gray-900 dark:text-white max-[620px]:hidden">Status: </span>
            <div className="flex flex-col justify-center">
              <Circle
                size={26}
                weight="fill"
                onClick={ShowStatus2}
                className={`${status}`}
                role="button"
                aria-label="Alterar status"
              />
              <div
                className={
                  `${display3 === "hidden" ? "hidden" : "block"} 
            
            min-lg:self-start rounded-md 
            
            
            `}
              >
                <ul className="text-custom-salmon absolute z-10 rounded-xl py-2 bg-white shadow-black shadow-2xl dark:bg-zinc-800 dark:border-b-zinc-700 max-[620px]:right-[1rem]">
                  <div className="flex px-5 py-2 gap-5 flex-col">
                    <li className="dark:text-gray-900">
                      {" "}
                      <Circle
                        size={26}
                        weight="fill"
                        className="text-green-500"
                        onClick={StatusGreen}
                        role="button"
                        aria-label="Definir como status verde"
                      />
                    </li>
                    <li>
                      {" "}
                      <Circle
                        size={26}
                        weight="fill"
                        className="text-yellow-500"
                        onClick={StatusYellow}
                        role="button"
                        aria-label="Definir como status amarelo"
                      />
                    </li>
                    <li>
                      {" "}
                      <Circle
                        size={26}
                        weight="fill"
                        className="text-red-500"
                        onClick={StatusRed}
                        role="button"
                        aria-label="Definir como status vermelho"
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div
        className={`${display} border-[1px] solid border-[#CCCCCC] bg-white px-12 py-8 dark:text-white dark:bg-zinc-800 dark:border-zinc-700`}
      >
        <ul className="text-2rem">
          <div className="flex justify-between items-center max-md:flex-col max-md:items-start">
            <li className="flex gap-5 py-4 max-[319px]:flex-col">
              <span className="dark:text-white">Título:</span>
              <span className="text-[#5B5B5B]">{pedido?.nome}</span>
            </li>
            <div className="flex items-center justify-center gap-3">
              <span className="dark:text-white">Status: </span>
              <div className="flex flex-col justify-center">
                <Circle
                  size={26}
                  weight="fill"
                  onClick={ShowStatus2}
                  className={`${status}`}
                  role="button"
                  aria-label="Alterar status"
                />
                <div
                  className={`${display3 === "hidden" ? "hidden" : "block"
                    }   min-lg:self-start rounded-md shadow-xl`}
                >
                  <ul className="text-custom-salmon absolute z-10 bg-white shadow-black shadow-2xl rounded-xl py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                    <div className="flex px-5 py-2 gap-5 flex-col">
                      <li>
                        {" "}
                        <Circle
                          size={26}
                          weight="fill"
                          className="text-green-500"
                          onClick={StatusGreen}
                          role="button"
                          aria-label="Definir como status verde"
                        />
                      </li>
                      <li>
                        {" "}
                        <Circle
                          size={26}
                          weight="fill"
                          className="text-yellow-500"
                          onClick={StatusYellow}
                          role="button"
                          aria-label="Definir como status amarelo"
                        />
                      </li>
                      <li>
                        {" "}
                        <Circle
                          size={26}
                          weight="fill"
                          className="text-red-500"
                          onClick={StatusRed}
                          role="button"
                          aria-label="Definir como status vermelho"
                        />
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <li className="flex gap-5 py-4 max-[375px]:flex-col">
            <span className="dark:text-white">Data de Entrega:</span>
            <span className="text-[#5B5B5B]">{pedido?.date.toLocaleDateString()}</span>
          </li>
          <li className="flex gap-5 py-4 max-[375px]:flex-col">
            <span className="dark:text-white">Nome do Cliente:</span>
            <span className="text-[#5B5B5B]">{pedido?.nome}</span>
          </li>
        </ul>

        <div className="flex flex-col gap-[25rem]">
          <ul>
            <li className="py-5">
              <span className="dark:text-white">Descrição dos Produtos:</span>
              <br />
              <span className="text-[#5B5B5B]">{pedido?.description}</span>
            </li>
          </ul>
          <div className="mt-full">

            <div className="flex justify-between py-1.2rem">
              <span className="dark:text-white">Preço total:</span>
              <div className="flex items-center gap-5">
                <span className="text-gray-900 dark:text-[#5B5B5B]">R$ {pedido?.price}</span>

                <div className="flex items-center max-lg:flex-col-reverse max-[360px]:hidden">
                  <Circle
                    size={26}
                    weight="fill"
                    onClick={ShowStatus2}
                    className={`${status}`}
                    role="button"
                    aria-label="Alterar status"
                  />
                </div>
              </div>
            </div>
            <hr />
            <br />
            <button className="text-red-600" title="Excluir produto">Excluir produto</button>
          </div>
        </div>
      </div>

      <button
        className="bg-[#62B8AF] shadow-sm shadow-zinc-800 w-full text-white py-2 rounded-0.5rem flex items-center justify-center"
        onClick={handleClick}
      >
        {display === "hidden" ? <CaretDown size={32} /> : <CaretUp size={32} />}
      </button>
    </div>
  );
};
