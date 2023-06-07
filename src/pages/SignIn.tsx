import { CaretLeft, Envelope, Password } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const navigate = useNavigate();

    return (
        <>
        <div className="bg-[#E3E3E3] min-[1024px]:bg-custom-salmon">
            <div className="bg-[url('/public/SubArt.svg')] bg-no-repeat bg-bottom h-screen bg-white flex flex-col p-6 min-[220px]:bg-contain min-[280px]:bg-contain max-w-full min-[360px]:bg-auto 2xl:max-w-[64rem] sm:max-w-full min-[1024px]:max-w-[64rem] bg-none">
                <header className="w-full">
                    <button
                        className="flex items-center gap-1 min-[560px]:text-[1.2rem] min-[720px]:text-[1.4rem]"
                        onClick={() => navigate("/")}
                    >
                        <CaretLeft />
                        Voltar
                    </button>
                </header>

                <div className="flex flex-col items-center my-auto gap-[1rem]">
                    <span className="font-[Sacramento] text-custom-salmon text-[3.2rem] min-[360px]:text-[4.2rem] min-[560px]:text-[5.2rem] ">Entre Linhas</span>

                    <h4 className="text-[1.4rem] min-[300px]:text-[1.6rem] min-[360px]:text-[1.8rem] min-[560px]:text-[2.2rem]">Olá, boas vindas de volta =)</h4>
                    <span className="text-[1rem] min-[300px]:text-[1.2rem] min-[360px]:text-[1.4rem] min-[720px]:text-[1.5rem]">Estamos contente em vê-lo(a) novamente.</span>

                    <Input className="min-[220px]: w-full min-[720px]:max-w-[80%]" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31} />}/>
                    <Input className="min-[220px]: w-full min-[720px]:" placeholder="Senha" leftElement={<Password className="mr-2 text-zinc-300" weight="light" size={31} />}/>
                    <Button title="Entrar" typeStyle="custom" customClass="bg-custom-salmon px-5"/>
                </div>
                
            </div>
            </div>
        </>
    )
//max-w-md	max-width: 28rem; /* 448px */
// max-w-lg	max-width: 32rem; /* 512px */
// max-w-xl	max-width: 36rem; /* 576px */
// max-w-2xl	max-width: 42rem; /* 672px */
// max-w-3xl	max-width: 48rem; /* 768px */
// max-w-4xl	max-width: 56rem; /* 896px */
// max-w-5xl	max-width: 64rem; /* 1024px */
// max-w-6xl	max-width: 72rem; /* 1152px */
// max-w-7xl	max-width: 80rem; /* 1280px */
}
// bg-[url("/public/Banner2SignIn.svg")]