import { Bag, Buildings, Hammer} from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { Header } from "../components/Header";
import { Image } from "../components/Image"


export default function Home() {
    return (
      <div>

      <Header />

     
      <div className="bg-custom-yellow h-[auto] flex items-center justify-between px-[60px]"> 
          <div className="flex flex-col gap-[1.6rem]">
              <h1 className='text-[3.6rem] font-[Nunito] font-bold max-[800px]:text-[1rem]'>Conosco você poderá costurar o <br/>seu futuro!</h1>
              <p className='text-[2.2rem]'>O Entre-Linhas foi desenvolvido com foco total em você,<br/> e no seu negócio! Explore a plataforma, aprenda e<br/>evolua!</p>
              <Button title='Comece agora!' typeStyle='secondary' />
          </div>
             <img className="self-end" src='/Banner1.svg' alt="Imagem de uma moça costurando"></img>
      </div>
       
      <div className="m-[-45px] w-[100%]">
          <div className="flex justify-between w-[80%] m-auto max-[600px]:w-[100%]">
            <Card title="Aprenda a empreender" text="Aqui você encontrará tudo que precisa para transformar o seu negócio!" icon={Bag} />
            <Card title="Conheça ferramentas" text="Problemas com o gerenciamento? A gente te ajuda! " icon={Hammer}/>
            <Card title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
          </div>
      </div>

      <Container image="Ellipse 65.svg" text="Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!" title="Costure seu futuro" perword="aqui" percolor="text-black"/>
      
    

         <div className=" h-[50rem] flex flex-col justify-center gap-[74px]">
            <h1 className="m-auto font-[Nunito] text-[48px]">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
            <div className="z-10 flex px-[50px] justify-center m-auto items-center">
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
              <div className="border-dashed border-t-[2px] border-custom-salmon w-[7rem]"></div>
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Hammer}/>
              <div className="border-dashed border-t-[2px] border-custom-salmon w-[7rem]"></div>
              <Card typeStyle="secondary" title="TESTE TESTE" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
              <div className="border-dashed border-t-[2px] border-custom-salmon w-[7rem]"></div>
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
            </div>   
         </div>

        <Container image="Ellipse 65.svg" text="Até a mais bela roupa passou pela mão de um profissional de costura. Cada ponto, cada traço, cada corte, importa. " title="" percolor="text-black" perword="Por que fazemos?" />

        <div className="h-[509px] bg-[#CCCCCC]">


        </div>

        <div className="flex px-[12rem] py-[6rem] justify-between items-center">
          <div className="w-[50%]">
            <h1 className="text-[4.8rem]">Conheça o <br/>
            Entre  Linhas Podcast</h1>
            <p className="text-[2.2rem]">Histórias inspiradoras, para te inspirar! Conheça a trajetória de outros profissionais de costura que venceram desafios supreendentes, aprenda com experiências de vida e relatos reais. Vem pro PodLinhas!</p>
            <Button typeStyle="secondary" title="Ouça aqui"/>
          </div>
          <Image source="Ellipse 65.svg"/>
        </div>

        <div className="bg-black py-[60px]">
          <img src="/cellphone 1.svg"></img>

        </div>


        <div className="h-[235px] bg-gray-300">


        </div>


    </div>
    )
}