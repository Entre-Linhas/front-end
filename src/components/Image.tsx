import { HTMLAttributes, } from "react"

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    source: string
}

export const Image = ({ source, ...rest }: ImageProps) => {

    return (
        <div className="rounded-[12px]">
            <img src={source} {...rest}></img>
        </div>

    )
}

// rest trás todo o restante