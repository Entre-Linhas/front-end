import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Envelope, UserCircle, ChatText } from "@phosphor-icons/react";



export default function Contato() {
    const [email, setEmail] = useState<string>("");

    const navigate = useNavigate();
    return (

        <>
            <Header />
            <div className="flex items-center h-[100dvh] justify-center max-[1023px]:flex-col box-border w-[100%] m-auto xl:max-w-[122rem] 2xl:max-w-[147.6rem]">


                <div className="m-auto">
                    <h1 className="font-semibold text-center text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem] dark:text-white">Contato</h1>
                    <p className="m-auto max-[1023px]:hidden text-[2.4rem] text-justify max-[375px]:text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem] px-[2rem]">Dúvidas e sugestões? Envie-nos um e-mail explicando o assunto desejado e responderemos assim que possível.</p>
                    <div className="flex flex-col gap-2 m-auto max-w-[80%]">
                        <p className="min-[1024px]:hidden text-[2.4rem] text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem] px-[2rem]">Dúvidas e sugestões? Envie-nos um e-mail explicando o assunto desejado e responderemos assim que possível.</p>
                        <div className="max-w-[100%] w-[100%] lg:m-auto flex flex-col justify-center items-center gap-3">
                            <Input placeholder="Seu nome" onChange={(e: any) => setEmail(e.target.value)} leftElement={<UserCircle className="mr-2 text-zinc-300" weight="light" size={40} />} />
                            <Input placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={40} />} />
                            <Input placeholder="Como podemos te ajudar?" onChange={(e: any) => setEmail(e.target.value)} leftElement={<ChatText className="mr-2 text-zinc-300 resize-y" weight="light" size={40} />} />
                            <button className="bg-[#62B8AF] px-[6rem] py-[1.5rem] text-white text-[1.8rem] rounded-[1rem] w-[100%] max-w-[55.2rem]">Enviar</button>
                        </div>
                    </div>
                </div>

                <img src="/Contato.svg" className="max-[1340px]:max-w-[50rem] max-[1170px]:max-w-[48rem] max-[1023px]:max-w-[100%] max-[1023px]:m-auto " alt="Imagem de contato" role="img" />

            </div>
            <Footer />
        </>
    )
}