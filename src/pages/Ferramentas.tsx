import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Ferramentas() {

    const Assinatura = useNavigate();


    return (

        <>
            <Header />
            <div className="py-[11rem]">
               
                <div className="flex justify-center max-[820px]:flex-col min-[820px]:px-[2rem] min-[820px]:gap-[2rem]">
                    <div className="flex flex-col items-center max-[660px]:w-[80%] max-w-[1100px] gap-[5rem] m-auto">
                        <h1 className="text-center font-semibold text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem] dark:text-white">Transforme seu negócio com as ferramentas do Entre-Linhas</h1>
                        <p className="text-center max-w-[1100px] text-[2.4rem] max-[375px]:text-center max-[660px]:py-[5rem] min-[660px]:py-[2rem]">Nossas ferramentas são desenvolvidas totalmente com base em você e em seu negócio. Tarefas que levariam um tempo valioso, podem ser feitas em poucos segundos com o auxilio de nossas ferramentas. Nunca se perca o controle dos seus pedidos, e poupe tempo para orçamentar um pedido.</p>

                        
                                <Button title="Comece a costurar o seu futuro" onClick={() => Assinatura('/pagamento')} />
                         
                    </div>

                </div>

                <img src="/ArtFerramenta.svg" className="m-auto max-w-[100%] max-[700px]:hidden" />

                <div className="flex flex-col m-auto box-border gap-[10rem] w-[100%] px-[1.5rem] py-[10.2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1020px]:justify-evenly">
                    <div className="flex max-[1024px]:flex-col min-[1024px]:gap-[10rem]">
                        <div className="text-justify self-center max-[1024px]:text-center">
                            <h3 className="self-center text-[2.8rem] font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[3.8rem] dark:text-white">Esquecendo a data para entregar uma encomenda? Gerencie seus pedidos aqui também</h3>
                            <p className="max-w-[50rem] text-[2.4rem] max-[660px]:py-[5rem] min-[660px]:py-[2rem] max-[1024px]:m-auto">Já pensou em poder gerenciar seus pedidos facilmente? Com a nossa ferramenta de gerenciamento você pode. Controle valores, produtos e status em um só lugar.</p>
                        </div>
                        <div>
                            <img src="SalmonPhone.svg" className="m-auto max-[1024px]:max-w-[100%]" />
                        </div>
                    </div>

                    <div className="flex min-[1024px]:gap-[10rem] max-[1024px]:flex-col-reverse">
                        <div>
                            <img src="YellowPhone.svg" className="m-auto max-[1024px]:max-w-[100%]" />
                        </div>
                        <div className="text-justify self-center max-[1024px]:text-center">
                            <h3 className="self-center text-[2.8rem] font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[3.8rem] dark:text-white">Esquecendo a data para entregar uma encomenda? Gerencie seus pedidos aqui também</h3>
                            <p className="max-w-[50rem] text-[2.4rem] max-[660px]:py-[5rem] min-[660px]:py-[2rem] max-[1024px]:m-auto">Já pensou em poder gerenciar seus pedidos facilmente? Com a nossa ferramenta de gerenciamento você pode. Controle valores, produtos e status em um só lugar.</p>
                        </div>
                    </div>
                </div>

                {/* container pra compra */}
                <div className="py-[5rem] m-auto box-border w-[100%] px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
                    <div className="flex flex-col gap-[5rem] items-center">
                        <h2 className="text-[3.6rem] font-bold text-center dark:text-white">Confira nosso plano mensal e anual</h2>
                    </div>

                    <div className="flex py-[5rem] justify-center gap-[9.5rem] max-[1023px]:flex-col">
                        <div className="max-[1023px]:m-auto text-center bg-white rounded-[2rem] shadow-mg flex flex-col gap-[5rem] py-[7rem] px-[2.4rem] text-[2.2rem] max-w-[50rem] dark:bg-zinc-800 dark:border-zinc-700 dark:border-2">
                            <div>
                                <h3 className="font-bold dark:text-white">Plano Mensal</h3>
                                <p className="max-w-[35rem] m-auto dark:text-zinc-50">Acesso à ferramenta de precificação e gerenciamento por:</p>
                            </div>
                            <h2 className="font-bold text-[6.4rem] max-[400px]:text-[3.2rem] dark:text-white">R$ 36,00</h2>
                            <button className="bg-[#62B8AF] rounded-[1rem] text-white px-[9.5rem] py-[2.3rem] max-[400px]:px-[5.5rem] max-[400px]:py-[1.5]" onClick={() => Assinatura('/pagamento')}>Assine aqui</button>
                        </div>

                        <div className="max-[1023px]:m-auto text-center bg-white rounded-[2rem] shadow-mg flex flex-col gap-[5rem] py-[7rem] px-[2.4rem] text-[2.2rem] max-w-[50rem] dark:bg-zinc-800 dark:border-zinc-700 dark:border-2">
                            <div>
                                <h3 className="font-bold dark:text-white">Plano Mensal</h3>
                                <p className="max-w-[35rem] m-auto dark:text-zinc-50">Acesso à ferramenta de precificação e gerenciamento por:</p>
                            </div>
                            <h2 className="font-bold text-[6.4rem] max-[400px]:text-[3.2rem] dark:text-white">R$ 36,00</h2>
                            <button className=" bg-[#62B8AF] rounded-[1rem] text-white px-[9.5rem] py-[2.3rem] max-[400px]:px-[5.5rem] max-[400px]:py-[1.5]" onClick={() => Assinatura('/pagamento')}>Assine aqui</button>
                        </div>
                    </div>

                </div>

           
                <div className="m-auto box-border w-[100%] px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1024px]:flex">
                    <div className="flex flex-col gap-[5rem] items-center self-center">
                        <h2 className="text-[3.6rem] font-bold text-center dark:text-white">Suas maiores aliadas no dia a dia</h2>
                        <p className="text-[2.2rem] max-w-[77rem] max-[500px]:text-center min-[500px]:px-[5rem]">Nossas ferramentas são desenvolvidas totalmente com base em você e em seu negócio. Tarefas que levariam um tempo valioso, podem ser feitas em poucos segundos com o auxilio de nossas ferramentas. Nunca se perca o controle dos seus pedidos, e poupe tempo para orçamentar um pedido.</p>
                    </div>
                    <img src="FerramentaArt2.svg" className="py-[10rem] m-auto max-w-[95%] min-[1140px]:max-w-[100%]" />
                </div>
            </div>
            <Footer />
        </>

    )
}