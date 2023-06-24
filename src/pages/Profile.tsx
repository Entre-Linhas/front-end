import { Header } from "../components/Header";
import { useState } from "react";
import { Conquistas } from "../components/Conquistas";

export default function Profile() {
  const [displayFotos, setDisplayFotos] = useState(true);
  const [background, setBackground] = useState("bg-custom-salmon");

  const alterContent = () => {
    setDisplayFotos(!displayFotos);
    setBackground(displayFotos ? "" : "bg-custom-salmon");
  };

  return (
    <>
      <Header />

      <div className="max-[768px]:text-[1.8rem] text-[2rem] px-12 py-40 flex max-md:flex-col max-md:px-5 min-[768px]:gap-12">




        <div className="py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[768px]:border solid min-[768px]:max-w-sm">
          <div className="h-96 bg-black max-w-[25rem] w-full m-auto"></div>
          <div>
            <h2 className="font-bold">Username</h2>
            <span>Membro</span>
          </div>
          <p>Olá! Me chamo username, tenho age, atuo no ramo exemplo...</p>
          <ul>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-black"></div>
              <span>Rede 01</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-black"></div>
              <span>Rede 02</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-lg bg-black"></div>
              <span>Rede 03</span>
            </li>
          </ul>
          <ul>
            <li className="flex flex-col py-3">
              <span className="font-semibold">Nível</span>
              <span>01 - Aprendiz</span>
            </li>
            <li className="flex flex-col py-3">
              <span className="font-semibold">Membro desde</span>
              <span>00/00/00</span>
            </li>
            <li className="flex flex-col py-3">
              <span className="font-semibold">Nível</span>
              <span>07 dias</span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>





        <div className="py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[768px]:border solid min-[768px]:w-[100%]">

          <div className="min-[768px]:px-10 mt-0 mr-auto  max-md:w-full max-md:max-w-2xl max-md:m-auto flex gap-4 py-3 px-3 items-center justify-center 
          white">
            <button
              className={`${displayFotos ? "bg-custom-salmon text-white" : "border solid border-custom-salmon text-custom-salmon"
                } py-2 px-12 max-[300px]:px-4 rounded-2xl`}
              onClick={alterContent}
            >
              Fotos
            </button>
            <div className="w-[0.2rem] h-14 bg-[#CCCCCC]"></div>
            <button
              className={`${!displayFotos ? "bg-custom-salmon text-white" : "border solid border-custom-salmon text-custom-salmon"}  py-2 px-4 rounded-2xl`}
              onClick={alterContent}
            >
              Conquistas
            </button>
          </div>

          <div className={`${displayFotos ? "" : "hidden"} px-10 py-10`}>
            <span>Vini, vou esperar as fotos do banco</span>
          </div>

          <div className={`${displayFotos ? "hidden" : ""} px-10 py-10`}>
            <h1>Últimas conquistas</h1>
            <div className="flex flex-col gap-10 py-10">
              <Conquistas etapa="1. Definição do negócio" />

              <Conquistas etapa="2. Análise de mercado" />

              <Conquistas etapa="3. Meu produto" />

              <Conquistas etapa="4. Diferencial" />

              <Conquistas etapa="1. Meu cliente" />

            </div>
          </div>


        </div>


      </div>
    </>
  );
}
