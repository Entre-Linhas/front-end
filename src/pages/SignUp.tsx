import { CaretLeft, Envelope, Eye, EyeClosed, Key, SignIn, UserCircle, Tag, IdentificationCard, MapPin } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import React, { Component, useEffect, useState, HTMLInputTypeAttribute } from "react";
import { Linking } from "../components/Linking";


export class Sign extends Component {
    state = {
        step: 1,
        email: "",
        terms: false,
        password: "",
        username: "",
        surname: "",
        cpf: "",
        address: ""
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }

    handleChange = (input: "step" | "email" | "terms" | "password" | "username" | "surname" | "cpf" | "address") => (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ [input]: input === "terms" ? e.currentTarget.checked : e.target.value});
        console.log(input, input === "terms" ? e.currentTarget.checked : e.target.value)
    }

    render(): React.ReactNode {
        const { step, email, password, terms, username, surname, cpf, address } = this.state;
        const values = {email, password, terms, username, surname, cpf, address };

        switch(step) {
            case 1:
                return (
                    <>
                        <h1 className="text-zinc-400">Passo 1 de 3</h1>
                        <span className="text-center">Olá! Seja bem-vindo/a.<br />Vamos começar a se cadastrar.</span>
                        <Input type="email" placeholder="Email" onChange={this.handleChange("email")} value={values.email} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31}/>} />
                        <Input type="password" placeholder="Senha" onChange={this.handleChange("password")} value={values.password} leftElement={<Key className="mr-2 text-zinc-300" weight="light" size={31}/>} />

                        <div className="flex items-center gap-2">
                            <input type="checkbox" onChange={this.handleChange("terms")}/>
                            <label htmlFor="">Concordo com os <Linking title="Termos de uso" to="/terms-of-use" style={{color: "#FF6464"}}/></label>
                        </div>
                        <Button disabled={values.email?.length === 0 || values.password?.length === 0 || !values.terms} title="Continuar" icon={SignIn} onClick={(e) => this.nextStep()} />
                    </>
                );
            case 2: 
                return (
                    <>
                        <h1 className="text-zinc-400">Passo 2 de 3</h1>
                        <span>Falta pouco para completarmos =)</span>
                        <Input type="text" placeholder="Nome" onChange={this.handleChange("username")} value={values.username} leftElement={<UserCircle className="mr-2 text-zinc-300" weight="light" size={31}/>} />
                        <Input type="text" placeholder="Sobrenome" onChange={this.handleChange("surname")} value={values.surname} leftElement={<Tag className="mr-2 text-zinc-300" weight="light" size={31}/>} />
                        <Input type="text" placeholder="CPF" onChange={this.handleChange("cpf")} value={values.cpf} leftElement={<IdentificationCard className="mr-2 text-zinc-300" weight="light" size={31}/>} />

                        <Button disabled={values.username.length === 0 || values.username.length === 0 || values.cpf.length < 11} title="Continuar" icon={SignIn} onClick={(e) => this.nextStep()} />
                    </>
                );
            case 3: 
                return (
                    <>
                        <h1 className="text-zinc-400">Passo 3 de 3</h1>
                        <span>SignUp - 3/3</span>
                        <Input type="text" placeholder="Endereço" onChange={this.handleChange("address")} value={values.address} leftElement={<MapPin className="mr-2 text-zinc-300" weight="light" size={31}/>} />

                        <Button disabled={values.address.length === 0} title="Finalizar" icon={SignIn} onClick={(e) => {}} />
                    </>
                )
            default: 
            break;
        }
    }
}

export default function SignUp() {
    // const [email, setEmail] = useState<string>();
    // const [password, setPassword] = useState<string>();
    // const [terms, setTerms] = useState<boolean>(false);
    // const [steps, setSteps] = useState<number>(1);
    // const [showPassword, setShowPassord] = useState<boolean>(false);
    // const [typePassword, setTypePassword] = useState<"text" | "password">("password")
    const navigate = useNavigate();

    useEffect(() => {
        const abc = document.querySelector("html") 
        if(abc) {
            // abc.style.fontSize = "100%";
        }
    }, [])

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
        <div className="flex h-screen w-full bg-gray-100 text-[100% !important]">
            <div className="border solid h-screen bg-white flex flex-col p-6 min-[280px]:max-w-full min-[360px]:2xl:max-w-[64rem] sm:max-w-full min-[1024px]:max-w-[64rem]">
                <header className="w-full">
                    <button
                        className="flex items-center gap-1 min-[560px]:text-[1.2rem] min-[720px]:text-[1.4rem]"
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
        </div>
    )
}