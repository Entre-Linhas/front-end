import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Linking } from '../components/Linking';
import { Footer } from "../components/Footer";
import { Acordes } from "../components/Acordes";

export default function Precificacao() {
    return( 
        <>
            <Header />
            {/* espaço da header */}
               <div className="py-[10rem]">
                    {/* container */}
                    <div className="container mx-auto">
                            {/* layout de grade com três linhas e fluxo de coluna, com um espaçamento de 4 unidades  */}
                        <div className="grid grid-rows-3 grid-flow-col gap-4">
                            {/* row-span  é linha vertical, e aqui ocupa 3, com sombra e borda aredondada*/}
                            <div className="row-span-3 h-48 w-96 shadow-lg rounded-lg">
                                {/* margin-left */}
                                <h1 className="m-2"><b>Ferramentas</b></h1>
                                <div className="ml-4 ">
                                    <nav>
                                        <ul>
                                            {/*Linking cria rotas */}
                                        {/* <Linking to="/precificacao" title="Precificação"/>
                                            <Linking to="/gerenciamento-de-pedidos" title="Gerenciamento de pedidos"/>
                                            <Linking to="/fornecedores" title="Fornecedores"/> */}
                                            <li>Precificação</li>
                                            <li>Gerenciamento de pedidos</li>
                                            <li>Fornecedores</li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className="">
                                    <h3>Precificação</h3>
                                    <p>Adicione os itens usados no seu produto e calcule.</p>
                            </div>

                            <div className="bg-white shadow-lg rounded-lg" >
                                <div className="m-10">
                                    <div className="m-1">
                                        <p>Nome do produto: Bolsa de mão</p>
                                    </div>

                                    <div>
                                        <h3>Materias usados</h3>
                                        {/* accordion */}
                                            <Acordes/>
                                    </div>

                                    <div className="mt-2">
                                        <Button title="Calcular"/>
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