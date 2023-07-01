import { Buildings, Hammer, Lightbulb, UsersThree, UserCircleGear, Briefcase, Star } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "../styles/index.css";
import { useCarousel } from "../utils/carousel";
// import { useCa} from "react"


interface HomeProps {
  NameUser?: String
  PhotoUser?: String
  TextUser?: String
}

/* Não se assuste, Passos! Era para isto acontecer mesmo. */

export default function Home({ NameUser, PhotoUser, TextUser }: HomeProps) {
  const carousel = [{
    id: 1,
    author: "Fulano",
    msg: "Lorem tal",
    url: "/Temporary.svg"
  }, {
    id: 2,
    author: "Fulana",
    msg: "Lorem tal 2223232323",
    url: "/Temporary.svg"
  }];

  const [active, setActive, handlers, style] = useCarousel(carousel.length, 5000);
  return (

    <div className="">

      {/* responsividade ok */}


      <Header />


      {/* container1 - responsividade ok*/}

      <div className='py-[9rem] bg-[#62B8AF] min-[220px]:h-auto flex justify-center items-center max-[1023px]:py-[5rem]'>

        <div className="box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1024px]:flex min-[1024px]:flex-row min-[1024px]:gap-[1.5rem] no-wrap">
          <div className="flex flex-col text-white m-auto items-center py-[4.2rem] px-[1.5rem] min-[220px]:gap-[3rem]">
            <h1 className='self-center min-[1024px]:self-start font-bold text-[3rem] min-[425px]:text-[4.5rem]'>Transforme seu negócio!</h1>
            <p className='max-[1499px]:max-w-[50rem] text-center min-[1024px]:text-justify min-[220px]:text-[1.8rem] min-[300px]:text-[2rem] min-[320px]:text-[2.2rem] min-[500px]:text-[2.4rem] min-[768px]:text-[2.8rem] min-[1500px]:max-w-[80rem]'>O Entre-Linhas foi desenvolvido com foco total em você, e no seu negócio! Explore a plataforma, aprenda e cresça conosco!</p>
            <div className="min-[1024px]:self-start">
              <Button title='Comece agora!' />
            </div>
          </div>
          <img src="/ArteMain.svg"  className="m-auto min-[220px]:h-[16rem] min-[300px]:h-[22rem] min-[360px]:h-[25rem] min-[400px]:h-[28rem] min-[475px]:h-[32rem] min-[500px]:h-[35rem] min-[600px]:h-[40rem] min-[640px]:h-[42rem] min-[720px]:h-[44rem] min-[1024px]:h-[40rem] min-[1280px]:h-[50rem]" alt="ilustração da moça costurando" role="imagem"/>
        </div>

      </div>


      {/* Container2 responsivo */}

      <div className="flex flex-col gap-[10rem] min-[220px]:w-[100%] px-[1rem] min-[600px]:max-w-[70%] m-auto min-[1024px]:hidden">
        <div className="flex flex-col max-[1024px]:text-center gap-[2rem]">
          <Lightbulb size={50} className="text-custom-salmon m-auto" />
          <h1 className="font-bold text-[2.2rem] font-[Nunito]">Aprenda a empreender</h1>
          <p className="text-[2.2rem]">Aqui você encontrará tudo que precisa para transformar o seu negócio!</p>
        </div>

        <div className="flex flex-col text-center gap-[2rem]">
          <Hammer size={50} className="text-custom-salmon m-auto" weight="fill" />
          <h1 className="m-auto font-bold text-[2.2rem] font-[Nunito]">Conheça ferramentas</h1>
          <p className="text-[2.2rem]">Problemas com o gerenciamento? A gente te ajuda! </p>
        </div>

        <div className="flex flex-col text-center gap-[2rem]">
          <UsersThree size={52} className="text-custom-salmon m-auto" weight="fill" />
          <h1 className="m-auto font-bold text-[2.2rem] font-[Nunito]">Conheça outras pessoas</h1>
          <p className="text-[2.2rem]">Que tal criar conexões com pessoas tão incríveis quanto você?</p>
        </div>
      </div>

      {/* container2 padrão*/}

      <div className="max-[1023px]:hidden box-border w-[100%] m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="flex box-border px-5 min-[220px]:flex-col min-[900px]:flex-row min-[1024px]:mt-[-3.5rem]">
          <Card title="Aprenda a empreender" text="Aqui você encontrará tudo que precisa para transformar o seu negócio!" icon={Lightbulb} />
          <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
          <Card title="Conheça ferramentas" text="Problemas com o gerenciamento? A gente te ajuda! " icon={Hammer} />
          <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[10%]"></div>
          <Card title="Conheça outras pessoas" text="Que tal criar conexões com pessoas tão incríveis quanto você?" icon={UsersThree} />
        </div>
      </div>



      {/* container3 responsividade ok*/}


      <div className="box-border w-[100%] m-auto py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        <div className="min-[220px]:py-[1rem] px-5 min-[900px]:py-[10rem]">


          {/* alinhar o texto À esquerda para mínimo de 1024px */}
          <div className="min-[1024px]:flex gap-[2rem]">
            <div className="self-center">
              <h1 className="max-[1023px]:text-center font-[Nunito] text-custom-salmon text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Costure seu<span className="text-black dark:text-white"> futuro</span> aqui!</h1>
              <p className="max-w-[64rem] m-auto text-justify min-[220px]:text-[1.8rem] py-[2rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem] dark:text-gray-100">Conteúdo totalmente produzido com foco em você e para se adaptar ao seu contexto e realidade. Conosco, a teoria e a prática vão caminhar juntas, construa seu negócio enquanto aprende de forma intuitiva e interativa!</p>
            </div>
            <img src="/Machinee.svg" className="m-auto min-[220px]:h-[15rem] min-[240px]:h-[16rem] min-[300px]:h-[22rem] min-[360px]:h-[24rem] min-[425px]:h-[28rem] min-[500px]:h-[32rem] min-[768px]:h-[40rem] min-[1024px]:h-[40rem] min-[1440px]:h-[48rem]" alt="ilustração de máquina de costura" role="imagem"/>
          </div>
        </div>


      </div>

      {/* education track */}

      {/* container 4 transformar em carrosel */}

      <div className="h-[50rem]">
        {/* <div className="flex flex-col justify-center gap-[74px] box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]"> */}
        <div className="box-border w-[100%] m-auto py-[5rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
          <h1 className="py-[4rem] text-center font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem] dark:text-white">Conheça nossa <span className="text-custom-salmon">trilha educacional</span></h1>
          <div className="flex overflow-x-scroll max-[1024px]:px-[2.5rem]">
            <Card typeStyle="secondary" title="Conhecendo meu negócio" text="Quem sou eu, onde estou e onde quero chegar?" icon={Buildings} />
            <div className=" self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] min-w-[9rem]"></div>
            <Card typeStyle="secondary" title="Entendendo meu cliente" text="Quem são meus clientes, como captá-los?" icon={UserCircleGear} />
            <div className="self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] min-w-[9rem]"></div>
            <Card typeStyle="secondary" title="Aprendendo a gerenciar" text="Como me organizar para que meu negócio possa crescer?" icon={Briefcase} />
            <div className=" self-center border-dashed border-t-[2px] border-custom-salmon w-[9rem] min-w-[9rem]"></div>
            <Card typeStyle="secondary" title="Marketing e inovação" text="Indo além! Alcançando novos clientes e novas perspectivas." icon={Star} />
          </div>
        </div>
      </div>




      {/* container7 responsividade 95% falta só ajustar um pouco*/}


      <div className="m-auto box-border w-[100%] px-[1.5rem] py-[10.2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] min-[1440px]:flex gap-10">
        <div className="m-auto flex max-[1024px]:flex-col min-[1024px]:gap-[10rem]">
          <div className="text-justify max-[1280px]:text-center self-center max-[1024px]:text-center">
            <h3 className="max-w-[70.9rem] self-center text-[2.8rem] font-bold min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2.4rem] min-[500px]:text-[4.8rem] dark:text-white">Transforme seu negócio com as <span className="text-custom-salmon">ferramentas</span> do Entre-Linhas</h3>
            <p className="max-w-[50rem] text-[2.4rem] max-[660px]:py-[5rem] min-[660px]:py-[2rem] max-[1024px]:m-auto dark:text-gray-100">Nossas ferramentas são desenvolvidas totalmente com base em você e em seu negócio. Tarefas que levariam um tempo valioso, podem ser feitas em poucos segundos com o auxilio de nossas ferramentas. Nunca se perca o controle dos seus pedidos, e poupe tempo para orçamentar um pedido.</p>
          </div>
          <div>
            <img src="/HomeFerramenta.svg" className="m-auto max-w-[50rem] max-h-[80rem] w-[100%]"  />
          </div>
        </div>
      </div>




      {/* container8 - responsividade ok  */}

      {/* diminuir o tamanho do botão*/}
      <div className="bg-[#FFF2C1]">
        <div className="flex items-center box-border w-[100%] m-auto px-[3rem] lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
          <div className="m-auto flex flex-col gap-[1.6rem] items-center min-[840px]:flex-row">
            <div className="flex flex-col gap-[1.6rem] items-center">
              <h1 className="text-center text-custom-salmon font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]"> Aprenda também pelo <span className="text-custom-salmon">App</span></h1>
              <p className="m-auto max-w-[84.5rem] text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem] dark:text-gray-900">Você escolhe como quer estudar! O Entre-Linhas foi feito para você e por você. Carregue o conhecimento e o poder de transformar o seu negócio em qualquer lugar. </p>
              <img src="/Login.svg" className="h-[5.3rem]" />
            </div>
            <img src="/ArtCelular.svg" className="m-auto min-[220px]:h-[16rem] min-[300px]:h-[22rem] min-[360px]:h-[25rem] min-[400px]:h-[28rem] min-[475px]:h-[32rem] min-[500px]:h-[35rem] min-[600px]:h-[40rem] min-[640px]:h-[42rem] min-[720px]:h-[44rem] min-[1024px]:h-[40rem] min-[1280px]:h-[50rem]"></img>
          </div>
        </div>
      </div>

      {/* quando a página de dentro da plataforma mostrando as ferramentas eu coloco um nootbook ao invés do celular e em telas menores, mantenho o celular 

      {/* container6 responsividade quase ok, falta o carrosel */}







      {/* container 5  responsividade 95%*/}

      {/* colocar dentro de caixinhas */}

      <div className="py-[14rem] box-border w-[100%] m-auto flex flex-col gap-[5rem]">

        <div className="m-auto">
          <h1 className="text-center font-[Nunito] text-[2.8rem] text-custom-salmon min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem]">Por que<span className="text-black dark:text-white"> fazemos</span>?</h1>
          <br />
          <p className="max-w-[90.2rem] m-auto text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.4rem] dark:text-gray-100">Nascemos do sonho e da fome de crescimento dos profissionais de costura, trabalhamos para mudar o mundo textil e torná-lo melhor para eles!</p>
        </div>

        <div className="min-[900px]:flex justify-center">

          <div className="bg-white border solid rounded-[2rem] px-[1rem] flex flex-col justify-center items-center max-h-[58rem] dark:bg-zinc-800 dark:border-zinc-700">
            <div>
              <h3 className="py-[2.2rem] text-center font-[Nunito] text-[2.4rem] min-[425px]:text-[3.2rem] dark:text-white">Conhecimento</h3>
              <p className="max-w-[28rem] text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.1.8rem] dark:text-gray-100">Através da educação, buscamos mostrar aos nossos profissionais todo o seu potêncial como empreendedores de sucesso.</p>
            </div>
            <img src="/LineSalmon.svg" className="py-[1rem]" />
          </div>

          <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[5%] min-[1440px]:w-[10%]"></div>

          <div className="bg-white border solid rounded-[2rem] px-[1rem] flex flex-col justify-center items-center max-h-[58rem] dark:bg-zinc-800 dark:border-zinc-700">
            <div>
              <h3 className="py-[2.2rem] text-center font-[Nunito] text-[2.4rem] min-[425px]:text-[3.2rem] dark:text-white">Transformação</h3>
              <p className="max-w-[28rem] text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.1.8rem] dark:text-gray-100">Almejamos a transformação de profissionais da costura através da educação, permitindo que eles tenham impacto em seus negócios e comunidades.</p>
            </div>
            <img src="/LineYellow.svg" className="py-[1rem]" />
          </div>

          <div className="max-[899px]:hidden self-center border-dashed border-t-[2px] border-custom-salmon w-[5%] min-[1440px]:w-[10%]"></div>

          <div className="bg-white border solid rounded-[2rem] px-[1rem] flex flex-col justify-center items-center max-h-[58rem] dark:bg-zinc-800 dark:border-zinc-700">
            <div>
              <h3 className="py-[2.2rem] text-center font-[Nunito] text-[2.4rem] min-[425px]:text-[3.2rem] dark:text-white">Sustentabilidade</h3>
              <p className="max-w-[28rem] text-center min-[220px]:text-[1.6rem] min-[300px]:text-[1.8rem] min-[320px]:text-[2rem] min-[500px]:text-[2.1.8rem] dark:text-gray-100">Em busca de um mundo mais sustentável, prezamos pelo uso consciente de materiais. Em nossa trilha, reforçamos isso com materiais didáticos sobre técnicas sustentáveis.</p>
            </div>
            <img src="/LineTurq.svg" className="py-[1rem]" />
          </div>

        </div>



      </div>

      <div className="h-[50.9rem] py-[40rem]">
        <div className="flex flex-col items-center justify-center text-center box-border h-[90%] w-[100%] px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
          <h1 className="text-center font-[Nunito] text-[2.8rem] min-[425px]:text-[4rem] min-[1024px]:text-[4.8rem] dark:text-white">Confira <span className="text-custom-salmon">relatos</span> de quem já passou por aqui</h1>
          <div className="flex gap-10 min-[220px]:flex-col">
            <div className="flex justify-evenly gap-10">
              <img src="/left.svg" />
              <div className="flex justify-center">
                <img src="/Temporary.svg" className="max-w-[50%] min-[220px]:m-auto min-[900px]:max-w-[43.5rem]" />
                <div className="max-[1439px]:hidden flex flex-col m-auto gap-10">
                  <p className="text-[2.2rem]">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus bibendum, id sagittis lectus pulvinar. Etiam ultrices, velit non dictum fringilla, massa nulla pulvinar est, vitae malesuada dolor libero non metus. “</p>
                  <p className="text-[2.2rem] ml-auto font-bold text-custom-salmon">Angie Nonbine</p>
                </div>
              </div>
              <img src="/right.svg" />
            </div>
            <p className="text-[2.2rem] m-auto font-bold text-custom-salmon min-[1440px]:hidden">Angie Nonbine</p>
            <div className="min-[1440px]:hidden">
              <p className="text-[2.2rem] dark:text-gray-100">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod lectus eu purus bibendum, id sagittis lectus pulvinar. Etiam ultrices, velit non dictum fringilla, massa nulla pulvinar est, vitae malesuada dolor libero non metus. “</p>
              <p className="min-[220px]:hidden text-[2.2rem] mr-auto">Angie Nonbine</p>
            </div>
          </div>
        </div>
      </div>

      {/* <ul>
          {carousel.map((s, i) => (
            <li onClick={() => setActive(i)} key={i}><img src={s.url} alt={s.author} /></li>
          ))}
        </ul> */}



      <Footer />

    </div>
  )
}
