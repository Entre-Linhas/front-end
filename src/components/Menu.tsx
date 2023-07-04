
import { Tag, Storefront, ShoppingCart } from "@phosphor-icons/react"
import { NavLink } from "react-router-dom";

interface MenuProps {
    SelectPage?: "Gerenciamento" | "Precificacao" | "Fornecedores";
    }

export const Menu = ({SelectPage = "Gerenciamento"}: MenuProps) => {

return (

    <div className="flex flex-col w-[300px] max-w-[300px]">
    <div className="px-10">
      <h2 className="font-bold text-2.2rem">Ferramentas</h2>
      <div className="px-5 py-5 space-y-5 font-medium">
        <div className={` px-3 flex items-center gap-2 ${SelectPage === "Precificacao" ? "bg-white border solid border-[#CCCCCC] dark:bg-zinc-800  rounded-[0.8rem]" : " "}`} >
          <Tag size={32} />
          <span>
              <NavLink to="/Precificacao" title="Ir para a ferramenta de precificação" role="link">Precificação</NavLink>
            </span>
        </div>
        <div className={` px-3 flex items-center gap-2 ${SelectPage === "Gerenciamento" ? "bg-white border solid border-[#CCCCCC] dark:bg-zinc-800  rounded-[0.8rem]": " "}`}>
          <Storefront size={32} />
          <span>
              <NavLink to="/Gerenciamento" title="Gerenciamento de Pedidos" role="link">Gerenciamento de Pedidos</NavLink>
            </span>
        </div>
        <div className={` px-3 flex items-center gap-2 ${SelectPage === "Fornecedores" ? "bg-white border solid border-[#CCCCCC] dark:bg-zinc-800  rounded-[0.8rem]" : " "}`}>
          <ShoppingCart size={32} />
          <span title="Fornecedores" role="link">
          <NavLink to="/Fornecedores" title="Nossos fornecedores parceiros" role="link"> 
            Fornecedores
            </NavLink>
          </span>
        </div>
      </div>
    </div>
  </div>
)
}