import { IconProps } from "@phosphor-icons/react";
import { HTMLAttributes } from "react";

interface InputProps extends HTMLAttributes<HTMLInputElement> {
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
}


export function Input({ leftElement, rightElement, ...rest }: InputProps) {
    return (
        <div className="w-full flex items-center bg-white border-[1px] border-x-gray-200 rounded-lg p-2 min-[640px]:w-[90%] min-[800px]:w-[80%]">
            {leftElement && leftElement}
            <input className="bg-transparent border-none" {...rest}/>
            {rightElement && rightElement}
        </div>
    )
}