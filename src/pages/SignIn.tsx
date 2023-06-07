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
            <div className="max-w-md h-screen bg-white flex flex-col p-6">
                <header className="w-full">
                    <button
                        className="flex items-center gap-1"
                        onClick={() => navigate("/")}
                    >
                        <CaretLeft />
                        Voltar
                    </button>
                </header>

                <div className="flex flex-col items-center my-auto">
                    <span>Entre Linhas</span>

                    <h4>Olá, boas vindas de volta =)</h4>
                    <span>Estamos contente em ve-lo(a) novamente.</span>

                    <Input className="w-full" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31} />}/>
                    <Input className="w-full" placeholder="Senha" leftElement={<Password className="mr-2 text-zinc-300" weight="light" size={31} />}/>
                </div>
            </div>
        </>
    )
}