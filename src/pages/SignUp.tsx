import { CaretLeft, Envelope, IdentificationCard, Key, MapPin, SignIn, Tag, UserCircle } from "@phosphor-icons/react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Linking } from "../components/Linking";
import { Logo } from "../components/Logo";
import api from "../apiInstance";
import { Swiper, SwiperSlide, } from "swiper/react";
import { Swiper as classSwiper } from 'swiper';
import { Modal } from "../components/Modal";
import 'swiper/css';
import { Context } from "../contexts/Context";
import { Link } from "react-router-dom";


export default function SignUp() {
    const { auth, setAuth, perfil, setPerfil, setAtividades } = useContext(Context);
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [nome, setNome] = useState<string>("");
    const [sobrenome, setSobrenome] = useState<string>("");
    const [endereco, setEndereco] = useState<string>("");
    const [cpf, setCpf] = useState<string>("");
    const [terms, setTerms] = useState<boolean>(false);
    const [typePassword, setTypePassword] = useState<"text" | "password">("password");
    const [currentValue, setCurrentValue] = useState<{ src: string, alt: string }>({ src: "/ContentIm5.jpg", alt: "img5" });
    const navigate = useNavigate();
    const swiperRef = useRef<classSwiper>();
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState<any>({})

    // const swiper = useSwiper();

    function handleModal() {
        setShowModal(!showModal)
    }




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

    function logarAposRegistro() {
        console.log(formData)
        formData?.email && api
            .post("/usuarios/login", formData)
            .then((response) => {
                setAuth?.(true)
                if (response.data) {
                    setPerfil?.(response.data)
                    setAtividades && setAtividades(response.data.trilhas.atividades)
                    if (response.data.progresso === null) {
                        setTimeout(() => {
                            // window.location.reload()
                        }, 1000);
                        navigate("/Nivelamento")
                    } else {
                        navigate("/Trilha");
                       
                    }
                } else {
                    console.log("vazio");
                }
            })
            .catch((error) => {
            });
    }

    useEffect(() => logarAposRegistro(), [formData])

    function handleSubmit(e: any) {
        e.preventDefault()
        api
            .post("/usuarios/cadastro", {
                email,
                senha,
                nome,
                sobrenome,
                endereco,
                cpf,
                terms
            })
            .then((response) => {
                console.log(email, senha)
                const form = { email, senha }
                setFormData(form)
            })
            .catch((error) => {
                console.error(error);
                handleModal();
            });
    }

    const Testando = (e:any) => {
        // e.preventDefault();
        handleSubmit(e)
        
    }

    const changeStep = () => {
        swiperRef.current?.slideNext();
    }
    return (
        <>
            <div className="flex h-screen w-full text-[100% !important]">
                <div className="h-screen bg-white flex flex-col p-6 max-[1023px]:w-full sm:w-full min-[1024px]:w-[64rem] min-[1440px]:w-[100rem] min-[1770px]:w-[130rem] dark:bg-zinc-900">
                    <header className="w-full">
                        <button
                            className="flex items-center gap-1 min-[560px]:text-[1.2rem] min-[720px]:text-[1.4rem] dark:text-gra"
                            onClick={() => navigate(-1)}
                            title="ir para o inicio">
                            <CaretLeft />
                            Voltar
                        </button>
                    </header>

                    <div className="flex flex-col items-center my-auto gap-4 z-10">
                        <Logo />
                        <h1 className="text-zinc-400 text-2xl">Passo {(swiperRef.current?.activeIndex || 0) + 1} de {swiperRef.current?.slides.length || 0}</h1>
                        <Swiper
                            spaceBetween={5}
                            slidesPerView={1}
                            // allowSlideClick={false}
                            allowTouchMove={false}
                            onSwiper={(swi) => swiperRef.current = swi}
                        >
                            <SwiperSlide>
                                <form>
                                <span className="text-center text-2xl dark:text-gray-100">Olá! Seja bem-vindo/a.<br />Vamos começar a se cadastrar.</span>
                                <div className="flex gap-2 mt-2 flex-col items-center">
                                    <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} leftElement={<Envelope className="mr-2 text-zinc-300" weight="light" size={31} />} />
                                    <Input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} leftElement={<Key className="mr-2 text-zinc-300" weight="light" size={31} />} />

                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" onChange={() => setTerms(!terms)} title="aceitar os termos de uso" />
                                        <label htmlFor="" className="dark:text-gray-100" >Concordo com os <Linking title="Termos de uso" to="/terms-of-use" className="hover:border-none" style={{ color: "#FF6464" }} /></label>
                                    </div>
                                    <Button style={{ width: "100%", marginTop: 4, textAlign: "center", maxWidth: "55rem" }} disabled={email.length === 0 || senha.length === 0 || !terms || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)} titleBt="Continuar" icon={SignIn} onClick={(event) => {event.preventDefault();changeStep();}} title="ir para próxima etapa" />
                                </div>
                                </form>
                            </SwiperSlide>

                            <SwiperSlide>
                                <form> 
                                <span className="dark:text-gray-100">Falta pouco para completarmos =)</span>
                                <div className="flex gap-2 mt-2 flex-col items-center">
                                    <Input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]+/g, ""))} value={nome} leftElement={<UserCircle className="mr-2 text-zinc-300" weight="light" size={31} />} />
                                    <Input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]+/g, ""))} value={sobrenome} leftElement={<Tag className="mr-2 text-zinc-300" weight="light" size={31} />} />
                                    <Input type="number" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} value={cpf} leftElement={<IdentificationCard className="mr-2 text-zinc-300" weight="light" size={31} />} />
                                    
                                    <Button style={{ width: "100%", marginTop: 4, textAlign: "center", maxWidth: "55rem" }} disabled={nome.length === 0 || sobrenome.length === 0 || cpf.length < 11 || cpf?.length > 11} titleBt="Continuar" icon={SignIn}  onClick={(event) => {event.preventDefault();changeStep();}} title="ir para próxima etapa" />
                                </div>
                                </form>
                            </SwiperSlide>

                            <SwiperSlide>
                            <form> 
                                <span className="dark:text-gray-100">Ultimo etapa</span>
                                <div className="flex gap-2 mt-2 justify-center flex-col items-center">
                                    <Input type="text" placeholder="Endereço" onChange={(e) => setEndereco(e.target.value)} value={endereco} leftElement={<MapPin className="mr-2 text-zinc-300" weight="light" size={31} />} />

                                    <Button style={{ width: "100%", marginTop: 4, textAlign: "center", maxWidth: "55rem" }} disabled={endereco.length === 0} titleBt="Finalizar" icon={SignIn} onClick={Testando} title="concluir a etapa" />
                                </div>
                            </form> 
                            </SwiperSlide>

                        </Swiper>
                    </div>
                 </div>
                <div className="max-[1023px]:hidden flex items-center w-[100%] h-screen ">
                    <img src={currentValue.src} alt={currentValue.alt} className="w-[100%] h-screen object-cover min-[1024px]:object-center" aria-roledescription="Variações de imagem de costureiras(os)" />
                </div>

                <div className="z-10">
                    <Modal _showModal={showModal} _close={handleModal}  >
                        <div className="flex flex-col items-center">
                            <h1 className="text-center font-semibold text-[2.8rem] dark:text-gray-900 text-custom-salmon">Esse e-mail já foi costurado!</h1>
                            <p style={{ width: "-webkit-fill-available" }} className="py-20 text-[1.8rem] text-center max-[375px]:hidden">O e-mail que você inseriu já está cadastrado conosco. <br /><br /> Você pode tentar criar seu cadastro novamente com um e-mail diferente, ou realizar o login com este e-mail.</p>
                            <div className="flex gap-10 text-white py-10">
                                <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md text-[2rem]" onClick={() => window.location.reload()}>Tentar novamente</button>
                                <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md text-[2rem]"><Link to="/signin" title="Voltar para o login">Login</Link></button>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </>
    )
}