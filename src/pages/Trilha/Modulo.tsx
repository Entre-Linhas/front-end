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
          {conteudos.map(({ title, describe, time, _completed}, i) => (
              <Model
                  key={i}
                  title={title}
                  describe={describe}
                  time={time}
                  _completed={_completed}
            />
          ))}
        </div>
        <button className="border-none outline-none mx-11 w-3 visible h-[406px] bg-red-500 relative">
          <img src="/btnIndicator.svg" alt="Btn" className="absolute -left-[1.30rem] -top-4 bg-red-500 p-2 rounded-full"/>
        </button>
        <div className="flex w-2/4 " style={{flexDirection: rest.style?.flexDirection === "row" ? "row" : "row-reverse"}}>
          <span>{_titleModulo + " - " + _progress}%</span> {/* Meu Negócio - 0% */}
          <div />
        </div>
      </div>
    )
}