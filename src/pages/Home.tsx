import { Bag, Buildings, Hammer, Lightbulb, UsersThree, UserCircleGear, Briefcase, Star} from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { IconProps } from "@phosphor-icons/react"
import { InstagramLogo, LinkedinLogo, YoutubeLogo} from "@phosphor-icons/react";
import "../styles/index.css";


interface HomeProps {
NameUser?: String
PhotoUser?: String
TextUser?: String
}

export default function Home({NameUser, PhotoUser, TextUser}:HomeProps) {
    return (
      
// Fazer uma página exclusiva para falar das ferramentas, e inserir um container entre o PodCast e entre os depoimentos falando sobre as assinaturas. Inserir "Ferramentas" na nav, redirecionando pra página de ferramentas, onde vamos falar só sobre as ferramentas. fundo do sandro verde. 

// Título "Transforme seu negócio com as ferramentas do Entre-Linhas; texto em baixo:"

// Ferramentas personalizadas criadas para serem suas maiores aliadas em seu dia a dia! Poupe tempo planejando o orçamento de um material, tenha o gerenciamento de pedidos sempre sob seu controle e muito mais! 

// card

  <div className="bg-gray-100">

    {/* responsividade ok */}
      <Header /> 
      
      {/* criar um componente pra cada container; 
      
      isolation: funcionalidade que você pode usar em qualquer lugar;
      
      
      
      
      */}
      
      {/* container1 - responsividade ok*/}

        <div className="py-[1rem] bg-[#62B8AF] min-[220px]:h-auto flex justify-center items-center min-[1024px]:h-[70vh]"> 
              <div className="max-[1439px]:hidden mr-auto h-full">
                <img src="/LineLeft.svg" className="max-[1439px]:hidden h-full ml-0"/>
              </div>
              <div className="box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
                <div className="flex flex-col text-white m-auto items-center py-[4.2rem] px-[1.5rem] min-[220px]:gap-[3rem]">
                    <h1 className='text-center font-bold text-[3rem] min-[425px]:text-[4.5rem]'>Transforme seu negócio!</h1>
                    <p className='max-[1499px]:max-w-[50rem] text-justify min-[220px]:text-[1.8rem] min-[300px]:text-[2rem] min-[320px]:text-[2.2rem] min-[500px]:text-[2.4rem] min-[768px]:text-[2.8rem] min-[1500px]:max-w-[80rem]'>O Entre-Linhas foi desenvolvido com foco total em você, e no seu negócio! Explore a plataforma, aprenda e cresça conosco!</p>
                    <div className="self-center">
                      <Button title='Comece agora!'/>
                    </div>
                </div>
                <img src="/ArteMain.svg" className="m-auto min-[220px]:h-[16rem] min-[300px]:h-[22rem] min-[360px]:h-[25rem] min-[400px]:h-[28rem] min-[475px]:h-[32rem] min-[500px]:h-[35rem] min-[600px]:h-[40rem] min-[640px]:h-[42rem] min-[720px]:h-[44rem] min-[1024px]:hidden"/>
              </div>
              <img src="/ArteMain.svg" className="self-center max-[1023px]:hidden min-[1024px]:h-[46rem] min-[1240px]:h-[48rem]"/>
          </div>


        {/* Container2 responsivo */}

            <div className="flex flex-col gap-[10rem] py-[5rem] min-[220px]:w-[100%] px-[1rem] min-[600px]:max-w-[70%] m-auto min-[1024px]:hidden">
              <div className="flex flex-col text-center gap-[2rem]">
                <Lightbulb size={50} className="text-custom-salmon m-auto"/>
                <h1 className="m-auto font-bold text-[2.2rem] font-[Nunito]">Aprenda a empreender</h1>
                <p className="text-[2.2rem]">Aqui você encontrará tudo que precisa para transformar o seu negócio!</p>
              </div>

              <div className="flex flex-col text-center gap-[2rem]">
              <Hammer size={50} className="text-custom-salmon m-auto" weight="fill" />
                <h1 className="m-auto font-bold text-[2.2rem] font-[Nunito]">Conheça ferramentas</h1>
                <p className="text-[2.2rem]">Problemas com o gerenciamento? A gente te ajuda! </p>
              </div>

              <div className="flex flex-col text-center gap-[2rem]">
              <UsersThree size={52} className="text-custom-salmon m-auto" weight="fill"/>
                <h1 className="m-auto font-bold text-[2.2rem] font-[Nunito]">Conheça outras pessoas</h1>
                <p className="text-[2.2rem]">Que tal criar conexões com pessoas tão incríveis quanto você?</p>
              </div>
            </div>
       
        {/* container2 padrão*/}

      <div className="max-[1023px]:hidden box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
      <div className="flex box-border min-[220px]:flex-col gap-10 mt-0 min-[900px]:flex-row mt-[-1.5rem] justify-center gap-0 px-5">
            <Card title="Aprenda a empreender" text="Aqui você encontrará tudo que precisa para transformar o seu negócio!" icon={Lightbulb} />
            <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
            <Card title="Conheça ferramentas" text="Problemas com o gerenciamento? A gente te ajuda! " icon={Hammer}/>
            <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
            <Card title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={UsersThree}/>
          </div>
       </div>



       {/* container3 responsividade ok*/}


       <div className="box-border w-[100%] m-auto py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="min-[220px]:py-[1rem] px-5 min-[900px]:py-[10rem]">
         
            
            <div className="min-[1024px]:flex gap-[2rem]">
                <div>
                  <h1 className="text-center font-[Nunito] text-custom-salmon text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Costure seu<span className="text-black"> futuro!</span> aqui!</h1>
                  <p className="max-w-[64rem] m-auto text-justify min-[220px]:text-[1.8rem] py-[2rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
                </div>
                  <img src="/Machinee.svg" className="m-auto min-[220px]:h-[10rem] min-[240px]:h-[11rem] min-[300px]:h-[15rem] min-[360px]:h-[18rem] min-[425px]:h-[21rem] min-[500px]:h-[24rem] min-[768px]:h-[35rem] min-[1024px]:h-[28rem] min-[1440px]:h-[32rem]"/>
              </div>
          </div>

        </div>

      {/* education track */}

      {/* container 4 transformar em carrosel */}

      <div className="h-[50rem]">
        {/* <div className="flex flex-col justify-center gap-[74px] box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]"> */}
        <div className="box-border w-[100%] m-auto py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
              <h1 className="py-[4rem] text-center font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
            <div className="flex max-[900px]:overflow-x-scroll">
              <Card typeStyle="secondary" title="Conhecendo meu negócio" text="Quem sou eu, onde estou e onde quero chegar?" icon={Buildings}/>
                <div className=" self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] max-[900px]:min-w-[9rem]"></div>
              <Card typeStyle="secondary" title="Entendendo meu cliente" text="Quem são meus clientes, como captá-los?" icon={UserCircleGear}/>
                <div className="self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] max-[900px]:min-w-[9rem]"></div>
              <Card typeStyle="secondary" title="Aprendendo a gerênciar" text="Como me organizar para que meu negócio possa crescer?" icon={Briefcase}/>
                <div className=" self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] max-[900px]:min-w-[9rem]"></div>
              <Card typeStyle="secondary" title="Marketing e inovação" text="Indo além! Alcançando novos clientes e novas perspectivas." icon={Star}/>
            </div>   
        </div>
      </div>


    

      {/* container7 responsividade 95% falta só ajustar um pouco*/}

      <div className="m-auto box-border w-[100%] px-[1.5rem] py-[10.2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1440px]:flex gap-10">
                
                <div className="py-[10rem] m-auto flex flex-col gap-10 items-center min-[1440px]:max-w-[70rem] gap-[8rem]">
                    <h1 className="text-center font-medium font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Transforme seu negócio com as <span className="text-custom-salmon">ferramentas</span> do Entre-Linhas</h1>
                    <p className="max-w-[99rem] m-auto text-justify min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Nossas ferramentas são desenvolvidas totalmente com base em você e em seu negócio. Tarefas que levariam um tempo valioso, podem ser feitas em poucos segundos com o auxilio de nossas ferramentas. Nunca se perca o controle dos seus pedidos, e poupe tempo para orçamentar um pedido.</p>
                  <button className="min-[220px]:px-[2.3rem] py-[2.6rem] min-[230px]:text-[1.8rem] min-[500px]:text-[2.2rem] px-[3.3rem] py-[3.6rem] font-bold bg-custom-salmon rounded-[3rem] text-white">Conheça nossas ferramentas</button>
                    {/* <Button typeStyle="primary" title="Ouça aqui"/> */}
                </div>
                <img src="/FerramentaCell.svg" className="m-auto max-w-[95%] min-[1140px]:max-w-[100%]"/>
                {/* <div>
                  <img src="/FerramentaCell.svg" className="m-auto max-w-[70%] min-[1140px]:max-w-[100%]"/>
                </div> */}
              </div>




  {/* container8 - responsividade ok  */}

      <div className="flex items-center box-border w-[100%] m-auto px-[3rem] py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="m-auto flex flex-col gap-[1.6rem] items-center min-[840px]:flex-row">
          <div className="flex flex-col gap-[1.6rem] items-center">
          <h1 className="text-center text-custom-salmon font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]"> Aprenda também pelo <span className="text-custom-salmon">App</span></h1>
          <p className="m-auto max-w-[84.5rem] text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Você escolhe como quer estudar! O Entre-Linhas foi feito para você e por você. Carregue o conhecimento e o poder de transformar o seu negócio em qualquer lugar. </p>
          <img src="/Login.svg" className="h-[5.3rem]"/>
          </div>
          <img src="/AprendaCelular.svg" className="m-auto min-[220px]:w-[18rem] min-[320px]:w-[26rem] min-[425px]:w-[30rem] min-[840px]:max-w-[100%]"></img>
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





      {/* container 5  responsividade 95%*/}
    
      
      <div className="py-[14rem] box-border w-[100%] m-auto flex flex-col gap-[5rem]">
        
            <div className="m-auto">
                <h1 className="text-center font-[Nunito] text-[2.8rem] text-custom-salmon min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Por que<span className="text-black"> fazemos</span>?</h1>
                <br/>
                <p className="max-w-[64.2rem] m-auto text-justify min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem]">Nascemos do sonho e da fome de crescimento dos profissionais de costura, trabalhamos para mudar o mundo textil e torná-lo melhor para eles!</p>
            </div>
            <div className="min-[900px]:flex justify-evenly">
              <div className="py-[3rem] flex flex-col justify-center items-center gap-[4.8rem]">
                  <h3 className="text-center font-[Nunito] text-[2.4rem] min-[425px]:text-[3.2rem]">Transformação</h3>
                  <p className="max-w-[28rem] m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.1.8rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus.</p>
                  <img src="/LineSalmon.svg"/>
              </div>
              <div className="py-[3rem] flex flex-col justify-center items-center gap-[4.8rem]">
                  <h3 className="text-center font-[Nunito] text-[2.4rem] min-[425px]:text-[3.2rem]">Transformação</h3>
                  <p className="max-w-[28rem] m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.1.8rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus.</p>
                  <img src="/LineYellow.svg"/>
              </div>
              <div className="py-[3rem] flex flex-col justify-center items-center gap-[4.8rem]">
                  <h3 className="text-center font-[Nunito] text-[2.4rem] min-[425px]:text-[3.2rem]">Transformação</h3>
                  <p className="max-w-[28rem] m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.1.8rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus.</p>
                  <img src="/LineTurq.svg"/>
              </div>
            </div>
          
            
        
      </div>

      <div className="w-[100%] h-[8vh] bg-black flex items-center justify-center">
        <div className="m-auto flex items-center gap-[1rem] py-[1rem]">
          <p className="leading-[30px] text-custom-salmon font-[Sacramento] min-[220px]:text-[2.2rem] min-[240px]:text-[2.5rem] min-[320px]:text-[3.2rem] min-[426px]:text-[3.6rem] min-[600px]:text-[3.8rem] ">Entre Linhas</p>
          <img src='/bobina.png' className="min-[220px]:h-[2rem] min-[240px]:h-[2.2rem] min-[320px]:h-[2.8rem] min-[426px]:h-[3rem] min-[600px]:h-[3.rem]"/>
          </div>
        </div>       
      <div className="bg-black m-auto w-[100%] h-[70vh] bg-[url('/public/Gallery.svg')] bg-cover min-[1380px]:h-[80vh]"></div>

        <Footer icon={InstagramLogo}/>
        
  </div>
)
}
