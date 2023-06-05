import { Bag, Buildings, Hammer} from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Image } from "../components/Image";
import { Footer } from "../components/Footer";
import { InstagramLogo, LinkedinLogo, YoutubeLogo} from "@phosphor-icons/react";

export default function Home() {
    return (
      
  <div>
      <Header />
      
      <div className="bg-custom-yellow h-[60vh]"> 
        <div className="items-center flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
            <div className="flex flex-col gap-[1.6rem]">
              <h1 className='text-[3.6rem] font-[Nunito] font-bold max-[800px]:text-[1rem]'>Conosco você poderá costurar o <br/>seu futuro!</h1>
              <p className='text-[2.2rem]'>O Entre-Linhas foi desenvolvido com foco total em você, e no seu negócio! Explore a plataforma, aprenda e<br/>evolua!</p>
              <Button title='Comece agora!' typeStyle='secondary' />
            </div>
            <div className="max-w-[100%]">
              <img src='/Banner1.svg' alt="Imagem de uma moça costurando"></img>
            </div>
        </div>
      </div>

      <div>
        <div className=" box-border flex justify-between box-border w-[100%] h-[23.1rem] mx-auto -mt-11 xl:max-w-[1220px] 2xl:max-w-[1476px]">
          <Card title="Aprenda a empreender" text="Aqui você encontrará tudo que precisa para transformar o seu negócio!" icon={Bag} />
            <Card title="Conheça ferramentas" text="Problemas com o gerenciamento? A gente te ajuda! " icon={Hammer}/>
            <Card title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
          </div>
       </div>

      <div className="py-[120px] box-border w-[100%] m-auto px-[1.5rem] sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
        <div className="flex items-center px-[9.6rem] justify-between py-[10rem]">
          <div className="w-[50%]">
            <h1 className="text-[4.8rem] font-[Nunito] text-custom-salmon">"Costure seu futuro" <span className="text-black">aqui</span></h1>
            <p className="text-[2.2rem]">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
          </div>
            <Image source="Ellipse 65.svg"/>
        </div>
      </div>

      <div className="h-[50rem] ">
        <div className=" flex flex-col justify-center gap-[74px] box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
              <h1 className="m-auto font-[Nunito] text-[48px]">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
            <div className="flex justify-center m-auto items-center">
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
                <div className="border-dashed border-t-[2px] border-custom-salmon w-[9rem]"></div>
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Hammer}/>
                <div className="border-dashed border-t-[2px] border-custom-salmon w-[9rem]"></div>
              <Card typeStyle="secondary" title="TESTE TESTE" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
                <div className="border-dashed border-t-[2px] border-custom-salmon w-[9rem]"></div>
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
            </div>   
        </div>
      </div>

      <div className="flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
        <div className="flex items-center px-[9.6rem] justify-between py-[10rem]">
          <div className="w-[50%]">
            <h1 className="text-[4.8rem] font-[Nunito] text-custom-salmon">"Costure seu futuro" <span className="text-black">aqui</span></h1>
            <p className="text-[2.2rem]">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
           </div>
            <Image source="Ellipse 65.svg"/>
        </div>
      </div>

        <div className="h-[509px] bg-[#CCCCCC] text-[3.2rem]">
            
          {/* carrosel */}
       
        </div>

      <div className=" flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
        <div className="flex items-center px-[9.6rem] justify-between py-[10rem]">
          <div className="w-[50%] flex flex-col gap-[30px]">
              <h1 className="text-[4.8rem] font-[Nunito] text-custom-salmon">Conheça o <br/> <span className="font-[Sacramento] text-custom-salmon">Entre  Linhas</span> Podcast</h1>
              <p className="text-[2.2rem]">Histórias inspiradoras, para te inspirar! Conheça a trajetória de outros profissionais de costura que venceram desafios supreendentes, aprenda com experiências de vida e relatos reais. Vem pro PodLinhas!</p>
              <Button typeStyle="primary" title="Ouça aqui"/>
           </div>
            <Image source="Ellipse 65.svg"/>
        </div>
      </div>

      <div className="py-[30px] items-center  flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
          <img src="/cellphone.svg"></img>
        <div className="flex flex-col gap-[16px] items-start w-[50%]">
          <h1 className="text-[4.8rem]"> Aprenda também pelo <span className="text-custom-salmon">App</span></h1>
          <p className="text-[2.2rem]">Você escolhe como quer estudar! O Entre-Linhas foi feito para você e por você. Carregue o conhecimento e o poder de transformar o seu negócio em qualquer lugar. </p>
          <img src="/Login.svg" className="h-[6.3rem]"/>
         </div>
      </div>
      
        <Footer icon={InstagramLogo}/>
  </div>
)
}