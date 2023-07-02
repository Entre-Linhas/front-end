import { useNavigate } from "react-router-dom";
import { Context } from "../contexts/Context";
import { useContext } from "react";
export default function Pratica() {
  const { atividades, avançarQuest, perfil, setPerfil, atulizarPerfil } = useContext(Context);

  const navigate = useNavigate();

  function verificarResposta(respostaSelecionada: string) {
    let respostaCorreta: string;

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

    if (respostaSelecionada === respostaCorreta) {
      respostaCorretaSelecionada();
    } else {
      respostaIncorretaSelecionada();
    }
  }

  function respostaCorretaSelecionada() {
    console.log('Resposta correta! Parabéns!');
    const newPerfil = {
      ...perfil,
      progresso: perfil?.progresso + 1
    }
    setPerfil?.(newPerfil)
    avançarQuest();
    atulizarPerfil();
    console.log(perfil)
    console.log(perfil?.progresso)
    console.log(atividades?.pratica?.idPratica)
    if ((perfil?.progresso === 2 && atividades?.pratica?.idPratica === 3) ||
      (perfil?.progresso === 4 && atividades?.pratica?.idPratica === 5) ||
      (perfil?.progresso === 6 && atividades?.pratica?.idPratica === 7) ||
      (perfil?.progresso === 8 && atividades?.pratica?.idPratica === 9) ||
      (perfil?.progresso === 10 && atividades?.pratica?.idPratica === 11) ||
      (perfil?.progresso === 12 && atividades?.pratica?.idPratica === 13) ||
      (perfil?.progresso === 14 && atividades?.pratica?.idPratica === 15) ||
      (perfil?.progresso === 16 && atividades?.pratica?.idPratica === 17) ||
      (perfil?.progresso === 18 && atividades?.pratica?.idPratica === 19) ||
      (perfil?.progresso === 20 && atividades?.pratica?.idPratica === 21) ||
      (perfil?.progresso === 22 && atividades?.pratica?.idPratica === 23) ||
      (perfil?.progresso === 24 && atividades?.pratica?.idPratica === 25) ||
      (perfil?.progresso === 26 && atividades?.pratica?.idPratica === 27) ||
      (perfil?.progresso === 28 && atividades?.pratica?.idPratica === 29) ||
      (perfil?.progresso === 30 && atividades?.pratica?.idPratica === 31) ||
      (perfil?.progresso === 32 && atividades?.pratica?.idPratica === 33)) {
      navigate("/Trilhas")
    }
  }

  function respostaIncorretaSelecionada() {
    console.log('Incorreto! Tente novamente!');
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
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('A')} title="Resposta A" role="button"><p className="text-center">{atividades?.pratica?.txt1}</p></div>
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('B')} title="Resposta B" role="button"><p className="text-center">{atividades?.pratica?.txt2}</p></div>
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('C')} title="Resposta C" role="button"><p className="text-center">{atividades?.pratica?.txt3}</p></div>
            <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%] cursor-pointer dark:text-gray-900" onClick={() => verificarResposta('D')} title="Resposta D" role="button"><p className="text-center">{atividades?.pratica?.txt4}</p></div>
          </div>

        </div>
      </div>

    </>
  )
}