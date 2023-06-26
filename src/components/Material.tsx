import { useState } from 'react';
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';

var content1 = "A definição clara do seu negócio é essencial para o sucesso. É importante entender exatamente o que sua empresa oferece e a quem se destina. A definição do negócio inclui identificar a sua proposta de valor única, seus produtos ou serviços, o público-alvo e como você se diferencia da concorrência. É fundamental ter uma visão clara do seu negócio para poder desenvolver estratégias eficazes de marketing, vendas e crescimento. Comece definindo o seu negócio com clareza e, em seguida, trabalhe em direção a seus objetivos, mantendo sempre em mente o que torna sua empresa única."

var content2 = "vendas e crescimento. Comece definindo o seu negócio com clareza e, em seguida, trabalhe em direção a seus objetivos, mantendo sempre em mente o que torna sua empresa única."

var content3 = "A definição clara do seu negócio é essencial para o sucesso. É importante entender exatamente o que sua empresa oferece e a quem se destina. A definição do negócio inclui identificar a sua proposta de valor única, seus produtos ou serviços, o público-alvo e como você se diferencia da concorrência. É fundamental ter uma visão clara do seu negócio para poder desenvolver estratégias de marketing,"

var content4 = "teste"
interface MaterialProps {
  title: string;
  image?: string;
  content?: string;
}

export default function Material({ image, title, content }: MaterialProps) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedContent, setDisplayedContent] = useState(content1);
  const contents = [
    content1,
    content2,
    content3,
  ];

  const handlePreviousClick = () => {
    setCurrentIndex(currentIndex - 1);
    setDisplayedContent(contents[currentIndex - 1]);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex + 1);
    setDisplayedContent(contents[currentIndex + 1]);
  };

  return (
    <>
      <div className="m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[10rem] text-center">
        
        <h1 className="text-[2.4rem] font-semibold">{title}</h1>
        <div className="flex flex-col items-center px-[2rem]">
          <div>
            <img src={image} className="m-auto py-[4rem] max-w-[100%]" />
          </div>

          <p className="text-justify max-w-[80.9rem]">
            {displayedContent}
          </p>
          <div className="flex gap-[3.5rem] py-[3.5rem]">
            <Button
              title="anterior"
              onClick={handlePreviousClick}
              disabled={currentIndex === 0}
            />
            <Button
              title="próximo"
              onClick={handleNextClick}
              disabled={currentIndex === contents.length - 1}
            />
          </div>
        </div>
     
      </div>
    </>
  );
}
