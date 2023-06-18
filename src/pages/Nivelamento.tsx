import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { InstagramLogo } from "@phosphor-icons/react";
import { Card } from "../components/Card"
import { IconProps } from "@phosphor-icons/react"
import { Star, StarHalf } from "@phosphor-icons/react";

export default function Nivelamento () {
return (

<div className="bg-white">

    <Header />
  
        
        <div className="py-[24.5rem] flex flex-col gap-[10rem] px-[2.5rem]">
        <div className="margin-auto flex items-center justify-center gap-[9rem] max-[1023px]:flex-col">
                <div className="border solid border-1 border-[#E3E3E3] bg-white rounded-[2rem] shadow-mg flex flex-col items-center text-center min-[1024px]:min-h-[48.7rem] min-[1024px]:max-w-[39.87rem]">
                    <div className="py-[6rem] flex flex-col items-center gap-[5.2rem] px-[3.8rem]">
                        <StarHalf size="50" className="text-custom-salmon"/>
                            <div>
                                <h2 className="font-bold text-[2.2rem]">Vou começar meu negócio</h2>
                                <p className="text-center">Aqui você começa a trilha desde o início, vendo todos os tópicos</p>
                            </div>
                       <button className="bg-custom-salmon text-white py-[1rem] px-[1rem] rounded-[0.5rem] text-[1.8rem] min-[320px]:px-[3rem] min-[360px]:px-[5rem] min-[425px]:px-[8rem] min-[530px]:px-[10rem]">Iniciar Trilha</button>
                    </div>
                </div>
                <div className="border solid border-1 border-[#E3E3E3] bg-white rounded-[2rem] shadow-mg flex flex-col items-center text-center min-[1024px]:min-h-[48.7rem] min-[1024px]:max-w-[39.87rem]">
                    <div className="py-[6rem] flex flex-col items-center gap-[5.2rem] px-[3.8rem]">
                        <Star size="50" className="text-custom-salmon"/>
                            <div>
                                <h2 className="font-bold text-[2.2rem]">Já tenho meu negócio</h2>
                                <p className="text-center">Aqui você faz um teste para pular o conteúdo que você já sabe</p>
                            </div>
                       <button className="bg-custom-salmon text-white py-[1rem] px-[1rem] rounded-[0.5rem] text-[1.8rem] min-[320px]:px-[3rem] min-[360px]:px-[5rem] min-[425px]:px-[8rem] min-[530px]:px-[10rem]">Iniciar Trilha</button>
                    </div>
                </div>
        </div>
            <div className="mx-0 text-center text-[2.2rem] underline text-[#525151]">Entenda mais sobre o teste de nivelamento e por onde começar.</div>
        </div>
   
</div>
 
)
}