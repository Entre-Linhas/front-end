import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    leftElement?: React.ReactNode;
    rightElement?: React.ReactNode;
}


export function Input({ leftElement, rightElement, ...rest }: InputProps) {
    return (
        <div className="w-full max-w-[55rem] flex items-center bg-white border-[1px] border-x-gray-200 rounded-lg p-2 dark:bg-zinc-800 dark:border-zinc-700 ">
            {leftElement && leftElement}
            <input className="flex-1 bg-transparent border-none text-inherit dark:text-white disabled:opacity-50 disabled:cursor-not-allowed "  {...rest} />
            {rightElement && rightElement}
        </div>
    )
}