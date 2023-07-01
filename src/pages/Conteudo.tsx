import { useContext, useEffect, useState } from "react";
import { Header } from "../components/Header";
import Material from "../components/Material";
import Pratica from "../components/Pratica";
import { Context } from "../contexts/Context";


export const Conteudo = () => {
    const { atividades, perfil } = useContext(Context);

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
    

    useEffect(() => {
        if (atividades?.pratica?.idPratica === 3 || perfil.progresso >= 2) {
          setExerciciosP1T1(true);
        }
        if (atividades?.pratica?.idPratica === 5 || perfil.progresso >= 4) {
          setExerciciosP1T2(true);
        }
        if (atividades?.pratica?.idPratica === 7 || perfil.progresso >= 6) {
          setExerciciosP1T3(true);
        }
        if (atividades?.pratica?.idPratica === 9 || perfil.progresso >= 8) {
          setExerciciosP1T4(true);
        }
        if (atividades?.pratica?.idPratica === 11 || perfil.progresso >= 10) {
          setExerciciosP2T1(true);
        }
        if (atividades?.pratica?.idPratica === 13 || perfil.progresso >= 12) {
          setExerciciosP2T2(true);
        }
        if (atividades?.pratica?.idPratica === 15 || perfil.progresso >= 14) {
          setExerciciosP2T3(true);
        }
        if (atividades?.pratica?.idPratica === 17 || perfil.progresso >= 16) {
          setExerciciosP2T4(true);
        }
        if (atividades?.pratica?.idPratica === 19 || perfil.progresso >= 18) {
          setExerciciosP3T1(true);
        }
        if (atividades?.pratica?.idPratica === 21 || perfil.progresso >= 20) {
          setExerciciosP3T2(true);
        }
        if (atividades?.pratica?.idPratica === 23 || perfil.progresso >= 22) {
          setExerciciosP3T3(true);
        }
        if (atividades?.pratica?.idPratica === 25 || perfil.progresso >= 24) {
          setExerciciosP3T4(true);
        }
        if (atividades?.pratica?.idPratica === 27 || perfil.progresso >= 26) {
          setExerciciosP4T1(true);
        }
        if (atividades?.pratica?.idPratica === 29 || perfil.progresso >= 28) {
          setExerciciosP4T2(true);
        }
        if (atividades?.pratica?.idPratica === 31 || perfil.progresso >= 30) {
          setExerciciosP4T3(true);
        }
      }, [atividades?.pratica?.idPratica, perfil.progresso]);
      

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