import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Linking } from '../components/Linking';
import { Footer } from "../components/Footer";
import { Accordion } from "../components/Accordion";

export default function Precificacao() {
    return( 
        <>
            <Header />
            {/* espaço da header */}
               <div className="py-[10rem]">
                    {/* container */}
                    <div className="container mx-auto">
                            {/* layout de grade com três linhas e fluxo de coluna, com um espaçamento de 4 unidades  */}
                        <div className="grid grid-row-3 grid-flow-col gap-4">
                            {/* row-span  é linha vertical, e aqui ocupa 3, com sombra e borda aredondada*/}
                            <div className="row-span-3 h-48 w-96 shadow-lg rounded-lg">
                                {/* margin-left */}
                                <h1 className="m-2"><b>Ferramentas</b></h1>
                                <div className="ml-4 ">
                                    <nav>
                                        <ul>
                                            <li>Precificação</li>
                                            <li>Gerenciamento de pedidos</li>
                                            <li>Fornecedores</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="ml-20">
                                    <h3 className=""><b>Precificação</b></h3>
                                    <p>Adicione os itens usados no seu produto e calcule.</p>

                                    <div className="bg-white shadow-lg rounded-lg" >
                                        <div className="m-12 mt-5">
                                            <div className="">
                                                {/* aqui o usuario tem que digitar */}
                                                <p> <b>Nome do produto:</b> Bolsa de mão</p>
                                                <br></br>
                                            </div>

                                            <div>
                                                <h3><b>Materias usados</b></h3>
                                                {/* accordion */}
                                                    <Accordion/>
                                            </div>
                                            <div className="mt-2 mb-5">
                                                <button className="bg-[#62B8AF] w-full text-white py-5 rounded-0.5rem">+ Novo item</button>
                                            </div>
                                            <div className="mt-2 mb-5">
                                                <button className="bg-[#62B8AF] w-full text-white py-5 rounded-0.5rem">Calcular</button>
                                            </div>
                                        </div>
                                    </div>
                            </div>

                        </div>
                        
                    </div>

               </div>
            <Footer />
        </>
   
        
    )
}