import { IconProps } from "@phosphor-icons/react"

interface CardProps {
icon?: React.FC<IconProps>
title: string
text: string
typeStyle?: "primary" | "secondary"
}


export const Card = ({icon:Icon, title, text, typeStyle = "primary"}:CardProps) => {
return (
        <div className={`bg-white flex flex-col rounded-[20px] border-2 border-[#E3E3E3] text-center justify-evenly px-[1.6rem] ${typeStyle === "primary" ? "basis-2/4 max-w-[36.2rem]" : "basis-2/4 min-h-[30.8rem] max-w-[27.3rem]"}`}>
          {Icon && <Icon className="text-custom-salmon self-center" size="50" />}
          <div className="flex flex-col gap-[2rem]">
            <h1 className="font-bold text-[2.2rem] font-[Nunito]">{title}</h1>
            <p className="text-[2.2rem]">{text}</p>
          </div>
        </div>
)
}