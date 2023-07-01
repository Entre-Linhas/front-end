import { CaretDown, CaretUp, Circle, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Pedido } from "../models/pedido";

type AcordesProps = {

pedido?: Pedido
}

export const Acordes = ({pedido}: AcordesProps) => {
  const [display, setDisplay] = useState("hidden");
  const [display3, setDisplay3] = useState("hidden");
  const [status, setStatus] = useState("text-gray-500");

  const handleClick = () => {
    setDisplay(display === "hidden" ? "block" : "hidden");
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
        className={`${
          display === "hidden" ? "block" : "hidden"
        } py-3 bg-white w-[100%] flex items-center justify-between`}
      >
        <span className="px-5 text-2.2rem dark:text-gray-900">{pedido?.title}</span>
        <div className="flex items-center px-5">
          <span className="px-5 text-2.2rem dark:text-gray-900">R$ {pedido?.price}</span>
          <div className="flex items-center  flex-col-reverse">
            <span title={status} className="dark:text-gray-900">Status: </span>
            <Circle
              size={26}
              weight="fill"
              onClick={ShowStatus2}
              className={`${status}`}
            
            />
            <div
              className={
            `${display3 === "hidden" ? "hidden" : "block"} 
            
            min-lg:self-start rounded-md shadow-xl
            
            
            `}
            >
              <ul className="text-custom-salmon absolute z-10 max-lg:-mt-[13rem] bg-black rounded-xl py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                <div className="flex px-5 py-2 gap-5 flex-col">
                  <li className="dark:text-gray-900">
                    {" "}
                    <Circle
                      size={26}
                      weight="fill"
                      className="text-green-500"
                      onClick={StatusGreen}
                    />
                  </li>
                  <li>
                    {" "}
                    <Circle
                      size={26}
                      weight="fill"
                      className="text-yellow-500"
                      onClick={StatusYellow}
                    />
                  </li>
                  <li>
                    {" "}
                    <Circle
                      size={26}
                      weight="fill"
                      className="text-red-500"
                      onClick={StatusRed}
                    />
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>

     

      <div
        className={`${display} border-[1px] solid border-[#CCCCCC] bg-white px-12 py-8`}
      >
        <ul className="text-2rem">
          <div className="flex justify-between items-center max-md:flex-col max-md:items-start">
            <li className="flex gap-5 py-4 max-[319px]:flex-col">
              <span className="dark:text-gray-900">Título:</span>
              <span className="text-[#5B5B5B]">{pedido?.nome}</span>
            </li>
            <div className="flex items-center">
              <span className="dark:text-gray-900">Status: </span>
              <Circle
                size={26}
                weight="fill"
                onClick={ShowStatus2}
                className={`${status}`}
              />
              <div
                className={`${
                  display3 === "hidden" ? "hidden" : "block"
                } min-lg:self-start rounded-md shadow-xl`}
              >
                <ul className="text-custom-salmon absolute z-10 max-lg:-mt-[13rem] mr-[10rem] bg-black rounded-xl py-2 dark:bg-zinc-800 dark:border-b-zinc-700">
                  <div className="flex px-5 py-2 gap-5 max-lg:flex-col">
                    <li>
                      {" "}
                      <Circle
                        size={26}
                        weight="fill"
                        className="text-green-500"
                        onClick={StatusGreen}
                      />
                    </li>
                    <li>
                      {" "}
                      <Circle
                        size={26}
                        weight="fill"
                        className="text-yellow-500"
                        onClick={StatusYellow}
                      />
                    </li>
                    <li>
                      {" "}
                      <Circle
                        size={26}
                        weight="fill"
                        className="text-red-500"
                        onClick={StatusRed}
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>

          <li className="flex gap-5 py-4">
            <span className="dark:text-gray-900">Data de Entrega:</span>
            <span className="text-[#5B5B5B]">{pedido?.date.toLocaleDateString()}</span>
          </li>
          <li className="flex gap-5 py-4">
            <span className="dark:text-gray-900">Nome do Cliente:</span>
            <span className="text-[#5B5B5B]">{pedido?.nome}</span>
          </li>
        </ul>

        <div className="flex flex-col gap-[25rem]">
          <ul>
            <li className="py-5">
              <span className="dark:text-gray-900">Descrição dos Produtos:</span>
              <br />
              <span className="text-[#5B5B5B]">{pedido?.description}</span>
            </li>
          </ul>
          <div className="mt-full">
           
            <div className="flex justify-between py-1.2rem">
              <span className="dark:text-gray-900">Preço total:</span>
              <div className="flex items-center gap-5">
                <span className="dark:text-gray-900">R$ {pedido?.price}</span>

                <div className="flex items-center max-lg:flex-col-reverse">
                  <Circle
                    size={26}
                    weight="fill"
                    onClick={ShowStatus2}
                    className={`${status}`}
                  />
                </div>
              </div>
            </div>
            <hr />
            <br />
            <button className="text-red-600">Excluir produto</button>
          </div>
        </div>
      </div>

      <button
        className="bg-[#62B8AF] w-full text-white py-2 rounded-0.5rem flex items-center justify-center"
        onClick={handleClick}
      >
        {display === "hidden" ? <CaretDown size={32} /> : <CaretUp size={32} />}
      </button>
    </div>
  );
};
