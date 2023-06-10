import { IconBase } from '@phosphor-icons/react';
import { Button } from './Button';


export const Header = () => {
return (


<header className="px-4 py-[1rem] bg-white flex w-[100%] h-[auto] items-center justify-between">

<div className="w-auto flex items-center gap-[1rem] py-[1rem]">
    <p className="leading-[30px] text-custom-salmon font-[Sacramento] min-[220px]:text-[2.2rem] min-[240px]:text-[2.5rem] min-[320px]:text-[3.2rem] min-[426px]:text-[3.6rem] min-[600px]:text-[3.8rem] ">Entre Linhas</p>
    <img src='/bobina.png' className="min-[220px]:h-[2rem] min-[240px]:h-[2.2rem] min-[320px]:h-[2.8rem] min-[426px]:h-[3rem] min-[600px]:h-[3.rem]"/>
</div>

<nav className="flex gap-[25px] font-Nunito font-medium text-[2.2rem] mx-auto text-custom-salmon min-[220px]:hidden min-[900px]:flex text-[2.2rem]">
    <ul>Home</ul>
    <ul>Eventos</ul>
    <ul>Ajuda</ul>
    <ul>Ferramentas</ul>
</nav> 



<div className='flex gap-[1.2rem] min-[220px]:hidden min-[900px]:flex'>
    <Button title='Login' typeStyle='secondary' />
    <Button title='Registro'/>
</div>

    <div className="flex gap-[1.5rem] min-[900px]:hidden">
        <div className="flex min-[320px]:gap-10 max-[320px]:gap-5">
            <img src="/User.svg" className=" max-h-[1.5rem] self-end min-[300px]:max-h-[1.8rem] min-[360px]:max-h-[2rem] min-[500px]:self-center"/>
            <img src="/MenuIcon.svg"/>
        </div>
        <span className="text-custom-salmon text-[2.2rem] min-[220px]:hidden min-[500px]:flex">Menu</span>
    </div>

</header>
)
}

