import { Header } from "../components/Header";
import { Footer } from "../components/Footer"
import Material from "../components/Material";
import { Button } from "../components/Button"
import Dica from "../components/Dica"




export default function Sobre() {
return (

    <>
        <Header />

                <div>
                
                    <div className="flex items-center w-[100%] h-[40vh]">
                        <img src="/Sobre.jpg" className="w-[100%] h-[100%] object-cover" />
                    </div>  

                    <div className="flex flex-col gap-[4.6rem] py-[2rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[4.5em] px-[2rem]">
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
                    </div>

                </div>
          
          
    
        <Footer />
    </>
)
}