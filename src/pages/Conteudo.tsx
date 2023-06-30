import Material from "../components/Material";
import { Header } from "../components/Header";
import Pratica from "../components/Pratica";
import { useNavigate } from 'react-router-dom';
import { DownloadSimple, IconProps } from "@phosphor-icons/react";
import { InstagramLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";
import { Context } from "../contexts/Context";
import { useContext } from "react";



export const Conteudo = () => {
    const { atividades } = useContext(Context);
    if (atividades?.progresso <= 9 || atividades?.progresso >= 12 && atividades?.progresso <= 20 || atividades?.progresso >= 23 && atividades?.progresso <= 31 || atividades?.progresso >= 34 && atividades?.progresso <= 42) {
    return (
        <>
            <Header /> 
        <Material title="title" />
        </>
    )
    } else if (atividades?.progresso > 9 && atividades?.progresso < 12 || atividades?.progresso > 20 && atividades?.progresso < 23 || atividades?.progresso > 31 && atividades?.progresso < 34|| atividades?.progresso > 42 && atividades?.progresso <= 45) 
    return (
        <>
            <Header /> 
        <Pratica />
        </>
    ) 

    return (
        <></>
    )

}