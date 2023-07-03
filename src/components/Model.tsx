import { Check } from "@phosphor-icons/react";

export interface ModelProps {
  title: string;
  describe: string;
  _completed?: boolean;
  path?: String;
  irConteudo?: () => void;
}


export const Model = ({ title, describe, _completed = false, path, irConteudo }: ModelProps) => {
  return (
    <div onClick={irConteudo}>

      <div className="flex gap-[4rem] max-[600px]:px-10">
        <div className="flex items-center gap-[0.5rem] w-full">
         <p className={`font-bold ${!_completed && "opacity-50"}`}>{title}</p>
          {_completed && <div className="bg-green-500 rounded-full p-1">
            <Check  weight="bold"/>
          </div>}
        </div>
      </div>
      <p className={`${!_completed && "opacity-50"} max-md:hidden min-[600px]:px-5`}>{describe}</p>
    </div>
  )
}