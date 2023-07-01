import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Linking } from '../components/Linking';
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { Acordes } from "../components/Acordes";

export default function Precificacao() {
    return( 
        <>
            <Header />



            <div className="text-3xl flex h-[100dvh] gap-5 py-[10rem] max-lg:flex-col">
            <Menu SelectPage="Precificacao" />


            <div className=" py-10 flex flex-col flex-1 max-w-[80rem]  mt-16 m-auto max-lg:px-[1rem] px-[3rem]">
          
          <h1 className="font-bold">Precificação</h1>
          <p>Adicione itens usados no seu produto e calcule o preço dele.</p>


         <div className="w-full text-black h-[80rem] bg-white px-5">

         {/* <div>
            <span>Nome do produto: {}</span>
            <hr/>
         </div>
         <div>
            <span>Materiais usados</span>
            <hr/>
         </div>
         <div>
            <span>Nome do produto: {}</span>
            <hr/>
         </div> */}

        </div>


        
               
              
      
     
    

      
     



        </div>
        </div>
       
      
        
        </>
   
        
    )
}