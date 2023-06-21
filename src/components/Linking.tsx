import { HTMLAttributes } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";


interface LinkingProps extends NavLinkProps {
    title: string;
}

export function Linking({ title, ...rest }: LinkingProps) {
    return (
        <NavLink className={({ isActive  }) => {return `hover:after:opacity-100 hover:after:w-full after:bg-red-400 after:absolute after:opacity-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 after:left-0 after:bottom-0 ${isActive && "after:w-full after:opacity-100"}`}} {...rest}>
            <span className="text-current">{title}</span>
        </NavLink>
    )
}