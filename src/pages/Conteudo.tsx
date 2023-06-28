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
    if (atividades?.progresso <= 5 || atividades?.progresso >= 8 && atividades?.progresso <= 10 || atividades?.progresso >= 13 && atividades?.progresso <= 15 || atividades?.progresso >= 18 && atividades?.progresso <= 20) {
    return (
        <>
            <Header /> 
        <Material title="title" />
        </>
    )
    } else if (atividades?.progresso > 5 && atividades?.progresso < 8 || atividades?.progresso > 10 && atividades?.progresso < 13 || atividades?.progresso > 15 && atividades?.progresso < 18|| atividades?.progresso > 20 && atividades?.progresso <= 22) 
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