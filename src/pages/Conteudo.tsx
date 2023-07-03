import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import Material from "../components/Material";
import Pratica from "../components/Pratica";
import { Context } from "../contexts/Context";
import { useNavigate } from "react-router-dom";

// 2 formas de solução, 1º editar o perfil apenas dessa pagina, atraves do setPerfil sem usar a function setAtividade, liberando os exercicios 2º tornando os dados do perfil uma variavel e trocandos todas as variaveis, assim seta na variavel do mesmo jeito como na primeira solução, ver se funciona na primeira e assim por diante se der certo

export const Conteudo = () => {
    const { setPerfil, setAtividades, atividades, perfil } = useContext(Context);
    /* const progresso = atividades?.progresso; */
/*     console.log("CONTEUDO 1", atividades?.progresso)
    

    console.log("CONTEUDO 3", perfil.progresso) */
// para setar o progresso para essa pagina funcionar normalmente atraves do link independente do progresso do perfil
/* useEffect(() => {
switch (atividades?.progresso) {
  case 1:
    const novoPerfil1 = {
      ...perfil,
      progresso: 1
    };
    console.log("CONTEUDO 2", novoPerfil1)
    setPerfil?.(novoPerfil1);
    break;
  case 10:
    const novoPerfil2 = {
      ...perfil,
      progresso: 2
    };
    setPerfil?.(novoPerfil2);
    break;
  case 19:
    const novoPerfil3 = {
      ...perfil,
      progresso: 3
    };
    setPerfil?.(novoPerfil3);
    break;
  case 28:
    const novoPerfil4 = {
      ...perfil,
      progresso: 4
    };
    setPerfil?.(novoPerfil4);
    break;
  case 37:
    const novoPerfil5 = {
      ...perfil,
      progresso: 5
    };
    setPerfil?.(novoPerfil5);
    break;
  case 48:
    const novoPerfil6 = {
      ...perfil,
      progresso: 6
    };
    setPerfil?.(novoPerfil6);
    break;
  case 55:
    const novoPerfil7 = {
      ...perfil,
      progresso: 7
    };
    setPerfil?.(novoPerfil7);
    break;
  case 64:
    const novoPerfil8 = {
      ...perfil,
      progresso: 8
    };
    setPerfil?.(novoPerfil8);
    break;
  case 73:
    const novoPerfil9 = {
      ...perfil,
      progresso: 9
    };
    setPerfil?.(novoPerfil9);
    break;
  case 82:
    const novoPerfil10 = {
      ...perfil,
      progresso: 10
    };
    setPerfil?.(novoPerfil10);
    break;
  case 91:
    const novoPerfil11 = {
      ...perfil,
      progresso: 11
    };
    setPerfil?.(novoPerfil11);
    break;
  case 100:
    const novoPerfil12 = {
      ...perfil,
      progresso: 12
    };
    setPerfil?.(novoPerfil12);
    break;
  case 109:
    const novoPerfil13 = {
      ...perfil,
      progresso: 13
    };
    setPerfil?.(novoPerfil13);
    break;
  case 118:
    const novoPerfil14 = {
      ...perfil,
      progresso: 14
    };
    setPerfil?.(novoPerfil14);
    break;
  case 127:
    const novoPerfil15 = {
      ...perfil,
      progresso: 15
    };
    setPerfil?.(novoPerfil15);
    break;
  case 136:
    const novoPerfil16 = {
      ...perfil,
      progresso: 16
    };
    setPerfil?.(novoPerfil16);
    break;
  default:
    break;
}
}, [atividades?.progresso]); */


  const navigate = useNavigate();

    const progresso = atividades?.progresso;
    const [exerciciosP1T1, setExerciciosP1T1] = useState(false);
    const [exerciciosP1T2, setExerciciosP1T2] = useState(false);
    const [exerciciosP1T3, setExerciciosP1T3] = useState(false);
    const [exerciciosP1T4, setExerciciosP1T4] = useState(false);
    const [exerciciosP2T1, setExerciciosP2T1] = useState(false);
    const [exerciciosP2T2, setExerciciosP2T2] = useState(false);
    const [exerciciosP2T3, setExerciciosP2T3] = useState(false);
    const [exerciciosP2T4, setExerciciosP2T4] = useState(false);
    const [exerciciosP3T1, setExerciciosP3T1] = useState(false);
    const [exerciciosP3T2, setExerciciosP3T2] = useState(false);
    const [exerciciosP3T3, setExerciciosP3T3] = useState(false);
    const [exerciciosP3T4, setExerciciosP3T4] = useState(false);
    const [exerciciosP4T1, setExerciciosP4T1] = useState(false);
    const [exerciciosP4T2, setExerciciosP4T2] = useState(false);
    const [exerciciosP4T3, setExerciciosP4T3] = useState(false);
    console.log("CONTEUDO", perfil)

    useEffect(() => {
      // controla os exercicios, para não aparecer os mesmos, e assim poder atraves de 2 definir apenas correto para o necessario, sendo os dois correto como se fosse 1
        if (atividades?.pratica?.idPratica === 3 || perfil.progresso >= 2 && exerciciosP1T1 != true) {
          setExerciciosP1T1(true);
          /* navigate("/Trilha") */
          /* navigate = useContext(Context); */
        }
        if (atividades?.pratica?.idPratica === 5 || perfil.progresso >= 4 && exerciciosP1T2 != true) {
          setExerciciosP1T2(true);
        }
        if (atividades?.pratica?.idPratica === 7 || perfil.progresso >= 6 && exerciciosP1T3 != true) {
          setExerciciosP1T3(true);
        }
        if (atividades?.pratica?.idPratica === 9 || perfil.progresso >= 8 && exerciciosP1T4 != true) {
          setExerciciosP1T4(true);
        }
        if (atividades?.pratica?.idPratica === 11 || perfil.progresso >= 10 && exerciciosP2T1 != true) {
          setExerciciosP2T1(true);
        }
        if (atividades?.pratica?.idPratica === 13 || perfil.progresso >= 12 && exerciciosP2T2 != true) {
          setExerciciosP2T2(true);
        }
        if (atividades?.pratica?.idPratica === 15 || perfil.progresso >= 14 && exerciciosP2T3 != true) {
          setExerciciosP2T3(true);
        }
        if (atividades?.pratica?.idPratica === 17 || perfil.progresso >= 16 && exerciciosP2T4 != true) {
          setExerciciosP2T4(true);
        }
        if (atividades?.pratica?.idPratica === 19 || perfil.progresso >= 18 && exerciciosP3T1 != true) {
          setExerciciosP3T1(true);
        }
        if (atividades?.pratica?.idPratica === 21 || perfil.progresso >= 20 && exerciciosP3T2 != true) {
          setExerciciosP3T2(true);
        }
        if (atividades?.pratica?.idPratica === 23 || perfil.progresso >= 22 && exerciciosP3T3 != true) {
          setExerciciosP3T3(true);
        }
        if (atividades?.pratica?.idPratica === 25 || perfil.progresso >= 24 && exerciciosP3T4 != true) {
          setExerciciosP3T4(true);
        }
        if (atividades?.pratica?.idPratica === 27 || perfil.progresso >= 26 && exerciciosP4T1 != true) {
          setExerciciosP4T1(true);
        }
        if (atividades?.pratica?.idPratica === 29 || perfil.progresso >= 28 && exerciciosP4T2 != true) {
          setExerciciosP4T2(true);
        }
        if (atividades?.pratica?.idPratica === 31 || perfil.progresso >= 30 && exerciciosP4T3 != true) {
          setExerciciosP4T3(true);
        }
      }, [atividades?.pratica?.idPratica, perfil.progresso]);
      
      
// defini quando irá aparecer os exercicios
    if (progresso > 0) {
        if ((!exerciciosP1T1 && progresso === 10) || (!exerciciosP1T2 && progresso === 19) || (!exerciciosP1T3 && progresso === 28) || (!exerciciosP1T4 && progresso === 37) || (!exerciciosP2T1 && progresso === 48) || (!exerciciosP2T2 && progresso === 55) || (!exerciciosP2T3 && progresso === 64) || (!exerciciosP2T4 && progresso === 73) || (!exerciciosP3T1 && progresso === 82) || (!exerciciosP3T2 && progresso === 91) || (!exerciciosP3T3 && progresso === 100) || (!exerciciosP3T4 && progresso === 109) || (!exerciciosP4T1 && progresso === 118) || (!exerciciosP4T2 && progresso === 127) || (!exerciciosP4T3 && progresso === 136)) {
            return (
                <>
                    <Header />
                 
                      <Pratica />
                   
                </>
            );
        }
        return (
            <>
                <Header />
                
                   <Material title="title" />
                 
            </>
        )
    }
    return (
        <></>
    )

}

/* export const Conteudo = () => {
    const { atividades } = useContext(Context);
    if (atividades?.progresso <= 9) || (atividades?.progresso >= 12 && atividades?.=progresso <= 20) || (atividades?.progresso >= 23 && atividades?.=progresso <= 31) || (atividades?.progresso >= 34 && atividades?.=progresso <= 42) {
    return (
        <>
            <Header /> 
        <Material title="title" />
        </>
    )
    } else if (atividades?.progresso > 9 && atividades?.=progresso < 12) || (atividades?.progresso > 20 && atividades?.=progresso < 23) || (atividades?.progresso > 31 && atividades?.=progresso < 3)4|| (atividades?.progresso > 42 && atividades?.=progresso <= 45) 
    return (
        <>
            <Header /> 
        <Pratica />
        </>
    ) 

    return (
        <></>
    )

} */