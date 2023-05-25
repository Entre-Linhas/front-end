import React from 'react';
import './App.css';
import { HHeader } from './BodyComponents/Header/HHeader'
import { Container01 } from './BodyComponents/Container1/Container01'
import { Container02 } from './BodyComponents/Container2/Container02'
function App() {
  return (
    <div>
       <HHeader />
        <Container01 />
        <Container02 />
        
        <div className="h-[654px] flex items-center">

          <div className="float-left w-[1200px]">
            <h1 className="text-[48px] font-[Nunito] text-custom-salmon">Costure seu futuro <span className="text-black">aqui</span></h1>
            <p className="text-[22px]">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade.<br/> Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
          </div>

          <div className="float-right bg-black h-[428px] w-[528px] flex items-center justify-start">
            <img src="./Ellipse 65.svg"></img>
          </div>

           
        </div>

    </div>
  );
}

export default App;
