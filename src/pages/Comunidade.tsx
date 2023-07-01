import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
export default function Comunidade() {


    return (
        <>
            <Header />

            <div className="flex items-center py-[11rem] justify-center max-[1023px]:flex-col">

                <div className="flex flex-col gap-[5rem] px-[5rem]">
                    <h1 className="text-center font-semibold m-auto text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem]" title="Entre Linhas">Conheça o fórum
                        do <br /><span className="text-custom-salmon font-[Sacramento]"> Entre-Linhas</span></h1>

                    <p className="max-w-[73.5rem] text-[2.2rem] " role="texto">Você poderá se conectar com outros profissionais da costura e trocar ideias sobre suas experiências no ramo. Aqui, você encontrará uma rede de apoio que pode ajudá-lo(a) a superar os desafios do seu negócio e aprimorar suas habilidades na costura.</p>



                    <p className="max-w-[73.5rem] text-[2.2rem]" role="texto">
                        Além disso, nossa comunidade é um espaço para compartilhar dicas e técnicas de costura, divulgar seus produtos e serviços e participar de eventos e promoções exclusivas para membros.</p>

                    <button className="bg-[#62B8AF] px-[6rem] py-[1.5rem] text-white text-[1.8rem] rounded-[1rem]" role="botão">Clique aqui</button>
                </div>


                <img src="/Comunidade.svg" className="max-[1340px]:max-w-[60rem] max-[1170px]:max-w-[55rem] max-[1100px]:max-w-[48rem] max-[1023px]:max-w-[100%] max-[1023px]:m-auto " alt="Imagem da comunidade Entre-Linhas"
                role="imagem"/>


            </div>

            <Footer />

        </>
    )

}