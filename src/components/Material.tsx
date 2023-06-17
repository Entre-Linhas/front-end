import { Button } from "./Button"

var content = []

interface MaterialProps {
title: string
image?: string;
content: string
}


export default function Material ({image, title, content}: MaterialProps) {
return (
<>
     <div className="m-auto lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem] py-[10rem] text-center">
     <h1 className="text-[2.4rem] font-semibold">{title}</h1>
        <div className="flex flex-col items-center px-[2rem]">
            <div>
                <img src={image} className="m-auto py-[4rem] max-w-[100%]"/>
            </div>
            
            <p className="text-justify max-w-[80.9rem] max-w-[70%]">{content}</p>
            <div className="flex gap-[3.5rem] py-[3.5rem]">
             <Button title="anterior"/>
             <Button title="próximo"/>
            </div>
         </div>
     </div>
</>


)

}