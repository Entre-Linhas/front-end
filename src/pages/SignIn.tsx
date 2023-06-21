import { CaretLeft, Envelope, Key, Password } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    var [currentValue, setCurrentValue] = useState<string>("/ContentIm5.jpg");

    const navigate = useNavigate();

    const carouselValues: string[] = [
        "/ContentIm1.jpg",  
        "/ContentIm2.jpg",  
        "/ContentIm3.jpg",  
        "/ContentIm4.jpg",  
        "/ContentIm5.jpg"  
    ];
    let currentIndex: number = 0;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentValue(carouselValues[currentIndex]);
            currentIndex = (currentIndex + 1) % carouselValues.length;
        }, 7000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="flex">
                <div className="border solid h-screen bg-white flex flex-col p-6 max-[1023px]:w-full sm:w-full min-[1024px]:w-[64rem] min-[1440px]:w-[100rem] min-[1770px]:w-[130rem]">
                    <header className="w-full">
                        <button
                            className="flex items-center gap-1 min-[560px]:text-[1.2rem] min-[720px]:text-[1.4rem]"
                            onClick={() => navigate(-1)}
                        >
                            <CaretLeft />
                            Voltar
                        </button>
                    </header>

                    <div className="flex flex-col items-center my-auto gap-[1rem]">
                        <Logo />

                        <h4 className="text-[1.4rem] min-[300px]:text-[1.6rem] min-[360px]:text-[1.8rem] min-[560px]:text-[2.2rem]">Olá, boas vindas de volta =)</h4>
                        <span className="text-[1rem] min-[300px]:text-[1.2rem] min-[360px]:text-[1.4rem] min-[720px]:text-[1.5rem]">Estamos contente em vê-lo(a) novamente.</span>
                        <Input className="w-full" placeholder="Email" onChange={(e: any) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31} />} />
                        <Input className="w-full" placeholder="Senha" leftElement={<Key className="mr-2 text-zinc-300" weight="light" size={31} />} />
                        <Button title="Entrar" />
                    </div>
                </div>

                <div className="max-[1023px]:hidden flex items-center w-[100%] h-screen max-[1023px]:hidden">
                    <img src={currentValue} className="w-[100%] h-screen object-cover min-[1024px]:object-center" />
                </div>
            </div>
        </>
    );
}
