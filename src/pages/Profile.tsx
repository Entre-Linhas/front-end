import { Header } from "../components/Header";
import { useState, ChangeEvent, useEffect } from "react";
import { Conquistas } from "../components/Conquistas";
import { Context } from "../contexts/Context";
import { useContext } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Pencil, GearSix } from "@phosphor-icons/react";
import { Conquista } from "../models/consquista";
// aqui rafa
 

import api from "../apiInstance";
import { conquistaParser } from "../utils/parsers";
export default function Profile() {


  const [conquistas, setConquistas] = useState<Conquista[]>([ { id: 1, dataConquista: new Date(), nome: "testeatwagfaw"} ]);
 
  


  const [displayFotos, setDisplayFotos] = useState(true);
  const [background, setBackground] = useState("bg-custom-salmon");
  const { perfil, definirFotoPerfil, definirDescricao, conquista2 } = useContext(Context)
  const [displaydesc, setDisplaydesc] = useState(false)
  const [descricao, setDescricao] = useState<string>("")
  const navigate = useNavigate()
// aqui rafa
  // const [redesSocial, setRedesSocial] = useState<RedeSocial[]>([
  //   { id: perfil.usuario.idUsuario, link: "" }
  // ]);

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

  function pegarConquistas() {
    api.get<Conquista[]>('/conquista/' + perfil.usuario.idUsuario)
      .then((response) => {
        const conquistas = response.data.map(item => conquistaParser(item))
        setConquistas(conquistas)
      })
  }
// // editei aqui - rafa
//   function pegarRedesSociais() {
//     api.get<RedeSocial[]>('/redesociais/' + perfil.usuario.idUsuario)
//       .then((response) => {
//         const redesSociais = response.data.map(item => redesocialParser(item))
//         setRedesSocial(redesSociais)
//       })
//   }

  useEffect(pegarConquistas, [])




  



  return (
    <>
      <Header />

      <div className="max-[1024px]:text-[1.8rem] text-[2rem] px-12 py-40 flex max-md:flex-col max-md:px-5 min-[1024px]:gap-12 ">

        <div className="bg-white py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[1024px]:border solid min-[1024px]:max-w-[31rem] min-[1024px]:min-[1024px]:shadow-xl px-5 dark:bg-zinc-800 dark:border-zinc-800">
          <div className="h-96 max-w-[25rem] w-full m-auto flex flex-col">
            <img src={perfil.foto} className="max-w-[100%] h-full rounded-full hover:brightness-75 cursor-pointer" alt="foto de perfil do usuário" role="img" onClick={() => navigate("/configurar")}/>
            
          </div>

          <div className="flex gap-5 items-center justify-between">
            <h2 className="font-bold text-[2.4rem] dark:text-white ">{perfil.usuario.nome} {perfil.usuario.sobrenome}</h2>
            <GearSix size={32} weight="fill" className="text-custom-salmon cursor-pointer" onClick={() => navigate("/configurar")}/>
          </div>
          <div>
            {perfil.servico ?
              (
                <div>
                  <p style={{maxWidth: "10rem"}} className="flex flex-wrap max-w-[10rem]">
                    {perfil.servico || "costurando a descrição"}
                  </p>
                  <div className={`${displaydesc ? "hidden" : "block"} py-20`}>
                    <Button typeStyle="secondary" titleBt="Editar" onClick={() => { navigate("/Configurar") }} title='ir para a página de configurações'/>
                  </div>
                </div>
              )
              :
              (


                <div>
                  <p className="py-5 dark:text-white">{perfil.servico ? perfil.serviço : "Adicione uma descrição sobre você"}</p>
                  <div className={`${displaydesc ? "hidden" : "block"}`}>
                    <Button typeStyle="secondary" titleBt={perfil.servico ? "Adicionar" : "Editar"} onClick={() => { navigate("/Configurar") }} title='ir para a página de configurações'/>
                  </div>
                </div>
              )
            }
          </div>

          {/* deixando escondida caso não dê tempo de implementar */}
          <ul className="hidden">
            <li>
              {/* <RedeSocial url={perfil.link}/> */}
            </li>
            <li className="flex items-center gap-3">
              {/* <RedeSocial url={perfil.usuario}/> */}
            </li>
            <li className="flex items-center gap-3">
              {/* <RedeSocial url={perfil.usuario}/> */}
            </li>
          </ul>

          <ul>
            <li className="flex flex-col py-3">
              <span className="font-semibold dark:text-white ">Nível</span>
              <span className="dark:text-white">
  {
    perfil.progresso === 1 ? "1. Aprendiz" :
    perfil.progresso === 2 ? "2. Iniciante" :
    perfil.progresso === 3 ? "3. Aspirante" :
    perfil.progresso === 4 ? "4. Novato" :
    perfil.progresso === 5 ? "5. Amador" :
    perfil.progresso === 6 ? "6. Intermediário" :
    perfil.progresso === 7 ? "7. Competente" :
    perfil.progresso === 8 ? "8. Habilidoso" :
    perfil.progresso === 9 ? "9. Experiente" :
    perfil.progresso === 10 ? "10. Avançado" :
    perfil.progresso === 11 ? "11. Especialista" :
    perfil.progresso === 12 ? "12. Proficiente" :
    perfil.progresso === 13 ? "13. Mestre" :
    perfil.progresso === 14 ? "14. Expert" :
    perfil.progresso === 15 ? "15. Virtuoso" :
    perfil.progresso === 16 ? "16. Elite" :
    perfil.progresso === 17 ? "17. Notável" :
    perfil.progresso === 18 ? "18. Excelente" :
    perfil.progresso === 19 ? "19. Mestre Supremo" :
    perfil.progresso === 20 ? "20. Lendário" :
    perfil.progresso === 21 ? "21. Herói" :
    perfil.progresso === 22 ? "22. Invencível" :
    perfil.progresso === 23 ? "23. Destemido" :
    perfil.progresso === 24 ? "24. Soberano" :
    perfil.progresso === 25 ? "25. Magnífico" :
    perfil.progresso === 26 ? "26. Supremo" :
    perfil.progresso === 27 ? "27. Desafiante" :
    perfil.progresso === 28 ? "28. Sobrenatural" :
    perfil.progresso === 29 ? "29. Divino" :
    perfil.progresso === 30 ? "30. Imortal" :
    perfil.progresso === 31 ? "31. Supremacia" :
    perfil.progresso === 32 ? "32. Último Nível" :
    ""
  }
</span>
            </li>
            <li className="flex flex-col py-3">
              <span className="font-semibold dark:text-white">Estudando desde:</span>
              <span className="dark:text-white">
                {perfil.daily || "você ainda não iniciou a Trilha."}
              </span>
            </li>
            <li className="flex flex-col py-3">
              <span className="font-semibold dark:text-white">Melhor sequência</span>
              <span className="dark:text-white">
              {
                  perfil.progresso === 1 ? "1. Módulo concluído!" :
                  perfil.progresso === 2 ? "2. Módulos concluídos!" :
                  perfil.progresso === 3 ? "3. Módulos concluídos!" :
                  perfil.progresso === 4 ? "4. Módulos concluídos!" :
                  perfil.progresso === 5 ? "5. Módulos concluídos!" :
                  perfil.progresso === 6 ? "6. Módulos concluídos!" :
                  perfil.progresso === 7 ? "7. Módulos concluídos!" :
                  perfil.progresso === 8 ? "8. Módulos concluídos!" :
                  perfil.progresso === 9 ? "9. Módulos concluídos!" :
                  perfil.progresso === 10 ? "10. Módulos concluídos!" :
                  perfil.progresso === 11 ? "11. Módulos concluídos!" :
                  perfil.progresso === 12 ? "12. Módulos concluídos!" :
                  perfil.progresso === 13 ? "13. Módulos concluídos!" :
                  perfil.progresso === 14 ? "14. Módulos concluídos!" :
                  perfil.progresso === 15 ? "15. Módulos concluídos!" :
                  perfil.progresso === 16 ? "16. Módulos concluídos!" :
                  perfil.progresso === 17 ? "17. Módulos concluídos!" :
                  perfil.progresso === 18 ? "18. Módulos concluídos!" :
                  perfil.progresso === 19 ? "19. Módulos concluídos!" :
                  perfil.progresso === 20 ? "20. Módulos concluídos!" :
                  perfil.progresso === 21 ? "21. Módulos concluídos!" :
                  perfil.progresso === 22 ? "22. Módulos concluídos!" :
                  perfil.progresso === 23 ? "23. Módulos concluídos!" :
                  perfil.progresso === 24 ? "24. Módulos concluídos!" :
                  perfil.progresso === 25 ? "25. Módulos concluídos!" :
                  perfil.progresso === 26 ? "26. Módulos concluídos!" :
                  perfil.progresso === 27 ? "27. Módulos concluídos!" :
                  perfil.progresso === 28 ? "28. Módulos concluídos!" :
                  perfil.progresso === 29 ? "29. Módulos concluídos!" :
                  perfil.progresso === 30 ? "30. Módulos concluídos!" :
                  perfil.progresso === 31 ? "31. Módulos concluídos!" :
                  perfil.progresso === 32 ? "32. Módulos concluídos!" :
                  ""
              }
              </span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </div>




          
        <div className="bg-white py-5 flex flex-col gap-10 max-md:w-full max-md:max-w-2xl max-md:m-auto min-[1024px]:border solid min-[1024px]:w-[100%] dark:bg-zinc-800 dark:border-zinc-700">
          <div className={` px-10 py-10`}>
            <h1 className="dark:text-white">Últimas conquistas</h1>
            <div className="flex flex-col gap-10 py-10">
              
              
                {conquistas.map(conquista => <Conquistas key={conquista.id} conquista={conquista} />)}

            </div>
          </div>
         </div>
         
      </div>
    </>
  );
}
