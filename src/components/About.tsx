import { LinkedinLogo, GithubLogo, FileArrowDown } from "@phosphor-icons/react";


interface AboutProps {
StyleAbout?:  "primary" | "secondary";
img?: string
nome: string
desc: string
Linkedin: string
GitHub: string

} 

                // entre chaves é chamado os atributos da Propriedade
export const About = ({StyleAbout = "primary", img, nome, desc, Linkedin, GitHub}: AboutProps) => {

return ( 
   
    <div className={`flex items-center maxgap-[4rem] m-auto ${StyleAbout === "primary" ? "max-lg:flex-col max-lg:px-3" : "max-lg:flex-col-reverse max-lg:px-3"}`}>
      
        {/* if else */}
        {StyleAbout === "primary" ? 
        
        (
        <> 
            <div className="">
                 <img src={img} className="max-w-[30rem] w-full rounded-full"/>
             </div>

            <div className="px-10">
            <h1 className="max-lg:py-10 text-[2.4rem] font-semibold max-lg:text-center">{nome}</h1>
                <p className="text-[2rem] max-w-[70rem] py-5">{desc}</p>
                <div className="flex gap-5 py-10">
                   <a href={Linkedin} target="_blank"> 
                    <img src="/Linkedin.png" className="h-[3.2rem]"/>
                   </a>
                   <a  href={GitHub} target="_blank"> 
                   <img src="/GitHub.png" className="h-[3.2rem]"/>
                   </a>
                 
                </div> 
            </div>
        </>
        ) 
        : 
        (
        <>
            <div>
            <h1 className="max-lg:py-10 text-[2.4rem] font-semibold max-lg:text-center">{nome}</h1>
            
                <p className="py-5 text-[2rem] max-w-[70rem]">{desc}</p>
                <div className="flex gap-5 py-10 max-lg:m-auto">
                <a href={Linkedin} target="_blank"> 
                    <img src="/Linkedin.png" className="h-[3.2rem]"/>
                   </a>
                   <a  href={GitHub} target="_blank"> 
                   <img src="/GitHub.png" className="h-[3.2rem]"/>
                   </a>
                </div> 
            </div>
            
            <div>
            <img src={img} className="max-w-[30rem] w-full rounded-full"/>
            </div>
        </>
        )
        }


    </div>
    
    



    )

}