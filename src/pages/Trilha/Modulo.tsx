import { HTMLAttributes } from "react";
import { Model, ModelProps } from "../../components/Model";


interface ModuloProps extends HTMLAttributes<HTMLDivElement> {
    conteudos: ModelProps[];
    _titleModulo: string;
    _progress: number;
}

export function Modulo({ conteudos, _titleModulo, _progress, ...rest}: ModuloProps) {
    return (
      <div className="flex flex-row-reverse item " {...rest}>
        <div className="flex flex-col gap-7 w-2/4">
          {conteudos.map(({ title, describe, _completed, irConteudo}, i) => (
              <Model
                  key={i}
                  title={title}
                  describe={describe}
                  _completed={_completed}
                  irConteudo={irConteudo}
            />
          ))}
        </div>
        <button className="border-none outline-none min-[460px]:mx-11 w-3 visible h-[406px] bg-red-500 relative">
          <img src="/btnIndicator.svg" alt="Btn" className="absolute -left-[1.30rem] -top-4 bg-red-500 p-2 rounded-full"/>
        </button>
        <div className="flex w-2/4 " style={{flexDirection: rest.style?.flexDirection === "row" ? "row" : "row-reverse"}}>
          <span className="max-[460px]:mx-11">{_titleModulo + " - " + _progress}%</span> {/* Meu Negócio - 0% */}
          <div />
        </div>
      </div>
    )
}