import { Image } from "./Image"

interface ContainerProps {
title: string
text: string
percolor?: string
perword?: string
image: string
}


export const Container = ({image, title, text, percolor, perword}:ContainerProps) => {
    return (

        <div className="flex items-center px-[9.6rem] justify-between py-[10rem]">
  
          <div className="w-[50%]">
            <h1 className="text-[4.8rem] font-[Nunito] text-custom-salmon">{title} <span className={percolor}>{perword}</span></h1>
            <p className="text-[2.2rem]">{text}</p>
          </div>
         
          <Image source={image}/>
            
        </div>
    )
}