import { useContext, useState } from 'react';
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';



var content4 = "teste"
interface MaterialProps {
  title: string;
  image?: string;
  content?: string;
}

export default function Material({ image, title, content }: MaterialProps) {
  const navigate = useNavigate();
 
  
 
  const { atividades, setAtividades, incrementarProgressoAtividade } = useContext(Context);
 

  const [progressoMateria, setProgressoMateria] = useState(0);
  
  function Testando() {
    incrementarProgressoAtividade()
    /* const newAtividade = {
      ...atividades,
      progresso: atividades.progresso + 1,
      materia: {
        idMateria: atividades.progresso + 1
      }
    }

    setAtividades(newAtividade) */
  }

 
  if (atividades?.progresso < 4) {
 

    return (<div className="m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[10rem] text-center">

      <h1 className="text-[2.4rem] font-semibold">{title}</h1>
      <div className="flex flex-col items-center px-[2rem]">
        <div>
          <img src={image} className="m-auto py-[4rem] max-w-[100%]" />
        </div>
        
        {/* <div>
          <p>{atividades.materia.tituloPag}</p>
        </div>

        <div>
          <p>{atividades.materia.text1}</p>
        </div>

        <div>
          <p>{atividades.materia.text2}</p>
        </div>

        <div>
          <p>{atividades.materia.text3}</p>
        </div> */}

        <p className="text-justify max-w-[80.9rem]">
            {atividades?.materia?.tituloPag || "...Carregando"}
        </p>
        <div className="flex gap-[3.5rem] py-[3.5rem]">
          <Button
            title="anterior"


          />
          <Button
            title="próximo"
             onClick={Testando}
          />
        </div>
     
      </div>
    </div>)



  } else {

    return ( 
      <div className="py-[20rem] px-[1rem] max-w-[100rem] m-auto">
            <div className="m-auto flex flex-col gap-[1.5rem]">
               <h1 className="text-center text-[2.4rem] font-semibold">Hora de colocar em prática</h1>
               <p className="text-center m-auto ">Agora é hora de colocar em prática tudo o que foi aprendido nas lições anteriores! Os exercícios são uma oportunidade para você testar suas habilidades e aplicar os conhecimentos adquiridos de forma concreta.</p>
            </div>

            <div className="py-[2rem] flex flex-col items-center dark:text-black">
               <h2 className="text-center font-semibold dark:text-white">Qual é a importância da definição do negócio para um empreendimento?</h2>
               <div className="flex flex-col m-auto text-center gap-[3rem] py-[4rem] max-w-[100rem] px-[2.5rem]">
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto w-[100%]"><p className="text-center">Não é importante, o negócio pode ser ajustado com o tempo.</p></div>
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%]"><p className="text-center">A definição do negócio é responsabilidade apenas dos líderes da empresa, não afetando os demais colaboradores.</p></div>
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%]"><p className="text-center">Não é importante, o negócio pode ser ajustado com o tempo.</p></div>
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%]"><p className="text-center">Não é importante, o negócio pode ser ajustado com o tempo.</p></div>
               </div>
               <Button title="Corrigir" 
              onClick={Testando}
               />
            </div>
         </div>
 
    )
  };
}



