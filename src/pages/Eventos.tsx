import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export default function Eventos() {
    return (
        <>
        
            <Header />
            <div className="flex items-center py-[10rem] justify-center max-[1023px]:flex-col ">

                <div className="flex flex-col gap-[5rem] px-[5rem] max-[360px]:px-[1rem] ">
                    <h1 className="font-semibold m-auto text-[2.8rem] min-[425px]:text-[3rem] min-[1024px]:text-[4.8rem] dark:text-white">Eventos do <span className="text-custom-salmon">Entre-Linhas</span></h1>

                    <p className="max-w-[73.5rem] text-[2.2rem]">Aqui você encontrará informações sobre nossos próximos eventos, projetados para conectar e inspirar profissionais da costura e moda. Desde palestras e workshops até encontros sociais, nossa programação de eventos é projetada para atender às suas necessidades.
                    </p>

                    <p className="max-w-[73.5rem] text-[2.2rem]">
                        Oferecemos oportunidades de aprendizado, networking e troca de ideias com outros membros da nossa comunidade. Junte-se a nós e tenha a chance de conhecer outros profissionais apaixonados pela costura e moda, compartilhar suas experiências e descobrir novas ideias para o seu negócio.
                    </p>

                    <p className="max-w-[73.5rem] text-[2.2rem]">
                        Fique atento à nossa agenda de eventos e não perca a oportunidade de participar de um de nossos encontros emocionantes!
                    </p>

                    <button className="bg-[#62B8AF] px-[6rem] py-[1.5rem] text-white text-[1.8rem] rounded-[1rem]" title="Acompanhe os eventos">Acompanhe!</button>
                </div>
               

                <img style={{ width: 480, height: 320 }} src="/Eventos.svg" className="py-[1.5rem] max-[1340px]:max-w-[60rem] max-[1170px]:max-w-[55rem] max-[1100px]:max-w-[48rem] max-[1023px]:max-w-[100%] max-[1023px]:m-auto "  alt="Ilustração de pessoas conversando"
  role="imagem ilustrativa"/>

            </div>
            <Footer />
            
        </>
    )
}