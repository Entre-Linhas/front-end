export const CardsC2 = () => {
return (

 <div className="h-[231px] flex w-screen justify-evenly">


        <div className="w-[362px] h-[231px] rounded-[20px] border-2 border-[#E3E3E3] text-center m-[-45px] items-center">
          {/* ícone dos cards */}
          <div className="w-[100%] h-[80px] flex justify-center items-center bg-white rounded-[20px]">
             <img className="w-[40px] h-[50px]" src="/iconCard1.svg" alt="ícone de uma bolsa representando o aprendizado de empreededorismo, uma 'bagagem de conhecimento'. "></img>
          </div>
          <h1 className="font-bold text-[22px] font-[Nunito]">Aprenda a empreender</h1>
          <p className="font-[22px]">Aqui você encontrará tudo que precisa para transformar o seu negócio!</p>
        </div>
</div>

)
}