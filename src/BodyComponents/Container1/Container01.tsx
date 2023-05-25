import { Conteudo } from './Conteudo'

export const Container01 = () => {
    return (
      //  div container
        <div className="bg-custom-yellow w-screen h-[565px] flex items-center"> 
         

          <div className='w-[102px]'>
            {/* div pra manter o conteúdo sempre distante da borda */}
          </div>
          <Conteudo />

        <div className="float-right w-[1000px] h-[576px] flex items-end">
          <img className="w-[1000px]" src='/Banner1.svg'></img>
        </div>
        
        </div>
        // fim div container 01
    );
}

