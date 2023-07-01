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


    return (
      <div className="m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[10rem] text-center">
        <h1 className="text-[2.4rem] font-semibold">{atividades?.materia?.tituloPag || "...Carregando"}</h1>
        <div className="flex flex-col items-center px-[2rem]">
          <div>
            <img src={image} className="m-auto py-[4rem] max-w-[100%]" alt="Material" />
          </div>
          <p className="text-justify max-w-[80.9rem] ">
            {atividades?.materia?.txt1 || "...Carregando"}
          </p>
          <div className="flex gap-[3.5rem] py-[3.5rem]">
            <Button title="anterior"onClick={() => decrementarProgressoAtividade()} />
            <Button title="próximo" onClick={() => incrementarProgressoAtividade()} />
          </div>
        </div>
      </div>
    );
  }

