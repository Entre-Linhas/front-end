import { Button } from "../components/Button"
export default function Pratica () {
return (
<>
      
 
        <div className="py-[12rem] px-[1rem] max-w-[100rem] m-auto">
            <div className="m-auto flex flex-col gap-[1.5rem]">
               <h1 className="text-center text-[2.4rem] font-semibold">Hora de colocar em prática</h1>
               <p className="text-center m-auto ">Agora é hora de colocar em prática tudo o que foi aprendido nas lições anteriores! Os exercícios são uma oportunidade para você testar suas habilidades e aplicar os conhecimentos adquiridos de forma concreta.</p>
            </div>
            
            <div className="py-[2rem] flex flex-col items-center">
                <h2 className="text-center font-semibold">Qual é a importância da definição do negócio para um empreendimento?</h2>
               <div className="flex flex-col m-auto text-center gap-[3rem] py-[4rem] max-w-[100rem] px-[2.5rem]">
                <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto w-[100%]"><p className="text-center">Não é importante, o negócio pode ser ajustado com o tempo.</p></div>
                <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%]"><p className="text-center">A definição do negócio é responsabilidade apenas dos líderes da empresa, não afetando os demais colaboradores.</p></div>
                <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%]"><p className="text-center">Não é importante, o negócio pode ser ajustado com o tempo.</p></div>
                <div className="py-[1.5rem] px-[1.5rem] rounded-[1rem] bg-white m-auto  w-[100%]"><p className="text-center">Não é importante, o negócio pode ser ajustado com o tempo.</p></div>
               </div>
                <Button title="Corrigir" />
             </div>
           </div>

</>
)
}