import { SignIn } from '@phosphor-icons/react';
import { Button } from './Button';


export const Header = () => {
return (


<div className="bg-custom-yellow flex w-screen h-[67px] items-center justify-between">

{/* Abaixo fica a nossa logo */}

<div className="w-80 flex items-center justify-around">
    <p className="leading-[30px] text-custom-salmon font-[Sacramento] text-[40px]">Entre Linhas</p>
    <img src='/bobina.png' />
</div>

{/* Aqui começa o Nav */}

<div className="flex gap-10 font-Nunito font-[22px]">
    <ul>Home</ul>
    <ul>Ferramentas</ul>
    <ul>Eventos</ul>
    <ul>Ajuda</ul>
    <ul>Sobre Nós</ul>
</div> 

{/* Abaixo fica o componente de botões, a gente utiliza ele em todo o projeto, e personaliza conforme nossa necessidade através de props */}

<div className='flex gap-2'>
    <Button title='Login' typeStyle='secondary' icon={SignIn} />
    <Button title='Registro' icon={SignIn}/>
</div>

</div>
)
}

