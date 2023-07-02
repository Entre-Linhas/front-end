
import { useContext, useState } from "react";
import { Star, StarHalf } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { Context } from '../contexts/Context';
import { useNavigate } from "react-router-dom";

export const CardNiv = () => {
const { perfil, setNivelamento } = useContext(Context);
const navigate = useNavigate();

    function startUser() {
        setNivelamento?.(0)
        navigate("/Trilha")
    }

    function advancedUser() {
        setNivelamento?.(100)
        navigate("/Trilha")
    }


    return (

        <div className="border solid border-1 border-[#E3E3E3] bg-white rounded-[2rem] shadow-mg flex flex-col items-center text-center min-[1024px]:min-h-[48.7rem] min-[1024px]:max-w-[39.87rem]">
            <div className="py-[6rem] flex flex-col items-center gap-[5.2rem] px-[3.8rem]">
                <StarHalf size="50" className="text-custom-salmon" />
                <div>
                    <h2 className="font-bold text-[2.2rem] dark:text-gray-900">Vou começar meu negócio</h2>
                    <p className="text-center dark:text-gray-900">Aqui você começa a trilha desde o início, vendo todos os tópicos</p>
                </div>
                <button className="bg-custom-salmon text-white py-[1rem] px-[1rem] rounded-[0.5rem] text-[1.8rem] min-[320px]:px-[3rem] min-[360px]:px-[5rem] min-[425px]:px-[8rem] min-[530px]:px-[10rem]" onClick={startUser} title="iniciar a trilha">Iniciar Trilha</button>
            </div>
        </div>
    )
}