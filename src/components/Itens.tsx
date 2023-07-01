import { Acordes } from "../components/Acordes";
import { CaretDown, X, Plus, Coins } from "@phosphor-icons/react";
import { useState } from "react";
 

export const Itens = () => {

    const [display, setDisplay] = useState(false);
     

    const handleDisplay = () => {
        setDisplay(!display)
    }

    return (
        <>
            <div className="w-full border solid border-[#CCCCCC] flex flex-col rounded-md shadow-lg">
                <div className="flex flex-wrap items-center justify-between px-5 py-3  ">
                    <span className="font-bold px-3">Nome do material</span>
                    <span className="text-[#62B8AF] font-bold">Valor</span>
                    <div className="flex">
                        <CaretDown size={24} weight="thin" onClick={handleDisplay} />
                        <X size={24} weight="thin" />
                    </div>
                </div>

                <div className={` m-auto w-[90%] flex flex-col gap-5 py-5 ${display ? "block" : "hidden"}`}>
                    <div className="flex  border solid border-[#CCCCCC] items-center gap-3 py-3 px-3 rounded-md">
                        <Plus size={32} weight="thin" />
                        <span>CM total</span>
                    </div>
                    <div className="flex border solid border-[#CCCCCC] items-center gap-3 py-3 px-3 rounded-md" >
                        <Coins size={32} weight="thin" />
                        <span>CM utilizado</span>
                    </div>

                    <div className="flex border solid border-[#CCCCCC] items-center gap-3 py-3 px-3 rounded-md">
                        <Coins size={32} weight="thin" />
                        <span>Preço pago pela linha</span>
                    </div>
                </div>



               
            </div>
        </>
    )
}