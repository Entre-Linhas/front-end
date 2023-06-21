import { Header } from "../components/Header";
import { Tag, Storefront, ShoppingCart, CaretDown } from "@phosphor-icons/react";

var nome_pedido = "Roupas da Juliana";
var valor_pedido = 170;
var dtentrega_pedido = 0;
var nome_cliente = "teste";
var desc_produtos = "testee";

export const Gerenciamento = () => {
return (
<>
<Header />
<div className="flex flex-wrap min-h-[900px] gap-4 py-[10rem] max-[860px]:flex-col">
    <div className="flex flex-col w-[300px] max-w-[300px]">
      <div className="px-10">
        <h2 className="font-bold text-2.2rem">Ferramentas</h2>
        <div className="px-5 py-5 space-y-5 font-medium">
          <div className="flex items-center gap-2">
            <Tag size={32} />
            <span>Precificação</span>
          </div>
          <div className="flex items-center gap-2">
            <Storefront size={32} />
            <span>Gerenciamento de Pedidos</span>
          </div>
          <div className="flex items-center gap-2">
            <ShoppingCart size={32} />
            <span>Fornecedores</span>
          </div>
        </div>
      </div>
    </div>

    {/* Coluna 2: */}
    <div className="flex flex-col flex-1 max-w-[60rem] mt-16 m-auto px-[2rem]">
      <h1 className="text-2.2rem font-bold">Gerenciamento de Pedidos</h1>
      <p>Aqui você encontra os pedidos pendentes, em andamento e concluídos.</p>

      <div className="py-4">
        <input type="search" className="px-2 w-full shadow-md" placeholder="Buscar pedidos" />
      </div>
      <div className="py-12">
        <button className="bg-[#62B8AF] w-full text-white py-4 rounded-0.5rem">
          + Novo pedido
        </button>
      </div>

      <div>
        <div className="py-3 bg-white w-full flex items-center justify-between">
          <span className="px-5 text-2.2rem">{nome_pedido}</span>
          <div className="flex items-center px-5">
            <span className="px-5 text-2.2rem">R$ {valor_pedido}</span>
            <div className="rounded-full h-2.5rem w-2.5rem bg-green-500"></div>
          </div>
        </div>

        {/* esconder essa abaixo e só mostrar quando o usuário clicar no outro botão */}

        <div className="shadow-md bg-white px-12 py-8 ">

          <ul className="text-2rem">
            <li className="flex gap-5 py-4">
              <span>Nome do pedido:</span>
              <span className="text-gray-400">{nome_pedido}</span>
            </li>

            <li>
              <div className="flex gap-5 items-center">
                <span>Status:</span>
                <div className="rounded-full h-2.5rem w-2.5rem bg-green-500"></div>
              </div>
            </li>

            <li className="flex gap-5 py-4">
              <span>Data de Entrega:</span>
              <span className="text-gray-400">{dtentrega_pedido}</span>
            </li>
            <li className="flex gap-5 py-4">
              <span>Nome do Cliente:</span>
              <span className="text-gray-400">{nome_cliente}</span>
            </li>
            <li>
              <span>Descrição dos Produtos:</span>
              <br />
              <span className="text-gray-400">{desc_produtos}</span>
            </li>
          </ul>
          <div className="mt-full">
            <div className="text-1.8rem flex justify-between py-1.2rem">
              <span>Preço total:</span>
              <span>R$ {valor_pedido}</span>
            </div>
            <hr />
            <br />
            <button className="text-red-600">Excluir produto</button>
          </div>

        </div>

        <button className="bg-[#62B8AF] w-full text-white py-2 rounded-0.5rem flex items-center justify-center">
          <CaretDown size={32} />
        </button>
      </div>

    </div>
  </div>
</>
)
}