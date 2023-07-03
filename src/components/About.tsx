import { LinkedinLogo, GithubLogo, FileArrowDown } from "@phosphor-icons/react";


interface AboutProps {
StyleAbout?:  "primary" | "secondary";
img?: string
nome: string
desc: string
Linkedin: string
GitHub: string
cargo?: string
} 

                // entre chaves é chamado os atributos da Propriedade
export const About = ({StyleAbout = "primary", img, nome, desc, Linkedin, GitHub, cargo}: AboutProps) => {

return ( 
   
    <div className={`flex items-center maxgap-[4rem] m-auto ${StyleAbout === "primary" ? "max-lg:flex-col max-lg:px-3" : "max-lg:flex-col-reverse max-lg:px-3"}`}>
      
        {/* if else */}
        {StyleAbout === "primary" ? 
        
        (
        <> 
            <div className="">
                 <img src={img} className="max-w-[30rem] w-full rounded-full"  alt="imagem de um membro da equipe" role="imagem"/>
             </div>

            <div className="px-10">
            <div className="flex flex-col max-lg:py-14"> 
                <h1 className="text-[2.4rem] font-semibold max-lg:text-center">{nome}</h1>
                <h5 className="max-lg:text-center">{cargo}</h5>
            </div>
                <p className="text-[2rem] max-w-[70rem] py-5">{desc}</p>
                <div className="flex gap-5 py-10">
                   <a href={Linkedin} target="_blank"> 
                    <img src="/linkedin.png" className="h-[3.2rem]"  alt="imagem de um membro da equipe" role="imagem de logo"/>
                   </a>
                   <a  href={GitHub} target="_blank"> 
                   <img src="/github.png" className="h-[3.2rem]" alt="logo github" role="imagem de logo"/>
                   </a>
                 
                </div> 
            </div>
        </>
        ) 
        : 
        (
        <>
            <div>
            <div className="flex flex-col max-lg:py-14"> 
                <h1 className="text-[2.4rem] font-semibold max-lg:text-center">{nome}</h1>
                <h5 className="max-lg:text-center">{cargo}</h5>
            </div>
            
                <p className="py-5 text-[2rem] max-w-[70rem]">{desc}</p>
                <div className="flex gap-5 py-10 max-lg:m-auto">
                <a href={Linkedin} target="_blank"> 
                    <img src="/linkedin.png" className="h-[3.2rem]"  alt="imagem de um membro da equipe" role="imagem"/>
                   </a>
                   <a  href={GitHub} target="_blank"> 
                   <img src="/github.png" className="h-[3.2rem]" alt="logo github" role="imagem do logo"/>
                   </a>
                </div> 
            </div>
            
            <div>
            <img src={img} className="max-w-[30rem] w-full rounded-full" alt="imagem de um membro da equipe" role="imagem do logo"/>
            </div>
        </>
        )
        }


    </div>
    
    



    )

}