import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/Context";
import { useContext, useEffect, useState } from "react";
export default function Pratica() {
  const { atividades, avançarQuest, perfil, setPerfil, atualizarPerfil, setNomeModuloConquista, setShowModalConquista } = useContext(Context);
  const [respostaSelecionada, setRespostaSelecionada] = useState('')
  const [respostaCorretaQuestao, setRespostaCorretaQuestao] = useState('')


  const navigate = useNavigate();

  function defineRespostaCorreta() {
    let respostaCorreta = ''
    const questao = atividades?.pratica?.idPratica;

    switch (questao) {
      case 1:
        respostaCorreta = 'A';
        break;
      case 2:
        respostaCorreta = 'C';
        break;
      case 3:
        respostaCorreta = 'D';
        break;
      case 4:
        respostaCorreta = 'B';
        break;
      case 5:
        respostaCorreta = 'A';
        break;
      case 6:
        respostaCorreta = 'C';
        break;
      case 7:
        respostaCorreta = 'A';
        break;
      case 8:
        respostaCorreta = 'D';
        break;
      case 9:
        respostaCorreta = 'C';
        break;
      case 10:
        respostaCorreta = 'C';
        break;
      case 11:
        respostaCorreta = 'B';
        break;
      case 12:
        respostaCorreta = 'A';
        break;
      case 13:
        respostaCorreta = 'A';
        break;
      case 14:
        respostaCorreta = 'B';
        break;
      case 15:
        respostaCorreta = 'B';
        break;
      case 16:
        respostaCorreta = 'A';
        break;
        case 17:
        respostaCorreta = 'C';
        break;
      case 18:
        respostaCorreta = 'A';
        break;
      case 19:
        respostaCorreta = 'B';
        break;
      case 20:
        respostaCorreta = 'B';
        break;
      case 21:
        respostaCorreta = 'C';
        break;
      case 22:
        respostaCorreta = 'B';
        break;
      case 23:
        respostaCorreta = 'B';
        break;
      case 24:
        respostaCorreta = 'C';
        break;
      case 25:
        respostaCorreta = 'A';
        break;
      case 26:
        respostaCorreta = 'B';
        break;
      case 27:
        respostaCorreta = 'B';
        break;
      case 28:
        respostaCorreta = 'C';
        break;
      case 29:
        respostaCorreta = 'D';
        break;
      case 30:
        respostaCorreta = 'C';
        break;
      case 31:
        respostaCorreta = 'A';
        break;
      case 32:
        respostaCorreta = 'B';
        break;
      default:
        respostaCorreta = '?';
        break;
    }
    setRespostaCorretaQuestao(respostaCorreta)
  }

  useEffect(() => {
    setRespostaSelecionada('')
    defineRespostaCorreta()
  }, [atividades?.pratica?.idPratica])

  function classeCorAlternativa(reposta: string) {
    const objGreen = {
      backgroundColor: '#FFFFFF',
      color: '#4FA526',
      boxShadow: '0 0 8px 2px rgba(79, 165, 38)',
    }

    const objRed = {
      backgroundColor: '#FFFFFF',
      color: '#535353',
      boxShadow: '0 0 8px 2px rgba(183, 183, 183)',
    }
    if (!respostaSelecionada) return ''
    return respostaCorretaQuestao == reposta ? objGreen : objRed
  }
  

  function verificarResposta(respostaSelecionada: string) {
    let respostaCorreta: string = respostaCorretaQuestao;
    setRespostaSelecionada(respostaSelecionada)

    

    if (respostaSelecionada === respostaCorreta) {
      respostaCorretaSelecionada();
      const questao = atividades?.pratica?.idPratica;
      if (questao == 2 || questao == 4  || questao == 6 || questao == 8 || questao == 10 || questao == 12 || questao == 14 || questao == 16 || questao == 18 || questao == 20 || questao == 22 || questao == 24 || questao == 26 || questao == 28 || questao == 30 || questao == 32) {
        setShowModalConquista(true)
        navigate("/Trilha")
      }
    } else {
      respostaIncorretaSelecionada();
    }
  }
  console.log(perfil)

  function respostaCorretaSelecionada() {
    console.log('Resposta correta! Parabéns!');
    const newPerfil = {
      ...perfil,
      progresso: perfil?.progresso + 1
    }
    setPerfil?.(newPerfil)
    avançarQuest();
    atualizarPerfil(newPerfil);
    /* if ((newPerfil?.progresso === 2 && atividades?.pratica?.idPratica === 3) ||
      (newPerfil?.progresso === 4 && atividades?.pratica?.idPratica === 5) ||
      (newPerfil?.progresso === 6 && atividades?.pratica?.idPratica === 7) ||
      (newPerfil?.progresso === 8 && atividades?.pratica?.idPratica === 9) ||
      (newPerfil?.progresso === 10 && atividades?.pratica?.idPratica === 11) ||
      (newPerfil?.progresso === 12 && atividades?.pratica?.idPratica === 13) ||
      (newPerfil?.progresso === 14 && atividades?.pratica?.idPratica === 15) ||
      (newPerfil?.progresso === 16 && atividades?.pratica?.idPratica === 17) ||
      (newPerfil?.progresso === 18 && atividades?.pratica?.idPratica === 19) ||
      (newPerfil?.progresso === 20 && atividades?.pratica?.idPratica === 21) ||
      (newPerfil?.progresso === 22 && atividades?.pratica?.idPratica === 23) ||
      (newPerfil?.progresso === 24 && atividades?.pratica?.idPratica === 25) ||
      (newPerfil?.progresso === 26 && atividades?.pratica?.idPratica === 27) ||
      (newPerfil?.progresso === 28 && atividades?.pratica?.idPratica === 29) ||
      (newPerfil?.progresso === 30 && atividades?.pratica?.idPratica === 31) ||
      (newPerfil?.progresso === 32 && atividades?.pratica?.idPratica === 33)) {
    } */
  }

  function respostaIncorretaSelecionada() {
    console.log('Incorreto! Tente novamente!');
  }

console.log("Atividades", atividades);
  return (
    <>


      <div className="py-[12rem] px-[1rem] max-w-[100rem] m-auto">
        <div className="m-auto flex flex-col gap-[1.5rem]">
          <h1 className="text-center text-[2.4rem] font-semibold">{atividades?.pratica?.tituloPag}</h1>
          <p className="text-center m-auto ">{atividades?.pratica?.subtitulo_pag}</p>
        </div>

        <div className="py-[2rem] flex flex-col items-center">
          <h2 className="text-center font-semibold">{atividades?.pratica?.img}</h2>
          <div className="flex flex-col m-auto text-center gap-[3rem] py-[4rem] max-w-[100rem] px-[2.5rem]">
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto w-[100%] cursor-pointer dark:text-gray-900" style={{...classeCorAlternativa('A')}} onClick={() => verificarResposta('A')} title="Resposta A" role="button"><p className="text-center ">{atividades?.pratica?.txt1}</p></div>
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" style={{...classeCorAlternativa('B')}} onClick={() => verificarResposta('B')} title="Resposta B" role="button"><p className="text-center ">{atividades?.pratica?.txt2}</p></div>
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" style={{...classeCorAlternativa('C')}}  onClick={() => verificarResposta('C')} title="Resposta C" role="button"><p className="text-center ">{atividades?.pratica?.txt3}</p></div>
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" style={{...classeCorAlternativa('D')}} onClick={() => verificarResposta('D')} title="Resposta D" role="button"><p className="text-center ">{atividades?.pratica?.txt4}</p></div>
          </div>

        </div>
      </div>

    </>
  )
}