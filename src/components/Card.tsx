import { IconProps } from "@phosphor-icons/react"

interface CardProps {
icon?: React.FC<IconProps>
title: string
text: string
typeStyle?: "primary" | "secondary"
}


export const Card = ({icon:Icon, title, text, typeStyle = "primary"}:CardProps) => {
return (
        <div className={`bg-white flex flex-col rounded-[2rem] border-2 border-[#E3E3E3] text-center justify-evenly px-[1.6rem] ${typeStyle === "primary" ? "max-w-[36.2rem] min-[1024px]:min-w-[26.5rem] min-[1280px]:min-w-[36.2rem] py-[2rem]" : "min-h-[30.8rem] max-w-[27.3rem] min-w-[27.3rem]"}`}>
          {Icon && <Icon className="text-custom-salmon self-center" size="50" />}
          <div className="flex flex-col gap-[2rem]">
            <h1 className="font-bold text-[2.2rem] font-[Nunito] max-[900px]:min-w-[23.7rem]">{title}</h1>
            <p className="text-[2.2rem] max-[900px]:min-w-[23.7rem]">{text}</p>
          </div>
        </div>
)
}