
import { Tag, Storefront, ShoppingCart } from "@phosphor-icons/react"
import { Linking } from "./Linking";

interface MenuProps {
    SelectPage?: "Gerenciamento" | "Precificacao" | "Fornecedores";
    }

export const Menu = ({SelectPage = "Gerenciamento"}: MenuProps) => {

return (

    <div className="flex flex-col w-[300px] max-w-[300px]">
    <div className="px-10">
      <h2 className="font-bold text-2.2rem">Ferramentas</h2>
      <div className="px-5 py-5 space-y-5 font-medium">
        <div className={` px-3 flex items-center gap-2 ${SelectPage === "Precificacao" ? "bg-white border solid border-[#CCCCCC] dark:text-gray-900 rounded-[0.8rem]" : " "}`}>
          <Tag size={32} />
          <span className=""><Linking to="/Precificacao" title="Precificacao"/></span>
        </div>
        <div className={` px-3 flex items-center gap-2 ${SelectPage === "Gerenciamento" ? "bg-white border solid border-[#CCCCCC] dark:text-gray-900  rounded-[0.8rem]": " "}`}>
          <Storefront size={32} />
          <span><Linking to="/Gerenciamento" title="Gerenciamento de Pedidos"/></span>
        </div>
        <div className={` px-3 flex items-center gap-2 ${SelectPage === "Fornecedores" ? "bg-white border solid border-[#CCCCCC] dark:text-gray-900 rounded-[0.8rem]" : " "}`}>
          <ShoppingCart size={32} />
          <span>Fornecedores</span>
        </div>
      </div>
    </div>
  </div>
)
}