import { useContext, useState } from "react";
import { Star, StarHalf } from "@phosphor-icons/react";
import { Header } from "../components/Header";
import { Modal } from "../components/Modal";
import { Context } from '../contexts/Context';

export default function Nivelamento() {
    const { perfil } = useContext(Context);
    console.log(perfil);
    console.log(perfil?.usuario);
    console.log(perfil?.usuario?.nome);


    const [showModal, setShowModal] = useState(false);

    function handleModal() {
        setShowModal(!showModal)
    }
    return (
        <>
            <div>
                <Header />
                <div className="py-[24.5rem] flex flex-col gap-[10rem] px-[2.5rem]" >
                    <div className="margin-auto flex items-center justify-center gap-[9rem] max-[1023px]:flex-col" style={{ overflow: showModal ? "auto" : "hidden" }}>
                        <div className="border solid border-1 border-[#E3E3E3] bg-white rounded-[2rem] shadow-mg flex flex-col items-center text-center min-[1024px]:min-h-[48.7rem] min-[1024px]:max-w-[39.87rem]">
                            <div className="py-[6rem] flex flex-col items-center gap-[5.2rem] px-[3.8rem]">
                                <StarHalf size="50" className="text-custom-salmon" />
                                <div>
                                    <h2 className="font-bold text-[2.2rem]">Vou começar meu negócio</h2>
                                    <p className="text-center">Aqui você começa a trilha desde o início, vendo todos os tópicos</p>
                                </div>
                                <a href="./Trilha">
                                    <button className="bg-custom-salmon text-white py-[1rem] px-[1rem] rounded-[0.5rem] text-[1.8rem] min-[320px]:px-[3rem] min-[360px]:px-[5rem] min-[425px]:px-[8rem] min-[530px]:px-[10rem]">Iniciar Trilha</button>
                                </a>
                            </div>
                        </div>
                        <div className="border solid border-1 border-[#E3E3E3] bg-white rounded-[2rem] shadow-mg flex flex-col items-center text-center min-[1024px]:min-h-[48.7rem] min-[1024px]:max-w-[39.87rem]">
                            <div className="py-[6rem] flex flex-col items-center gap-[5.2rem] px-[3.8rem]">
                                <Star size="50" className="text-custom-salmon" />
                                <div>
                                    <h2 className="font-bold text-[2.2rem]">Já tenho meu negócio</h2>
                                    <p className="text-center">Aqui você faz um teste para pular o conteúdo que você já sabe</p>
                                </div>
                                <button className="bg-custom-salmon text-white py-[1rem] px-[1rem] rounded-[0.5rem] text-[1.8rem] min-[320px]:px-[3rem] min-[360px]:px-[5rem] min-[425px]:px-[8rem] min-[530px]:px-[10rem]">Iniciar Trilha</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleModal} className="mx-0 text-center text-[2.2rem] underline text-[#525151]">Entenda mais sobre o teste de nivelamento e por onde começar.</button>
                </div>
            </div>
            <Modal _showModal={showModal} _close={handleModal}>
                <div className="flex flex-col overflow-auto gap-8 mx-14 my-10">
                    <h2 className="text-custom-salmon font-semibold text-3xl text-center">Com dúvida em qual opção escolher?</h2>
                    <p className="">Se você pretende iniciar um negócio, a primeira opção foi feita para você. Ela irá te ensinar desde como identificar seu cliente até o que o seu produto tem de especial.<br /><br />Já se você tem um negócio, a segunda opção é a melhor. Você poderá escolher em que ponto da trilha irá iniciar seus estudos.</p>
                </div>
            </Modal>
        </>
    )
}