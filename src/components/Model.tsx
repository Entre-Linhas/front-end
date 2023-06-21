import { CheckCircle } from "@phosphor-icons/react"
import {IconProps } from "@phosphor-icons/react"

interface ModelProps {
title: string
describe: string
time: string
icon?: React.FC<IconProps>;
}


export const Model = ({icon: Icon, title, describe, time }:ModelProps) => {
return (
    <div>

<div className="flex gap-[4rem]">
<div className="flex gap-[0.5rem]"> 
  <p className="font-bold">{title}</p>
  {Icon && <Icon size={22} weight="fill" className="text-green-600" />}
 </div>
<span className="text-[1.4rem] text-[#A1A1AA]">{time}</span>
</div>
<span>{describe}</span>
</div>
)
}