import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Envelope, UserCircle, ChatText } from "@phosphor-icons/react";

export default function Contato () {
    const [email, setEmail] = useState<string>("");   

    const navigate = useNavigate();
return (

    <>  
        <Header />
        <div className="flex items-center py-[11rem] justify-center max-[1023px]:flex-col box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="m-auto">
            <h1 className="font-semibold text-center text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem]">Contato</h1>
            <p className="text-[2.4rem] text-justify max-[375px]:text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Dúvidas e sugestões? Envie-nos um e-mail explicando o assunto desejado e responderemos assim que possível.</p>
            <div className="flex flex-col gap-2 m-auto max-w-[80%]">
                <Input className="m-auto min-[220px]:w-full text-[2rem]" placeholder="Seu nome" onChange={(e: any) => setEmail(e.target.value)} leftElement={<UserCircle className="mr-2 text-zinc-300" weight="light" size={40} />}/>
                <Input className="m-auto min-[220px]:w-full min-[720px]:max-w-[80%] text-[2rem]" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={40} />}/>
                <Input className="m-auto min-[220px]:h-[23.1rem] min-[220px]:w-full min-[720px]:max-w-[80%] text-[2rem]" placeholder="Como podemos te ajudar?" onChange={(e: any) => setEmail(e.target.value)} leftElement={<ChatText className="mr-2 text-zinc-300" weight="light" size={40} />}/>
                <button className="m-auto text-center min-[220px]: w-full min-[720px]:max-w-[80%] bg-[#1E1E1E] text-white py-[1.5rem] px-[17.8rem] text-[2rem]">Enviar</button>
            </div>
        </div>
        <img src="/Contato.svg" className="max-[1340px]:max-w-[60rem] max-[1170px]:max-w-[55rem] max-[1100px]:max-w-[48rem] max-[1023px]:max-w-[100%] max-[1023px]:m-auto "/>

    </div>
        <Footer />
    </>
)
}