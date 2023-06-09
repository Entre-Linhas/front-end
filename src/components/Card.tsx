import { IconProps } from "@phosphor-icons/react"

interface CardProps {
icon?: React.FC<IconProps>
title: string
text: string
typeStyle?: "primary" | "secondary"
}


export const Card = ({icon:Icon, title, text, typeStyle = "primary"}:CardProps) => {
return (
        <div className={`bg-white flex flex-col rounded-[2rem] border-2 border-[#E3E3E3] text-center justify-evenly px-[1.6rem] ${typeStyle === "primary" ? "max-w-[36.2rem] max-[899px]:border-none rounded-none py-5 m-auto min-[900px]:max-w-[25rem] min-h-[30rem] min-[1024px]:max-w-none" : "basis-2/4 min-h-[30.8rem] max-w-[27.3rem]"}`}>
          {Icon && <Icon className="text-custom-salmon self-center" size="50" />}
          <div className="flex flex-col gap-[2rem]">
            <h1 className="font-bold text-[2.2rem] font-[Nunito]">{title}</h1>
            <p className="text-[2.2rem]">{text}</p>
          </div>
        </div>
)
}