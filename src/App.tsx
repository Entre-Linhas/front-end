import React from 'react';
import './App.css';
import { Container3 } from './BodyComponents/Container3'
import { Header } from './BodyComponents/Header'
import { CardsC2 } from './BodyComponents/CardsC2'
function App() {
  return (
    <div>
       <Header />
       {/* //  div container */}

        <div className="bg-custom-yellow w-screen h-[565px] flex items-center"> 
         
          <div className='w-[102px] bg-custom-salmon'>
            {/* div pra manter o conteúdo sempre distante da borda */}
          </div>

          <div className="float-left w-[700px] flex flex-col">
            <h1 className='text-[36px] font-[Nunito] font-bold'>Conosco você poderá costurar o <br/>seu futuro!</h1>
            <br/>
            <p className='text-[22px]'>O Entre-Linhas foi desenvolvido com foco total em você,<br/> e no seu negócio! Explore a plataforma, aprenda e<br/>evolua!</p>
            <br/>
            <button className='text-custom-salmon h-[50px] w-[174px] border-solid border-2  border-custom-salmon rounded-[6px]'>Comece agora!</button>
          </div>


        <div className="float-right w-[1000px] h-[576px] flex items-end">
          <img className="w-[1000px]" src='/Banner1.svg'></img>
        </div>
        
        </div>
        {/* // fim div container 01 */}


        {/* Container 02 */}

        <div className="h-[231px] flex w-screen justify-evenly">
          <CardsC2 />
          <CardsC2 />
          <CardsC2 />
        </div>


        <Container3 />
        <div className="h-[500px] flex flex-col items-center justify-center gap-[74px] bg-custom-yellow">

        
          <h1 className="font-[Nunito] text-[48px]">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
         
          <div className="flex items-center justify-center">

              <div className="border-solid border-2 h-[308px] w-[273px] rounded-[20px] bg-white flex flex-col items-center justify-evenly text-center">
                  <img src="/IconCard1C5.svg" className="w-[53px] h-[52px]"></img>
                  <p className="font-[Nunito] font-bold text-[22px]">Entendendo meu cliente</p>
                  <p className="text-[22px] font-[Nunito]">Quem são meus clientes, como captá-los?</p>
              </div>

              <div className="w-[53px] border-dashed border-[1px] border-custom-salmon"></div>

              <div className="border-solid border-2 h-[308px] w-[273px] rounded-[20px] bg-white flex flex-col items-center justify-evenly text-center">
              <img src="/IconCard1C5.svg" className="w-[53px] h-[52px]"></img>
                  <p className="font-[Nunito] font-bold text-[22px]">Entendendo meu cliente</p>
                  <p className="text-[22px] font-[Nunito]">Quem são meus clientes, como captá-los?</p>
              </div>

              <div className="w-[53px] border-dashed border-[1px] border-custom-salmon"></div>

              <div className="border-solid border-2 h-[308px] w-[273px] rounded-[20px] bg-white flex flex-col items-center justify-evenly text-center">
              <img src="/IconCard1C5.svg" className="w-[53px] h-[52px]"></img>
                  <p className="font-[Nunito] font-bold text-[22px]">Entendendo meu cliente</p>
                  <p className="text-[22px] font-[Nunito]">Quem são meus clientes, como captá-los?</p>
              </div>

              <div className="w-[53px] border-dashed border-[1px] border-custom-salmon"></div>

              <div className="border-solid border-2 h-[308px] w-[273px] rounded-[20px] bg-white flex flex-col items-center justify-evenly text-center">
              <img src="/IconCard1C5.svg" className="w-[53px] h-[52px]"></img>
                  <p className="font-[Nunito] font-bold text-[22px]">Entendendo meu cliente</p>
                  <p className="text-[22px] font-[Nunito]">Quem são meus clientes, como captá-los?</p>
              </div>
          </div>                                

        </div>
        <Container3 />
        <div className="h-[509px] bg-[#CCCCCC]"></div>
        <Container3 />
        <div className="h-[700px] bg-black"></div>
        <div className="h-[235px] bg-gray-300"></div>
    </div> 
  );
}

export default App;
