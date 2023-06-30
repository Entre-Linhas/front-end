import { Header } from "../components/Header";
import { useState, ChangeEvent } from "react";
import { Conquistas } from "../components/Conquistas";
import { Context } from "../contexts/Context";
import { useContext } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [displayFotos, setDisplayFotos] = useState(true);
  const [background, setBackground] = useState("bg-custom-salmon");
  const { perfil, definirFotoPerfil, definirDescricao } = useContext(Context)
  const [displaydesc, setDisplaydesc] = useState(false)
  const [descricao, setDescricao] = useState<string>("")
  const navigate = useNavigate()

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



  return (
    <>
      <Header />

      <div className="max-[1024px]:text-[1.8rem] text-[2rem] px-12 py-40 flex max-md:flex-col max-md:px-5 min-[1024px]:gap-12 ">

        <div className="bg-white py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[1024px]:border solid min-[1024px]:max-w-sm min-[1024px]:min-[1024px]:shadow-xl px-5">
          <div className="h-96 max-w-[25rem] w-full m-auto">
            <img src={perfil.foto} className="max-w-[100%] h-full rounded-full" />
          </div>

          <div>
            <h2 className="font-bold text-[2.4rem]">{perfil.usuario.nome} {perfil.usuario.sobrenome}</h2>
            <span>Membro</span>
          </div>
          <div>
            {perfil.servico ?
              (
                <div>
                  <p>
                    {perfil.servico || "costurando a descrição"}
                  </p>
                  <div className={`${displaydesc ? "hidden" : "block"}`}>
                    <Button typeStyle="secondary" title="Editar" onClick={() => { navigate("/Configurar") }} />
                  </div>
                </div>
              )
              :
              (


                <div>
                  <p className="py-5">Adicione uma descrição sobre você</p>
                  <div className={`${displaydesc ? "hidden" : "block"}`}>
                    <Button typeStyle="secondary" title="Adicionar" onClick={() => { navigate("/Configurar") }} />
                  </div>
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




          
        <div className="bg-white py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[1024px]:border solid min-[1024px]:w-[100%]">
          <div className={` px-10 py-10`}>
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
