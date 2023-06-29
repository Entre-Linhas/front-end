import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import Material from "../components/Material";
import { Button } from "../components/Button"
import Dica from "../components/Dica"
import { About } from "../components/About";



export default function Sobre() {
    return (

        <>
            <Header />

            <div>

                <div className="flex items-center w-[100%] h-[40vh]">
                    <img src="/Sobre.jpg" className="w-[100%] h-[100%] object-cover" />
                </div>

                <div className="flex flex-col gap-[4.6rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[4.5em] px-[2rem]">
                    <div>
                        <h1 className="text-[3.2rem] min-[1800px]:text-[4.8rem] font-bold">Sobre Nós</h1>
                        <p className="text-[2rem]">Nossa empresa busca revolucionar a área de costura, capacitando empreendedores e estabelecendo uma rede sustentável. Queremos ser referência na formação de empreendedores, promovendo uma cultura colaborativa e transformando a área de forma positiva. Acreditamos na inovação, colaboração, empoderamento, sustentabilidade e aprendizagem contínua. Nosso compromisso é com o sucesso de nossos empreendedores e a transformação positiva da área.</p>
                    </div>

                    <div>
                        <h3 className="text-[2.4rem] font-semibold">Nossa missão</h3>
                        <p className="text-[2rem]">Ensinar empreendedorismo a profissionais da costura para que eles consigam transformar seus negócios, e conectá-los através de uma rede saudável que promova a melhora e a união geral da área.</p>
                    </div>

                    <div>
                        <h3 className="text-[2.4rem] font-semibold">Nossa visão</h3>
                        <p className="text-[2rem]">Ser referência na formação de empreendedores do ramo de costura, promover uma cultura colaborativa e transformar a área de forma positiva, capacitando e desenvolvendo empreendedores.</p>
                    </div>

                    <div>
                        <h3 className="text-[2.4rem] font-semibold">Nossos valores</h3>
                        <p className="text-[2rem]">Inovação, Colaboração, Empoderamento, Sustentabilidade, Aprendizagem contínua.</p>
                    </div>


                        {/* essa aqui */}


                    <div className="py-20">
                        <h1 className="text-[3.2rem] min-[1800px]:text-[4.8rem] font-bold">Nossa equipe</h1>
                        <p className="text-[2rem]">A nossa equipe do Entre Linhas é composta por pessoas verdadeiramente incríveis, que são a essência do nosso projeto. São indivíduos talentosos e apaixonados, que trabalham arduamente para oferecer um conteúdo de qualidade e tornar o Entre Linhas o que ele é hoje.</p>
                    </div>


                    <About  nome="Matheus Passos" GitHub="https://github.com/DevPassosMatheus" Linkedin="https://www.linkedin.com/in/passosmatheus/" desc="teste" />
                    <About  StyleAbout="secondary"  GitHub="https://github.com/gabrielaasouza" Linkedin="https://www.linkedin.com/in/gabrielaasouza/"  nome="Gabriela Souza" desc="teste" />
                    <About  nome="Kevyn Aciole"  GitHub="https://github.com/KevynAciole" Linkedin="https://www.linkedin.com/in/kevyn-aciole-15a446254/" desc="Inovação, Colaboração, Empoderamento, Sustentabilidade, Aprendizagem contínua porque eu adoro comer batata e chorar no choveiro às terças feiras."/>
                    <About  StyleAbout="secondary"  GitHub="https://github.com/Skinzin" Linkedin="https://www.linkedin.com/in/vinicius-scosta/" nome="Vinicius Costa" desc="teste"/>
                    <About  nome="Thailany Pereira"  GitHub="https://github.com/ThailanyP" Linkedin="https://www.linkedin.com/in/thailany-pereira-neves-santos/" desc="teste"/>
                    <About  StyleAbout="secondary"  GitHub="https://github.com/RaffaGR" Linkedin="https://www.linkedin.com/in/raffavf/" nome="Rafael Viana" desc="teste"/>
                    <About  nome="Matheus Assis"  GitHub="https://github.com/M4THEUSDev" Linkedin="https://www.linkedin.com/in/matheusassisdev/" desc="teste"/>
                    
                
                </div> 

                </div> 
            <Footer />
        </>
    )
}