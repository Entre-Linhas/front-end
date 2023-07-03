import { Trophy } from "@phosphor-icons/react";
import { Conquista } from "../models/consquista";

interface ConquistasProps {

    
    conquista?: Conquista

}



export const Conquistas = ({conquista}: ConquistasProps) => {
    
    return (
        <>

            <div className="flex flex-col">

                <div className="flex gap-5 items-center py-5">
                    <div className="bg-[#E3E3E3] rounded-full py-2 px-2">
                        <Trophy size={32} weight="fill" className="text-[#FED130]" alt="troféu" />
                    </div>
                    <h2 className="dark:text-white">Concliu a etapa<span className="text-custom-salmon"> {conquista?.nome}</span></h2>
                </div>
                <span className="text-gray-600 min-[768px]:self-end dark:text-white">{conquista?.dataConquista.toLocaleDateString()}</span>
                <hr></hr>

            </div>

        </>
    )
}