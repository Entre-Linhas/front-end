import { IconProps } from "@phosphor-icons/react"

interface FooterProps {
icon: React.FC<IconProps>
}

export function Footer({icon:Icon}: FooterProps) {
return (
    <div className="py-[2rem] bg-[#C7C7C7]">
    <div className="items-center flex box-border w-[100%] px-[1.5rem] mx-auto sm:max-w-[] md:max-w-[] lg:max-w-[] xl:max-w-[1220px] 2xl:max-w-[1476px]">
      <div className="flex flex-col gap-[3.8rem] items-center w-[100%] py-[1.6rem]">
        <div className="text-[1.6rem] w-[100%] flex justify-between">
          <nav>
              <ul className="text-[1.8rem] font-bold">Sobre Nós</ul>
              <ul>Parceiros</ul>
              <ul>Segurança</ul>
              <ul>Educacional</ul>
          </nav>
          <nav>
              <ul className="text-[1.8rem] font-bold">Conta</ul>
              <ul>Entrar</ul>
              <ul>Comunidade</ul>
              <ul>Configurações</ul>
          </nav>
          <nav>
              <ul className="text-[1.8rem] font-bold">Suporte</ul>
              <ul>Acessibilidade</ul>
              <ul>Contato</ul>
          </nav>
          <nav>
              <ul className="text-[1.8rem] font-bold">Mapa do site</ul>
              <ul>Home</ul>
              <ul>Ferramentas</ul>
              <ul>Eventos</ul>
              <ul>Ajuda</ul>
              <ul>Sobre Nós</ul>
          </nav>
          <nav className="text-center">
              <ul className="text-[1.8rem] font-bold">Redes sociais</ul>
              <div className="flex gap-[1rem]">
                  <a>{Icon && <Icon className="text-black" size="32"/>}</a>
                  <a>{Icon && <Icon className="text-black" size="32"/>}</a>
                  <a>{Icon && <Icon className="text-black" size="32"/>}</a>
                  <a>{Icon && <Icon className="text-black" size="32"/>}</a>
              </div>
          </nav>
        </div>
              <h3 className="text-[1.8rem]">Copyright © 2023-2023 Entre Linhas</h3>
      </div>
    </div>
  </div>

)
}