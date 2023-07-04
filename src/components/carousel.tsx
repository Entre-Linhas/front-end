import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const Carousel = () => {
  const carousel = [
    {
      image: "/DonaDivina.jpg",
      name: "Dona Divina",
      testimonial: "Sabe aquela bagunça que era antes? A plataforma me salvou! Agora consigo organizar e acompanhar todos os pedidos de costura sem stress. Tudo de forma fácil e intuitiva. Atender os clientes nunca foi tão tranquilo!",
    },
    {
      image: "/JoãoAraujo.jpg",
      name: "João Araújo",
      testimonial: "As ferramentas de gerenciamento de pedidos da plataforma são uma bênção para mim. Agora consigo acompanhar cada etapa dos meus pedidos de costura de maneira simples e eficiente. Isso me permite atender meus clientes com agilidade e manter tudo sob controle, sem estresse.",
    },
    {
      image: "/GabrielAugusto.jpg",
      name: "Gabriel Augusto",
      testimonial: "Essas ferramentas de gerenciamento de pedidos são uma maravilha! Agora eu consigo acompanhar tudo, sem confusão. Economizei um tempão! Os clientes adoram a minha agilidade em atendê-los.",
    },
    {
      image: "/MariAlves.jpg",
      name: "Mari Alves",
      testimonial: "O conteúdo de empreendedorismo da plataforma me deu um up incrível! Descobri estratégias de marketing, finanças e planejamento que fizeram toda a diferença para o meu negócio de costura. Estou confiante de que estou no caminho certo para o sucesso.",
    },
    {
      image: "/DonaLurdinha.jpg",
      name: "Dona Lurdinha",
      testimonial: " Depois que meu neto me apresentou essa plataforma, tudo ficou mais fácil. É impressionante como as ferramentas de gerenciamento de pedidos da plataforma facilitaram a minha vida. Agora eu controlo tudo de forma simples, consigo me comunicar melhor com os clientes e a satisfação deles é garantida. Sucesso total!",
    },
    {
      image: "Jessica.jpg",
      name: "Jéssica Menezes",
      testimonial: "As ferramentas de gerenciamento de pedidos da plataforma simplificaram minha vida como costureira. Agora, posso acompanhar facilmente meus pedidos, comunicar-me com meus clientes e garantir que tudo seja entregue no prazo. Meus clientes estão satisfeitos e minha reputação está crescendo rapidamente.",
    },
    
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {carousel.map((s, i) => (
        <SwiperSlide key={i}>
          <div className="h-[50.9rem] py-[40rem]">
            <div className="flex flex-col items-center justify-center text-center box-border h-[90%] w-[100%] px-[1.5rem] mx-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
              <div className="flex gap-10 min-[220px]:flex-col">
                <div className="flex justify-evenly gap-10">
                  <div className="flex justify-center">
                    {s.image && (
                      <img
                        src={s.image}
                        className="max-w-[50%] min-[220px]:m-auto min-[900px]:max-w-[43.5rem]"
                        alt="Imagem do usuário"
                        role="img"
                      />
                    )}
                  </div>
                </div>
                <p className="text-[2.2rem] m-auto font-bold text-custom-salmon">
                  {s.name}
                </p>
                <div>
                  <p className="text-[2.2rem] dark:text-gray-100">
                    {s.testimonial}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
