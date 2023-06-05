import { Button } from './Button';


export const Header = () => {
return (


<header className="px-4 py-[0.6rem] bg-custom-yellow flex w-[100%] h-[auto] items-center justify-between">

<div className="w-auto flex items-center gap-[2rem]">
    <p className="leading-[30px] text-custom-salmon font-[Sacramento] text-[4rem]">Entre Linhas</p>
    <img src='/bobina.png' />
</div>

<div className="flex gap-[25px] font-Nunito text-[2.2rem] mx-auto">
    <ul>Home</ul>
    <ul>Ferramentas</ul>
    <ul>Eventos</ul>
    <ul>Ajuda</ul>
    <ul>Sobre Nós</ul>
</div> 

<div className='flex gap-[1.2rem]'>
    <Button title='Login' typeStyle='secondary' />
    <Button title='Registro'/>
</div>

</header>
)
}

