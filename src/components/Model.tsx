import { Check } from "@phosphor-icons/react";

export interface ModelProps {
  title: string;
  describe: string;
  _completed?: boolean;
  path?: String;
  irConteudo?: () => void;
  _disabled: boolean
}


export const Model = ({ title, describe, _completed = false, path, irConteudo, _disabled }: ModelProps) => {
  return (
    <div onClick={() => { !_disabled && irConteudo?.() }} style={_disabled ? { cursor: 'not-allowed' } : {}}>

      <div className="flex gap-[4rem] max-[600px]:px-10" style={_disabled ? { cursor: 'not-allowed' } : {}}>
        <div className="flex items-center gap-[0.5rem] w-full" style={_disabled ? { cursor: 'not-allowed' } : {}}>
          <p className={`font-bold cursor-pointer ${!_completed && "opacity-50"}`} style={_disabled ? { cursor: 'not-allowed' } : {}}>{title}</p>
          {_completed && <div className="bg-green-500 rounded-full p-1">
            <Check weight="bold" />
          </div>}
        </div>
      </div>
      <p className={`${!_completed && "opacity-50"} cursor-pointer max-md:hidden min-[600px]:px-5`} style={_disabled ? { cursor: 'not-allowed' } : {}}>{describe}</p>
    </div>
  )
}