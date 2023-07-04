import React, { useContext } from 'react';
import { Button } from "./Button";
import { useNavigate } from 'react-router-dom';
import { Context } from '../contexts/Context';

interface MaterialProps {
  title: string;
  image?: string;
  content?: string;
}

export default function Material({ image, title, content }: MaterialProps) {
  const navigate = useNavigate();
  const { atividades, incrementarProgressoAtividade, decrementarProgressoAtividade } = useContext(Context);

  const paragrafos = atividades?.materia?.txt1.split("\n") as string[];

  return (
    <div className="m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[10rem] text-center">
      <h1 className="text-[2.4rem] font-semibold">{atividades?.materia?.tituloPag || "...Preparando as agulhas"}</h1>
      <div className="flex flex-col items-center px-[2rem]">
        <div>
          <img src={atividades?.materia?.img} className="m-auto py-[4rem] max-w-[100%]" alt="imagem ilustrativa do assunto" role='img' />
        </div>

        {!atividades?.materia?.txt1 ?
          (<p className="text-justify max-w-[80.9rem] ">
            "Costurando o caminho"
          </p>)
          : paragrafos.map(
            item =>
              <p className="text-justify max-w-[80.9rem] mb-[1rem]" key={item}>
                {item}
              </p>)}

        <div className="flex gap-[3.5rem] py-[3.5rem]">
          <Button titleBt="anterior" onClick={() => decrementarProgressoAtividade()} title="Ir para o anterior" />
          <Button titleBt="próximo" onClick={() => incrementarProgressoAtividade()} title="ir para o próximo" />
        </div>
      </div>
    </div>
  );
}

