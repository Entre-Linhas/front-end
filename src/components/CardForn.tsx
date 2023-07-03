interface CardFornProps{
    title: string
    image: string
    }


export const CardForn = ({title, image}: CardFornProps) => {

return (
<>
    
    <div className="py-20 bg-white flex flex-col rounded-[2rem] border-2 border-[#E3E3E3] text-center justify-evenly px-[1.6rem] dark:bg-zinc-800 dark:border-zinc-700 dark:text-white max-w-[36.2rem] min-[1024px]:min-w-[26.5rem] min-[1024px]:max-w-[29rem] min-[1280px]:min-w-[36.2rem]">
        <div className="max-w-[100%] m-auto"> 
            <img src={image}></img>
        </div>
        <p className="font-bold dark:text-white">{title}</p>
    </div>
   


</>
)
}