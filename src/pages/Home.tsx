import { Bag, Buildings, Hammer} from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InstagramLogo, LinkedinLogo, YoutubeLogo} from "@phosphor-icons/react";
import "../styles/index.css";


interface HomeProps {
NameUser?: String
PhotoUser?: String
TextUser?: String
}

export default function Home({NameUser, PhotoUser, TextUser}: HomeProps) {
    return (
      
  <div>
      <Header />
      
      {/* criar um componente pra cada container; 
      
      isolation: funcionalidade que você pode usar em qualquer lugar;
      
      
      
      
      */}

{/* sm:max-w-[100%] md:max-w-[100%] lg:max-w-[97.6rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]  */}
      {/* items-center flex box-border w-[100%] px-[1.5rem] mx-auto  */}
      
      {/* container1 */}
        <div className="bg-[#62B8AF] h-[60vh] min-[220px]:flex justify-center items-center"> 
        
             <div className="min-[220px]:">
                <div className="flex flex-col gap-[1.6rem] text-white m-auto items-center justify-center">
                  <h1 className='text-center font-bold max-[800px]:text-[2rem] sm:text-[2rem]'>Costure seu futuro aqui!</h1>
                  <img src="/mobilebanner.svg" className="max-h-[15rem] bg-black"/>
                  <p className='text-center text-[2.2rem]'>O Entre-Linhas foi desenvolvido com foco total em você, e no seu negócio! Explore a plataforma, aprenda e<br/>evolua!</p>
                  <div className="self-center">
                     <Button title='Comece agora!'/>
                  </div>
                </div>
              </div>

        </div>

        {/* container2 - cards */}

      <div>
        <div className="flex justify-center box-border w-[100%] h-[23.1rem] mx-auto -mt-11 xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
            <Card title="Aprenda a empreender" text="Aqui você encontrará tudo que precisa para transformar o seu negócio!" icon={Bag} />
            <div className="self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
            <Card title="Conheça ferramentas" text="Problemas com o gerenciamento? A gente te ajuda! " icon={Hammer}/>
            <div className="self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
            <Card title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
          </div>
       </div>

       {/* container3 */}

      <div className="py-[80px] box-border w-[100%] m-auto px-[1.5rem] sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
        <div className="px-[9.6rem] py-[10rem]">
          <div className="w-[55%] m-auto">
            <h1 className="text-center text-[4.8rem] font-[Nunito] text-custom-salmon">Costure seu futuro <span className="text-black">aqui</span></h1>
            <br/>
            <p className="text-[2.2rem] text-center">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
            <div className="flex justify-center mt-[-60px]">
            <img src="/Machinee.svg" className="h-[40rem] sm:h-[25rem] max-[640px]:h-[20rem]"/>
            </div>
          </div>
            
        </div>
      </div>

      {/* education track */}
      {/* container 4 transformar em carrosel */}

      <div className="h-[50rem]">
        <div className="flex flex-col justify-center gap-[74px] box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
              <h1 className="m-auto font-[Nunito] text-[48px]">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
            <div className="md:flex m-auto sm:grid grid-cols-8 max-[800px]:grid grid-cols-8]">
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
                <div className="md:flex self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] sm:hidden"></div>
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Hammer}/>
                <div className="md:flex self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] sm:hidden"></div>
              <Card typeStyle="secondary" title="TESTE TESTE" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
                <div className="md:flex self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] sm:hidden"></div>
              <Card typeStyle="secondary" title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
            </div>   
        </div>
      </div>


      {/* container 5 */}
      <div className="py-[10rem] flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
      
      
        <div className="px-[7.6rem] py-[6rem]">
          <div className="w-[55%] m-auto">
            <h1 className="text-center text-[4.8rem] font-[Nunito] text-custom-salmon">Por que<span className="text-black"> fazemos</span>?</h1>
            <br/>
            <p className="text-[2.2rem] text-center">Nascemos do sonho e da fome de crescimento dos profissionais de costura, trabalhamos para mudar o mundo textil e torná-lo melhor para eles!</p>
          </div>
          <div className="m-auto w-[100%]">
                <img src="Gallery.svg" className="w-[100%]"></img>
            </div>
        </div>
      
        
      </div>


      {/* container6 */}

        <div className="h-[50.9rem] py-[25rem]">
          <div className="flex flex-col items-center justify-center text-center box-border h-[90%] w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
                <div className="flex">  
                  <h1 className="text-[4.2rem]">Confira <span className="text-custom-salmon">relatos</span> de quem já passou por aqui</h1>
                  <div>
                    {/*  */}
                    <img src="/Carretel.svg" className="mt-[-30px] ml-[-30px]"/>
                  </div>
                  
                </div>
                  <p className="text-[2.2rem]">Angie Nonbine</p>
                  <img src="/Temporary.svg" className="max-w-[10%]"/>
                  <p className="text-[2.2rem]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus bibendum, id sagittis lectus pulvinar. Etiam ultrices, velit non dictum fringilla, massa nulla pulvinar est, vitae malesuada dolor libero non metus. “</p>
           </div>
        </div>

        {/* container7 */}

        <div className="box-border w-[100%] px-[1.5rem] py-[10.2rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
          <div className="w-[50%] flex flex-col justify-center items-center text-center gap-[30px] m-auto">
              <h1 className="text-[4.8rem] font-[Nunito] text-custom-salmon">Conheça o PodLinhas</h1>
              <img src="/Ellipse 65.svg" className="max-w-[30%]"/>
              <p className="text-[2.2rem]">Histórias inspiradoras, para te inspirar! Conheça a trajetória de outros profissionais de costura que venceram desafios supreendentes, aprenda com experiências de vida e relatos reais. Vem pro PodLinhas!</p>
              <Button typeStyle="primary" title="Ouça aqui"/>
           </div>
        </div>

        {/* container8 */}

      <div className="py-[30px] items-center  flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px] min-[220px]:hidden">
          <img src="/cellphone.svg" className="max-[640px]:hidden max-[840px]:hidden"></img>
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
