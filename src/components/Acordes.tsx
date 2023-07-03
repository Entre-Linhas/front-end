import { CaretDown, CaretUp, Circle, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { Pedido } from "../models/pedido";
import { useContext } from "react";
import { Context } from "../contexts/Context";
import api from "../apiInstance";
 
type AcordesProps = {

  pedido?: Pedido
}

export const Acordes = ({ pedido }: AcordesProps) => {
  const [display, setDisplay] = useState("hidden");
  const [display3, setDisplay3] = useState("hidden");
  const [status, setStatus] = useState("");
  // const [estado, setEstado] = useState(Pedido);
  const { pegarDadosPedido } = useContext(Context)


  const handleClick = () => {
    setDisplay(display === "hidden" ? "block" : "hidden");
  };


  useEffect(() => {
    const newPedido:any = {...pedido, estado:status} 
    status && saveEstado(newPedido);
    console.log("Testando se funciona", newPedido);
  }, [status]) 
  
  

  const saveEstado = (pedido: Pedido) => {
    api.put("/pedidos/" + pedido.id, pedido)
      
      .then((response) => {
        pegarDadosPedido?.()
      })
      .catch((error) => {
        console.error(error);
      }
      )

  };

  const deletePedido = (pedido: Pedido) => {
    api.delete("/pedidos/" + pedido.id)
      
      .then((response) => {
        pegarDadosPedido?.()
      })
      .catch((error) => {
       
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
        <p className="px-5 text-2.2rem text-gray-900 dark:text-white max-w-[20rem] break-words truncate">{pedido?.title}</p>
        {/* esse aqui */}
        <div className="flex items-center px-5">
          <p className="px-5 text-2.2rem text-gray-900 dark:text-white max-[620px]:hidden">R$ {pedido?.price}</p>
          <div className="flex items-center">
            <p  className="px-5 text-2.2rem text-gray-900 dark:text-white ">R$ {pedido?.price}</p>
            <p title={status} className="text-gray-900 dark:text-white max-[620px]:hidden">Status: </p>
            <div className="flex flex-col justify-center">
              <Circle
                size={26}
                weight="fill"
                onClick={ShowStatus2}
                className={`${pedido?.estado}`}
                role="button"
                aria-label="Alterar status"
              />
              <div
                className={
                  `${display3 === "hidden" ? "hidden" : "block"} 
            
            min-lg:self-start rounded-md 
            
            // Status
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
            <li className="flex gap-5 py-4 flex-wrap">
              <p className="dark:text-white">Título:</p>
              <p className="text-[#5B5B5B] max-w-[20rem] break-words">{pedido?.title}</p>
            </li>
            <div className="flex items-center justify-center gap-3">
              <p className="dark:text-white">Status: </p>
              <div className="flex flex-col justify-center">
                <Circle
                  size={26}
                  weight="fill"
                  onClick={ShowStatus2}
                  className={`${pedido?.estado}`}
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

          <li className="flex flex-wrap gap-5 py-4">
            <p className="dark:text-white">Data de Entrega:</p>
            <p className="text-[#5B5B5B]">{pedido?.date.toLocaleDateString()}</p>
          </li>
          <li className="gap-5 py-4 flex flex-wrap ">
            <p className="dark:text-white">Nome do Cliente:</p>
            <p className="text-[#5B5B5B]">{pedido?.nome}</p>
          </li>
        </ul>

        <div className="flex flex-col gap-[25rem]">
          <ul>
            <li className="py-5">
              <p className="dark:text-white">Descrição dos Produtos:</p>
              <br />
              <p className="text-[#5B5B5B]">{pedido?.description}</p>
            </li>
          </ul>
          <div className="mt-full">

            <div className="flex justify-between py-1.2rem">
              <p className="dark:text-white">Preço total:</p>
              <div className="flex items-center gap-5">
                <p className="text-gray-900 dark:text-[#5B5B5B]">R$ {pedido?.price}</p>

                <div className="flex items-center max-lg:flex-col-reverse max-[360px]:hidden">
                  <Circle
                    size={26}
                    weight="fill"
                    onClick={ShowStatus2}
                    className={`${pedido?.estado}`}
                    role="button"
                    aria-label="Alterar status"
                  />
                </div>
              </div>
            </div>
            <hr />
            <br />
            <button className="text-red-600" title="Excluir produto" onClick={() => deletePedido(pedido as Pedido)}>Excluir produto</button>
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
