import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { InstagramLogo, LinkedinLogo, YoutubeLogo} from "@phosphor-icons/react";
export default function Ferramentas () {
    return (

        <>
            <Header />


            <div className="bg-[#F3F4F6]">

                {/* primeiro container */}

                    
                    
                    <div className="flex py-[11.5rem] justify-center max-[820px]:flex-col min-[820px]:px-[2rem] min-[820px]:gap-[2rem]">
                        <div className="self-center max-[660px]:w-[80%] max-w-[770px]">
                            <h1 className="max-w-[770px] font-semibold text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem]">Transforme seu negócio com as ferramentas do Entre-Linhas</h1>
                            <p className="max-w-[700px] text-[2.4rem] text-justify max-[375px]:text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Economize tempo e mantenha o controle dos seus pedidos. Simplifique tarefas demoradas e faça orçamentos em segundos.</p>
                         </div>
                        <div className="px-[1.5rem] max-w-[510px] flex flex-col py-[3rem] rounded-[3rem] shadow-md text-white max-[660px]:w-[80%] max-[1000px]:gap-[2.5rem] min-[820px]:py-[10rem] max-[820px]:m-auto min-[1000px]:gap-[7.5rem] min-[1000px]:min-h-[61.2rem] bg-[#62B8AF]">
                            <h3 className="text-[2.8rem] text-center font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[2.8rem]">Aproveite todo o poder do Entre-Linhas!</h3>
                            <p className="text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.2rem] min-[500px]:text-[2.4rem]">Apenas R$ 36,00 por mês!</p>
                            <div className="m-auto">
                            <Button title="Costure seu futuro!"/>
                            </div>
                            {/* <button className="py-[1rem] px-[1rem] m-auto rounded-[3rem] bg-custom-salmon text-[2.2rem] text-center font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.0rem] min-[500px]:text-[2.2rem] min-[1000px]:py-[3.4rem] min-[1000px]:px-[8rem]">Costure seu futuro!</button>  */}
                          </div>
                    </div>

                {/* segundo container */}

                    {/* <div className="lg:flex justify-evenly"> */}
                    <div className="m-auto box-border w-[100%] px-[1.5rem] py-[10.2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1020px]:flex min-[1020px]:justify-evenly">
                
                        <div className="max-[1024px]:">
                            <div className="flex justify-center gap-[1.2rem] max-[400px]:py-[1rem]">
                                <img src="IconLine.svg"></img>
                                <h3 className="self-center text-[2.8rem] text-center font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[2.8rem]">Facilite a precificação</h3>
                            </div>
                            <div className="m-auto h-[0.7rem] bg-LineSmall-gradient max-w-[37rem] max-[400px]:max-w-[80%]"></div>
                            <p className="m-auto max-w-[46rem] text-[2.4rem] text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Tenha o orçamento dos seus pedidos em segundos! Uma ferramenta de precificação prática e intuitiva.</p>
                            <img src="FerramentaCell.svg" className="m-auto max-w-[95%] min-[1140px]:max-w-[100%]"/>
                        </div>
                        <div className="max-[1019px]:py-[10rem]">
                            <div className="flex justify-center gap-[1.2rem] max-[400px]:py-[1rem]">
                                <img src="IconLine.svg"></img>
                                <h3 className="self-center text-[2.8rem] text-center font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[2.8rem]">Facilite a precificação</h3>
                            </div>
                            <div className="m-auto h-[0.7rem] bg-LineSmall-gradient max-w-[37rem] max-[400px]:max-w-[80%]"></div>
                            <p className="m-auto max-w-[46rem] text-[2.4rem] text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Tenha o orçamento dos seus pedidos em segundos! Uma ferramenta de precificação prática e intuitiva.</p>
                            <img src="FerramentaCell.svg" className="m-auto max-w-[95%] min-[1140px]:max-w-[100%]"/>
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