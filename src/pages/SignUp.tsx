import { CaretLeft, Envelope, IdentificationCard, Key, MapPin, SignIn, Tag, UserCircle } from "@phosphor-icons/react";
import React, { Component, useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Linking } from "../components/Linking";
import { Logo } from "../components/Logo";
import { Modal } from "../components/Modal";
import api from "../apiInstance";
import { Context } from "../contexts/Context";

 
 
export class Sign extends Component {
    state = {
        formData: {
            nome: "",
            sobrenome: "",
            email: "",
            senha: "",
            endereco: "",
            cpf: "",
            step: 1,
            terms: false
        }
    }

    nextStep = () => {
        const { formData } = this.state;
        this.setState({
            formData: {
                ...formData,
                step: formData.step + 1
            }
        })
    }

    handleChange = (input: keyof typeof Sign.prototype.state['formData']) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { formData } = this.state;
        const value = input === "terms" ? e.currentTarget.checked : e.target.value;

        this.setState({
            formData: {
                ...formData,
                [input]: value
            }
        });

        console.log(input, value);
    };

    handleSubmit = () => {
        const { formData } = this.state;
        // const { handleSubmit2 } = useContext(Context);
        // handleSubmit2(formData);
    }

    render(): React.ReactNode {
        const { formData } = this.state;

        switch (formData.step) {
            case 1:
                return (
                    <>
                        <h1 className="text-zinc-400">Passo 1 de 3</h1>
                        <span className="text-center dark:text-gray-100">Olá! Seja bem-vindo/a.<br />Vamos começar a se cadastrar.</span>

                        <Input type="email" placeholder="Email" onChange={this.handleChange("email")} value={formData.email} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31} />} />
                        <Input type="password" placeholder="Senha" onChange={this.handleChange("senha")} value={formData.senha} leftElement={<Key className="mr-2 text-zinc-300" weight="light" size={31} />} />

                        <div className="flex items-center gap-2">
                            <input type="checkbox" onChange={this.handleChange("terms")} />
                            <label htmlFor="" className="dark:text-gray-100">Concordo com os <Linking title="Termos de uso" to="/terms-of-use" style={{ color: "#FF6464" }} /></label>
                        </div>
                        <Button disabled={formData.email?.length === 0 || formData.senha?.length === 0 || !formData.terms} title="Continuar" icon={SignIn} onClick={this.nextStep} />
                    </>
                );
            case 2:
                return (
                    <>
                        <h1 className="text-zinc-400">Passo 2 de 3</h1>
                        <span className="dark:text-gray-100">Falta pouco para completarmos =)</span>
                        <Input type="text" placeholder="Nome" onChange={this.handleChange("nome")} value={formData.nome} leftElement={<UserCircle className="mr-2 text-zinc-300" weight="light" size={31} />} />
                        <Input type="text" placeholder="Sobrenome" onChange={this.handleChange("sobrenome")} value={formData.sobrenome} leftElement={<Tag className="mr-2 text-zinc-300" weight="light" size={31} />} />
                        <Input type="text" placeholder="CPF" onChange={this.handleChange("cpf")} value={formData.cpf} leftElement={<IdentificationCard className="mr-2 text-zinc-300" weight="light" size={31} />} />

                        <Button disabled={formData.nome.length === 0 || formData.nome.length === 0 || formData.cpf.length < 11} title="Continuar" icon={SignIn} onClick={this.nextStep} />
                    </>
                );
            case 3:
                return (
                    <>
                        <h1 className="text-zinc-400">Passo 3 de 3</h1>
                        <span className="dark:text-gray-100">SignUp - 3/3</span>
                        <Input type="text" placeholder="Endereço" onChange={this.handleChange("endereco")} value={formData.endereco} leftElement={<MapPin className="mr-2 text-zinc-300" weight="light" size={31} />} />

                        <Button disabled={formData.endereco.length === 0} title="Finalizar" icon={SignIn} onClick={this.handleSubmit} />
                    </>
                )
            default:
                break;
        }
    }
}

export default function SignUp() {
    const [steps, setSteps] = useState<number>(1);
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [terms, setTerms] = useState<boolean>(false);
    const [showPassword, setShowPassord] = useState<boolean>(false);
    const [typePassword, setTypePassword] = useState<"text" | "password">("password");
    const [currentValue, setCurrentValue] = useState<{ src: string, alt: string }>({ src: "/ContentIm5.jpg", alt: "img5" });

    const navigate = useNavigate();


    useEffect(() => {
        const carouselValues: { src: string, alt: string }[] = [
            {
                src: "/ContentIm1.jpg",
                alt: "img5"
            },
            {
                src: "/ContentIm2.jpg",
                alt: "img5"
            },
            {
                src: "/ContentIm3.jpg",
                alt: "img5"
            },
            {
                src: "/ContentIm4.jpg",
                alt: "img5"
            },
            {
                src: "/ContentIm5.jpg",
                alt: "img5"
            }
        ];

        let currentIndex: number = 0;

        const intervalId = setInterval(() => {
            currentIndex = (currentIndex + 1) % carouselValues.length;
            setCurrentValue(carouselValues[currentIndex]);
        }, 7000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    // function handlePassword() {
    //     setShowPassord(!showPassword);
    //     setTypePassword(showPassword ? "password" : "text");
    // }

    // function handleStepsPages () {
    //     switch(steps) {
    //         case 1: 
    //             <>
    //                 <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31}/>} />
    //                 <Input type={typePassword} placeholder="Senha" onChange={(p) => {setPassword(p.target.value)}} leftElement={<Key className="mr-2 text-zinc-300" weight="light" size={31}/>} rightElement={<button onClick={handlePassword}>{showPassword ? <EyeClosed className="mr-2 text-zinc-300" weight="light" size={31}/> : <Eye className="mr-2 text-zinc-300" weight="light" size={31}/>}</button>} />

    //                 <div className="flex items-center gap-2">
    //                     <input type="checkbox" onClick={() => setTerms(!terms)} />
    //                     <label htmlFor="">Concordo com os <Linking title="Termos de uso" to="/terms-of-use" style={{color: "#FF6464"}}/></label>
    //                 </div>
    //                 <Button disabled={email?.length === 0 || password?.length === 0 || !terms} title="Continuar" icon={SignIn}  />
    //             </>
    //             break;
    //         default: 
    //             break;
    //     }
    // }





    return (
        <div className="flex h-screen w-full text-[100% !important]">
            <div className="h-screen bg-white flex flex-col p-6 max-[1023px]:w-full sm:w-full min-[1024px]:w-[64rem] min-[1440px]:w-[100rem] min-[1770px]:w-[130rem] dark:bg-zinc-900">
                <header className="w-full">
                    <button
                        className="flex items-center gap-1 min-[560px]:text-[1.2rem] min-[720px]:text-[1.4rem] dark:text-gra"
                        onClick={() => navigate(-1)}
                    >
                        <CaretLeft />
                        Voltar
                    </button>
                </header>

                <div className="flex flex-col items-center my-auto gap-4">
                    <Logo />
                    <Sign />
                </div>
            </div>
            <div className="max-[1023px]:hidden flex items-center w-[100%] h-screen ">
                <img src={currentValue.src} alt={currentValue.alt} className="w-[100%] h-screen object-cover min-[1024px]:object-center" />
            </div>
        </div>
    )
}