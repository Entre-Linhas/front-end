import { Logo } from './Logo'
import { Navs } from './Navs'
import { Buttons } from './Buttons'

export const HHeader = () => {
return (

<div className="bg-custom-yellow flex w-screen h-[67px] items-center justify-between">
    <Logo />
    <Navs />
    <Buttons />
</div>


);
}

