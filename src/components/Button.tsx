import { IconProps } from "@phosphor-icons/react"
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title: string;
    icon?: React.FC<IconProps>; 
    typeStyle?: "primary" | "secondary"
    customClass?: string
}


export function Button({ title, icon: Icon, typeStyle = "primary", ...rest}: ButtonProps) {
    document.body.style.fontSize = "initial"
    return (
        <button 
            className={`flex flex-row items-center py-[1rem] px-[1.4rem] gap-1 rounded-lg w-fit ${typeStyle === "primary" ? "bg-custom-salmon disabled:bg-custom-salmon-300 disabled:cursor-not-allowed px-5" : "border-solid border-2 px-[1.4rem] border-custom-salmon"}`}
            {...rest}
        >
            {Icon && <Icon color={typeStyle === "primary" ? "white" : "#FF6464"} size={22} />}
            <span className={`font-medium text-[1.6rem] ${typeStyle === "primary" ? "text-white" : "text-custom-salmon"} `}>{title}</span>
        </button>
    )
}



