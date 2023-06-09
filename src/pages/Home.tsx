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

    {/* responsividade ok */}
      <Header /> 
      
      {/* criar um componente pra cada container; 
      
      isolation: funcionalidade que você pode usar em qualquer lugar;
      
      
      
      
      */}
      
      {/* container1 - responsividade ok*/}

        <div className="bg-[#62B8AF] min-[220px]:h-auto flex justify-center items-center min-[1024px]:h-[70vh]"> 
              <div className="max-[1439px]:hidden mr-auto h-full">
                <img src="/LineLeft.svg" className="max-[1439px]:hidden h-full ml-0"/>
              </div>
              <div className="box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
                <div className="flex flex-col gap-[5.6rem] text-white m-auto items-center justify-center py-[4.2rem] px-[1rem]">
                    <h1 className='text-center font-bold text-[2.8rem] min-[425px]:text-[4rem]'>Transforme seu negócio!</h1>
                    <p className='max-w-[42.5rem] text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]'>O Entre-Linhas foi desenvolvido com foco total em você, e no seu negócio! Explore a plataforma, aprenda e<br/>evolua!</p>
                    <div className="self-center">
                      <Button title='Comece agora!'/>
                    </div>
                </div>
                <img src="/banner.svg" className="m-auto min-[220px]:h-[11rem] min-[300px]:h-[15rem] min-[360px]:h-[18rem] min-[400px]:h-[20rem] min-[475px]:h-[23.7rem] min-[500px]:h-[24.9rem] min-[600px]:h-[29.8rem] min-[640px]:h-[31.6rem] min-[720px]:h-[35rem] min-[1024px]:hidden"/>
              </div>
              <img src="/banner.svg" className="self-end max-[1023px]:hidden min-[1024px]:h-[36rem] min-[1240px]:h-[48rem]"/>
          </div>



       
        {/* container2 - cards responsividade 95% */}

      <div className="box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
      <div className="flex box-border min-[220px]:flex-col gap-10 mt-0 min-[900px]:flex-row mt-[-1.5rem] justify-center gap-0 px-5">
            <Card title="Aprenda a empreender" text="Aqui você encontrará tudo que precisa para transformar o seu negócio!" icon={Bag} />
            <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
            <Card title="Conheça ferramentas" text="Problemas com o gerenciamento? A gente te ajuda! " icon={Hammer}/>
            <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
            <Card title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={Bag}/>
          </div>
       </div>



       {/* container3 responsividade ok*/}


       <div className="box-border w-[100%] m-auto py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="min-[220px]:py-[1rem] px-5 min-[900px]:py-[10rem] ">
          <div className="m-auto max-w-[80rem]">
            <h1 className="text-center font-[Nunito] text-custom-salmon text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Costure seu<span className="text-black"> futuro!</span> aqui!</h1>
            <br/>
            <p className="m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
           
            <img src="/Machinee.svg" className="m-auto min-[220px]:h-[10rem] min-[300px]:h-[14rem] min-[360px]:h-[18rem] min-[425px]:h-[20rem] min-[500px]:h-[22rem] min-[600px]:h-[26rem] min-[768px]:h-[35rem] min-[1024px]:h-[42rem]"/>
          </div>
        </div>
      </div>

      {/* education track */}

      {/* container 4 transformar em carrosel */}

      <div className="h-[50rem]">
        <div className="flex flex-col justify-center gap-[74px] box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
              <h1 className="text-center font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
            <div className="flex max-[900px]:overflow-auto">
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


      {/* container 5  responsividade 95%*/}
    
      
      <div className="py-[14rem] box-border w-[100%] m-auto py-[18rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="py-[6rem] m-auto">
            <div className="m-auto max-w-[80rem]">
                <h1 className="text-center font-[Nunito] text-[2.8rem] text-custom-salmon min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Por que<span className="text-black"> fazemos</span>?</h1>
                <br/>
                <p className="m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Nascemos do sonho e da fome de crescimento dos profissionais de costura, trabalhamos para mudar o mundo textil e torná-lo melhor para eles!</p>
            </div>
            <div className="m-auto w-[100%]">
                <img src="Gallery.svg" className="w-[100%]"></img>
            </div>
        </div>
      </div>


      {/* container6 responsividade quase ok, falta o carrosel */}

        <div className="h-[50.9rem] py-[40rem]">
          <div className="flex flex-col items-center justify-center text-center box-border h-[90%] w-[100%] px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
                          <h1 className="text-center font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Confira <span className="text-custom-salmon">relatos</span> de quem já passou por aqui</h1>
                <div className="flex gap-10 min-[220px]:flex-col">  
                  <div className="flex justify-evenly gap-10">
                          <img src="/left.svg"/>
                    <div className="flex justify-center">
                          <img src="/Temporary.svg" className="max-w-[50%] min-[220px]:m-auto min-[900px]:max-w-[43.5rem]"/>
                      <div className="max-[1439px]:hidden flex flex-col m-auto gap-10">
                          <p className="text-[2.2rem]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus bibendum, id sagittis lectus pulvinar. Etiam ultrices, velit non dictum fringilla, massa nulla pulvinar est, vitae malesuada dolor libero non metus. “</p>
                          <p className="text-[2.2rem] ml-auto font-bold text-custom-salmon">Angie Nonbine</p>
                      </div>
                    </div>
                      <img src="/right.svg"/>
                  </div>
                      <p className="text-[2.2rem] m-auto font-bold text-custom-salmon min-[1440px]:hidden">Angie Nonbine</p>
                    <div className="min-[1440px]:hidden">
                      <p className="text-[2.2rem]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus bibendum, id sagittis lectus pulvinar. Etiam ultrices, velit non dictum fringilla, massa nulla pulvinar est, vitae malesuada dolor libero non metus. “</p>
                      <p className="min-[220px]:hidden text-[2.2rem] mr-auto">Angie Nonbine</p>
                   </div>
              </div>
           </div>
        </div>


        {/* container7 responsividade 95% falta só ajustar um pouco*/}

        <div className="box-border w-[100%] px-[1.5rem] py-[10.2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
          <div className="flex flex-col gap-10 items-center">
              <h1 className="text-center text-custom-salmon font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Conheça o PodLinhas</h1>
              <img src="/Ellipse 65.svg" className="max-w-[90%] min-[220px]:m-auto min-[900px]:max-w-[35.5rem]"/>
              <p className="m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Histórias inspiradoras, para te inspirar! Conheça a trajetória de outros profissionais de costura que venceram desafios supreendentes, aprenda com experiências de vida e relatos reais. Vem pro PodLinhas!</p>
              <Button typeStyle="primary" title="Ouça aqui"/>
           </div>
        </div>

        {/* container8 - responsividade ok  */}

      <div className="flex items-center box-border w-[100%] m-auto px-[3rem] py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
          <img src="/cellphone.svg" className="max-[640px]:hidden max-[840px]:hidden"></img>
        <div className="flex flex-col gap-[1.6rem] items-center ">
          <h1 className="text-center text-custom-salmon font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]"> Aprenda também pelo <span className="text-custom-salmon">App</span></h1>
          <p className="m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Você escolhe como quer estudar! O Entre-Linhas foi feito para você e por você. Carregue o conhecimento e o poder de transformar o seu negócio em qualquer lugar. </p>
          <img src="/Login.svg" className="h-[5.3rem]"/>
          <img src="/cellphone.svg" className="min-[840px]:hidden max-w-[100%]"></img>
         </div>
      </div>
      
        <Footer icon={InstagramLogo}/>
  </div>
)
}
