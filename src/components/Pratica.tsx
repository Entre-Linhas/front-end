import { Button } from "../components/Button"
import { Context } from "../contexts/Context";
import { useContext } from "react";
export default function Pratica() {
   const { atividades, incrementarProgressoAtividade, decrementarProgressoAtividade, avançarQuest } = useContext(Context);

   function verificarResposta(respostaSelecionada: string) {
      let respostaCorreta: string;

      const questao = atividades?.pratica?.idPratica;

  switch (questao) {
    case 1:
      respostaCorreta = 'A'; // escolha a resposta correta
      break;
    case 2:
      respostaCorreta = 'B';
      break;
    // Adicione os casos para outras questões

    default:
      respostaCorreta = ''; 
      break;
  }

  if (respostaSelecionada === respostaCorreta) {
    respostaCorretaSelecionada();
  } else {
    respostaIncorretaSelecionada();
  }
}
    
    function respostaCorretaSelecionada() {
      console.log('Resposta correta! Parabéns!');
      incrementarProgressoAtividade()
      avançarQuest();
    }

    function respostaIncorretaSelecionada() {
      console.log('Incorreto! Parabéns!');
    }

   return (
      <>


         <div className="py-[12rem] px-[1rem] max-w-[100rem] m-auto">
            <div className="m-auto flex flex-col gap-[1.5rem]">
               <h1 className="text-center text-[2.4rem] font-semibold">{atividades?.pratica?.tituloPag}</h1>
               <p className="text-center m-auto ">{atividades?.pratica?.subtitulo_pag}</p>
            </div>

            <div className="py-[2rem] flex flex-col items-center">
               <h2 className="text-center font-semibold">Qual é a importância da definição do negócio para um empreendimento?</h2>
               <div className="flex flex-col m-auto text-center gap-[3rem] py-[4rem] max-w-[100rem] px-[2.5rem]">
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('A')}><p className="text-center">{atividades?.pratica?.txt1}</p></div>
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('B')}><p className="text-center">{atividades?.pratica?.txt2}</p></div>
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('C')}><p className="text-center">{atividades?.pratica?.txt3}</p></div>
                  <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('D')}><p className="text-center">{atividades?.pratica?.txt4}</p></div>
               </div>
               
            </div>
         </div>

      </>
   )
}