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
   
    <div className={`flex items-center gap-[4rem] m-auto ${StyleAbout === "primary" ? "max-lg:flex-col max-lg:px-3" : "max-lg:flex-col-reverse max-lg:px-3"}`}>
      
        {/* if else */}
        {StyleAbout === "primary" ? 
        
        (
        <> 
            <div className="h-[30rem] w-[30rem] bg-black rounded-full">
            
             </div>

            <div>
            <h1 className="text-[2.4rem] font-semibold">{nome}</h1>
                <div className="flex gap-5 py-10">
                   <a href={Linkedin} target="_blank"> 
                    <LinkedinLogo size={32} weight="fill" className="text-[#0A66C2]"/>
                   </a>
                   <a  href={GitHub} target="_blank"> 
                     <GithubLogo size={32} weight="fill" className="dark:text-white"/>
                   </a>
                   <a target="_blank"> 
                    <FileArrowDown size={32} weight="fill" className="text-[#62B8AF]" />
                   </a>
                </div> 
                <p className="text-[2rem] max-w-[70rem]">{desc}</p>
            </div>
        </>
        ) 
        : 
        (
        <>
            <div>
            <h1 className="text-[2.4rem] font-semibold">{nome}</h1>
                <div className="flex gap-5 py-10">
                   <a href={Linkedin} target="_blank"> 
                    <LinkedinLogo size={32} weight="fill" className="text-[#0A66C2]"/>
                   </a>
                   <a  href={GitHub} target="_blank"> 
                     <GithubLogo size={32} weight="fill" className="dark:text-white"/>
                   </a>
                   <a target="_blank"> 
                    <FileArrowDown size={32} weight="fill" className="text-" />
                   </a>
                </div> 
                <p className="text-[2rem] max-w-[70rem]">{desc}</p>
            </div>
            
            <div className="h-[30rem] w-[30rem] bg-black rounded-full">
            
            </div>
        </>
        )
        }


    </div>
    
    



    )

}