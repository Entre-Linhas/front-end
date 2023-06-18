import { Header } from "../components/Header";

export const Trilha = () => {
return (
<>  
    <Header />
    <div className="h-screen flex flex-col justify-center py-[10rem]">
            <h1 className="m-auto text-[3.6rem] font-bold">Bem vindo, à Trilha Educacional</h1>
            <div className="flex h-[50vh] justify-center gap-[1rem]"> 
                <div className="bg-[#FF6464] px-[1.3rem] py-[1rem] max-h-[2.4rem] max-w-[19rem] rounded-[2rem] flex items-center text-white"><p>Meu Negócio - 100%</p></div>
                <div className="flex flex-col justify-center items-center relative h-screen">
    <div className="w-[3rem] h-[3rem] rounded-[3rem] bg-custom-salmon"></div>
    <div className="bg-gradient-to-b from-[#FF6464] via-[rgba(255, 100, 100, 0.42)] to-[#FFFFFF] h-screen w-[1rem] relative">
     
     
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-3/4 w-[3rem] h-[3rem] rounded-[3rem] bg-green-500"></div>
  </div>
</div>


                <div className="self-center bg-[#FF6464] px-[1.3rem] py-[1rem] max-h-[2.4rem] max-w-[19rem] rounded-[2rem] flex items-center text-white"><p>Meu Negócio - 100%</p></div>
            </div>

    </div>

</>
)
}