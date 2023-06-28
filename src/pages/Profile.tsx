import { Header } from "../components/Header";
import { useState, ChangeEvent } from "react";
import { Conquistas } from "../components/Conquistas";
import { Context } from "../contexts/Context";
import { useContext } from "react";
import { Button } from "../components/Button";

export default function Profile() {
  const [displayFotos, setDisplayFotos] = useState(true);
  const [background, setBackground] = useState("bg-custom-salmon");
  const { perfil, definirFotoPerfil, definirDescricao } = useContext(Context)
  const [displaydesc, setDisplaydesc] = useState(false)
  const [descricao, setDescricao] = useState<string>("")

  const alterContent = () => {
    setDisplayFotos(!displayFotos);
    setBackground(displayFotos ? "" : "bg-custom-salmon");
  };

  const Block = () => {
    setDisplaydesc(true);
  }

  const Hidden = () => {
    setDisplaydesc(false);
  }


  const images = ["/CryptoFluff_0040.jpg",
    "/CryptoFluff_0059.jpg",
    "/CryptoFluff_0192.jpg",
    "/CryptoFluff_0193.jpg",
    "/CryptoFluff_0195.jpg",
    "/CryptoFluff_0196.jpg",
    "/CryptoFluff_0197.jpg",
    "/CryptoFluff_0198.jpg",
    "/CryptoFluff_0199.jpg",
  ]

  



  

  
 












  return (
    <>
      <Header />

      <div className="max-[768px]:text-[1.8rem] text-[2rem] px-12 py-40 flex max-md:flex-col max-md:px-5 min-[768px]:gap-12 ">




        <div className="py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[768px]:border solid min-[768px]:max-w-sm min-[768px]:min-[768px]:shadow-xl min-[768px]:px-3">
          <div className="h-96 bg-black max-w-[25rem] w-full m-auto">
             <img src={perfil.foto} className="max-w-[100%] h-full"/>
          </div>

          <div>
            <h2 className="font-bold">{perfil.usuario.nome} {perfil.usuario.sobrenome}</h2>
            <span>Membro</span>
          </div>
          <div>
            {perfil.servico ?
              (
                <p>
                  {perfil.servico || "costurando a descrição"}
                </p>
              )
              :
              (

                <div>
                  <p className="py-5">Adicione uma descrição sobre você</p>
                  <textarea name="teste"  onChange={(e) => setDescricao(e.target.value)} className={`text-black resize-y py-5 rounded-3xl shadow-xl max-w-[20rem] min-[768px]:m-auto ${displaydesc ? "block" : "hidden"}`} />
                  {displaydesc ?
                    (
                      <div className="py-10 flex gap-3">
                        <Button title="Confirmar" onClick={() => definirDescricao(descricao)}  />
                        <div className={`${displaydesc ? "block" : "hidden"}`}>
                          <Button title="Cancelar" onClick={Hidden} />
                        </div>
                      </div>
                    )
                    :
                    (
                      <div>
                        <div className={`${displaydesc ? "hidden" : "block"}`}>
                          <Button typeStyle="secondary" title="Adicionar" onClick={Block}/>
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>


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
              <span>{perfil.nivel} - {perfil.nivel > 3 ? "Aprendiz" : "Iniciante"}</span>
            </li>
            <li className="flex flex-col py-3">
              <span className="font-semibold">Membro desde</span>
              <span>
                {perfil.usuario.data_termino || "não tem"}
              </span>
            </li>
            <li className="flex flex-col py-3">
              <span className="font-semibold">Melhor sequência</span>
              <span>{perfil.max_combo || "Você ainda não iniciou a Trilha."}</span>
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

          <div className={`${displayFotos ? "" : "hidden"} flex flex-wrap items-center justify-center gap-10 px-10 py-10 overflow-y-auto`}>
            {images.map((image) => <img onClick={() => definirFotoPerfil(image)} className="h-52 w-52 cursor-pointer" src={image}/>)}
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
