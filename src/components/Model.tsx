import { Check } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export interface ModelProps {
  title: string;
  describe: string;
  time: string;
  _completed?: boolean;
  path?: String;
}


export const Model = ({ title, describe, time, _completed = false, path }: ModelProps) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => {navigate("/Conteudo")}}>

      <div className="flex gap-[4rem]">
        <div className="flex items-center gap-[0.5rem] w-full" onClick={() => {}}>
         <p className={`font-bold ${!_completed && "opacity-50"}`}>{title}</p>
          {_completed && <div className="bg-green-500 rounded-full p-1">
            <Check  weight="bold"/>
          </div>}
          <span className="text-[1.4rem] text-[#A1A1AA] ml-auto">{time}</span>
        </div>
      </div>
      <span className={`${!_completed && "opacity-50"}`}>{describe}</span>
    </div>
  )
}