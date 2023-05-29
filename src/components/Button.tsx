import { IconProps } from "@phosphor-icons/react"
import { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    title: string;
    icon?: React.FC<IconProps>; 
    typeStyle?: "primary" | "secondary";
}


export function Button({ title, icon: Icon, typeStyle = "primary", ...rest}: ButtonProps) {
    return (
        <button
            className={`flex flex-row items-center py-2 gap-1 rounded-lg w-fit ${typeStyle === "primary" ? "bg-custom-salmon px-5" : "border-solid border-2 px-[14px] border-custom-salmon"}`}
            {...rest}
        >
            {Icon && <Icon color={typeStyle === "primary" ? "white" : "#FF6464"} size={22} />}
            <span className={`font-medium text-lg ${typeStyle === "primary" ? "text-white" : "text-custom-salmon"} `}>{title}</span>
        </button>
    )
}

/* <div className="flex gap-5">
            <button className="text-custom-salmon font-Nunito border-solid border-2 rounded-lg p-3 border-custom-salmon">Login</button>
            <button className="bg-custom-salmon text-white font-Nunito border-solid border-2 rounded-lg border-custom-salmon">Registrar</button>
        </div> */

