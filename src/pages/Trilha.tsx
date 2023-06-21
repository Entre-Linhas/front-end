import { Header } from "../components/Header";
import {CheckCircle} from "@phosphor-icons/react"
import { Model  } from "../components/Model";

export const Trilha = () => {
return (
<>  
  <div className="relative z-10"> 
    <Header />
    </div>
    <div className="h-[100%] flex flex-col justify-center py-[10rem] relative z-0">
            <h1 className="py-[3.5rem] m-auto text-[3.6rem] font-bold">Bem vindo, à Trilha Educacional</h1>
            

            {/* Lado esquerdo */}
            <div className="flex h-[50vh] justify-center gap-[1rem]"> 
                
                <div className="flex flex-col gap-[35.5rem] items-end">
                
                {/* nome do assunto */}
                <div className="bg-[#FF6464] px-[1.3rem] py-[1rem] max-h-[2.4rem] max-w-[19rem] rounded-[2rem] flex items-center text-white"><p>Meu Negócio - 0%</p></div>
                
                {/* módulos */}
                <div className="flex flex-col gap-[3.5rem]">
                  <Model    title="1. Meu cliente" describe="Conhecer quem é o meu cliente e suas necessidades" time="20min"/>
                  <Model   title="2. Experiência do cliente" describe="Entender como a experiência do cliente afeta suas vendas" time="20min"/>
                <Model   title="3. Estratégias de venda" describe="Criação de promoções e ações de vendas baseadas nos seus clientes" time="20min"/>
                <Model  title="4. Engajamento" describe="Manter um relacionamento com o  seu cliente" time="20min"/>
                </div>

                

                </div>
                  


                {/* div do pilar gradiente */}
                <div className="bg-green-500 flex flex-col justify-center items-center relative h-screen">
            {/* pilar gradiente */}
             <div className="bg-gradient-to-b from-[#FF6464] via-[rgba(255, 100, 100, 0.42)] to-[#FFFFFF] h-screen w-[1rem] relative justify-center items-center"> </div>
               {/* pilar gradiente */}
            </div>
            
            {/* Lado direito */}
            <div className="flex flex-col gap-[8rem]">
            <div className="flex flex-col gap-[3.5rem]">
                <a href="./Conteudo"> 
                   <Model  title="1. Definição do negócio" describe="Identificar o nicho de mercado e da proposta de valor." time="20min"/>
                </a>
                  <Model     title="2. Análise de mercado" describe="Estudo do público-alvo e concorrência." time="20min"/>
                  <Model   title="3. Meu produto" describe="Qual o meu produto e como identificar seu valor agregado" time="20min"/>
                  <Model    title="4. Diferencial" describe="Identificar o diferencial do seu negócio e o que ele pode oferecer ao mercado" time="20min"/>
              </div>

                <div className="bg-[#FF6464] px-[1.3rem] py-[1rem] max-h-[2.4rem] max-w-[19rem] rounded-[2rem] flex items-center text-white"><p>Cliente e Vendas - 0%</p></div>
            
            </div>
              
 
            </div>

    </div>

</>
)
}

{/* <div className="m-auto absolute flex flex-col"> 
<div className="  w-[3rem] h-[3rem] rounded-[3rem] bg-custom-salmon"></div>
<div className="mt-0 w-[3rem] h-[3rem] rounded-[3rem] bg-custom-salmon"></div>
</div> */}