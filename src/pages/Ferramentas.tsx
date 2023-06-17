import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { InstagramLogo, LinkedinLogo, YoutubeLogo} from "@phosphor-icons/react";
export default function Ferramentas () {
    return (

        <>
            <Header />


            <div className="bg-[#F3F4F6] py-[11rem]">

                {/* primeiro container */}

                    
                    
                    <div className="flex justify-center max-[820px]:flex-col min-[820px]:px-[2rem] min-[820px]:gap-[2rem]">
                        <div className="flex flex-col items-center max-[660px]:w-[80%] max-w-[1100px] gap-[5rem]">
                            <h1 className="text-center font-semibold text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem]">Transforme seu negócio com as ferramentas do Entre-Linhas</h1>
                            <p className="text-center max-w-[1100px] text-[2.4rem] max-[375px]:text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Nossas ferramentas são desenvolvidas totalmente com base em você e em seu negócio. Tarefas que levariam um tempo valioso, podem ser feitas em poucos segundos com o auxilio de nossas ferramentas. Nunca se perca o controle dos seus pedidos, e poupe tempo para orçamentar um pedido.</p>
                            <Button title="Comece a costurar o seu futuro"/>
                         </div>
                       
                    </div>
                    <img src="/ArtFerramenta.svg" className="m-auto max-w-[100%]"/>

              

                    {/* <div className="lg:flex justify-evenly"> */}
                    <div className="flex flex-col m-auto box-border w-[100%] px-[1.5rem] py-[10.2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1020px]:flex min-[1020px]:justify-evenly">
                
                    <div className="flex">
                        
                           <div className="text-justify self-center">
                                <h3 className="self-center text-[2.8rem] font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[3.8rem]">Esquecendo a data para entregar uma encomenda? Gerencie seus pedidos aqui também</h3>
                                <p className="max-w-[50rem] text-[2.4rem] max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Já pensou em poder gerenciar seus pedidos facilmente? Com a nossa ferramenta de gerenciamento você pode. Controle valores, produtos e status em um só lugar.</p>
                            </div>
                            <img src="SalmonPhone.svg" className="m-auto max-w-[95%] min-[1140px]:max-w-[100%]"/>
                        </div>

                        <div className="flex">
                        <img src="YellowPhone.svg" className="m-auto max-w-[95%] min-[1140px]:max-w-[100%]"/>
                           <div className="text-justify self-center">
                                <h3 className="self-center text-[2.8rem] font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[3.8rem]">Esquecendo a data para entregar uma encomenda? Gerencie seus pedidos aqui também</h3>
                                <p className="max-w-[50rem] text-[2.4rem] max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Já pensou em poder gerenciar seus pedidos facilmente? Com a nossa ferramenta de gerenciamento você pode. Controle valores, produtos e status em um só lugar.</p>
                            </div>
                        </div>

                    </div>

                {/* terceiro container */}
              
                <div className="m-auto box-border w-[100%] px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1024px]:flex">

                        <div className="flex flex-col gap-[5rem] items-center">
                            <h2 className="text-[3.6rem] font-bold text-center">Suas maiores aliadas no dia a dia</h2>
                            <p className="text-[2.2rem] max-w-[77rem] max-[500px]:text-center min-[500px]:px-[5rem]">Nossas ferramentas são desenvolvidas totalmente com base em você e em seu negócio. Tarefas que levariam um tempo valioso, podem ser feitas em poucos segundos com o auxilio de nossas ferramentas. Nunca se perca o controle dos seus pedidos, e poupe tempo para orçamentar um pedido.</p>
                            <div className="flex justify-center m-auto text-white gap-[1rem]">
                                <button className="rounded-[2rem] bg-custom-salmon max-[320px]:py-[1rem] max-[320px]:px-[1rem] max-[360px]:py-[2rem] px-[2rem] max-[425px]:py-[3rem] max-[425px]:px-[3rem] text-[2.2rem]">Costure seu futuro!</button>
                                <button className="rounded-[2rem] text-custom-salmon bg-white border solid border-custom-salmon max-[320px]:py-[1rem] max-[320px]:px-[1rem] max-[360px]:py-[2rem] px-[2rem] max-[425px]:py-[3rem] max-[425px]:px-[3rem] min-[425px]:py-[3rem] min-[425px]:px-[3rem] text-[2.2rem]">Fale conosco</button>
                            </div>
                        </div>
                        <img src="FerramentaArt2.svg" className="py-[10rem] m-auto max-w-[95%] min-[1140px]:max-w-[100%]"/>
                    </div>

                    <Footer />

            </div>
        </>

    )
}