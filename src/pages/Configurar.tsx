import { Header } from "../components/Header"
import { Context } from "../contexts/Context"
import { useContext } from "react";
import { Sun, Moon } from "@phosphor-icons/react";
import { useState } from "react";
import { Modal } from "../components/Modal";

export const Configurar = () => {
const { perfil, definirFotoPerfil, definirDescricao } = useContext(Context)
const [descricao, setDescricao] = useState<string>("")
const [showModal, setShowModal] = useState(false);

const images = ["/16.png",
    "/17.png",
    "/18.png",
    "/19.png",
    "/20.png",
    "/21.png",
    "/22.png",
    "/23.png",
    "/24.png",
    "/25.png",
    "/26.png",
    "/27.png",
    "/28.png",
    "/29.png",
    "/30.png"
  ]


function handleModal() {
    setShowModal(!showModal)
}
return ( 
<>
    <Header />
 
    <div className="m-auto flex max-md:flex-col justify-center py-[10rem] gap-[6rem]   lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
        
          <div className="h-96 max-w-[25rem] w-full flex flex-col items-center gap-10 max-md:m-auto">
             <img src={perfil.foto} className="max-w-[100%] h-full rounded-full cursor-pointer" onClick={handleModal}  alt="Foto de perfil" role="imagem"/>
             <span className="font-semibold text-[2.4rem]" title="nome do usuário">{`Seu perfil, ${perfil.usuario.nome}`}</span>  
         </div> 



        <div className="flex flex-col gap-8 box-border w-[100%] py-[5rem] px-10">
            {/* inputs e outras coisas. */}
            
            <div>
                <h2 className="font-semibold text-[2rem] " title="Perfil público">Perfil público</h2>
                <hr/>
            </div>
            <div className="max-w-[90rem]"> 
            <label htmlFor="nome" title="Seu nome">Seu nome</label>
             <br/>
            <input id="nome" type="text" placeholder={perfil.usuario.nome} className="text-black w-full py-3 px-2 rounded-xl shadow-lg pointer-events-none" aria-labelledby="nome"/>
            </div>
         
         {/* nesse input aqui, colocar a função pra adicionar uma descrição. */}
         <div className="max-w-[40rem]  "> 
            <label htmlFor="desc">Sua descrição</label>
             <br/>
            <textarea name="desc" onChange={(e) => setDescricao(e.target.value)} id="desc" placeholder={ perfil.serviço || "Insira uma descrição"} className="text-black w-full py-3 px-2 rounded-xl shadow-lg resize-y focus:border-custom-salmon" role="texto de descrição"/>
         </div>
       
         <div className="max-w-[40rem]"> 
            <label htmlFor="desc">Redes Sociais</label>
             <br/>
            <input id="desc" type="text" placeholder="teste" className="text-black w-full py-3 px-2 rounded-xl shadow-lg pointer-events-none" aria-labelledby="descrição"/>
         </div>
         
        <div>
          <h2 className="font-bold text-[2rem]" title="Configurções da conta">Configurações da conta</h2>
          <hr/>
        </div>
         
         <div className="max-w-[60rem]"> 
            <label htmlFor="desc">E-mail</label>
             <br/>
            <input id="desc" type="text" placeholder={perfil.usuario.email} className="text-black w-full py-3 px-2 rounded-xl shadow-lg pointer-events-none" aria-labelledby="descrição"/>
         </div>
        
         
         <div className="max-w-[30rem] flex flex-col"> 
             <span title="senha">Senha</span>
             <button className="max-w-[15rem] px-8 py-4 rounded-xl bg-[#62B8AF] text-white" role="botão alterar" >Alterar</button>
         </div>

         <div className="max-w-[60rem]"> 
            <label htmlFor="desc">CPF</label>
             <br/>
            <input id="desc" type="text" placeholder={perfil.usuario.cpf} className="text-black w-full py-3 px-2 rounded-xl shadow-lg pointer-events-none" aria-labelledby="descrição"/>
         </div>

         <div className="max-w-[60rem]"> 
            <label htmlFor="desc">Endereço</label>
             <br/>
             <div className="flex gap-5"> 
            <input id="desc" type="text" placeholder={perfil.usuario.endereco} className="text-black w-full py-3 px-2 max-w-[60rem] rounded-xl shadow-lg pointer-events-none" aria-labelledby="descrição"/>
             
            </div>
         </div>

          <div>
           <h2 className="font-bold text-[2rem]" title="Aparência">Aparência</h2>
           <hr/>
          </div>

         <div className="flex gap-10">
         <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-xl shadow-md" role="botão modo claro">
                <Sun size={24} className="text-[#FFB125]"/>
               <span className="dark:text-gray-600" title="modo claro">Modo claro</span>
            </button>

            <button className="flex items-center gap-2 bg-white px-8 py-3 rounded-xl shadow-md" role="botão modo escuro">
                <Moon size={24} className="text-gray-500"/>
               <span className="dark:text-gray-600" title="modo escuro">Modo escuro</span>
            </button>
         </div>

         <button className="max-w-[20rem] px-8 py-4 rounded-xl bg-[#62B8AF] text-white" onClick={() => definirDescricao(descricao)} role="Botão salvar alterações">Salvar alterações</button>
         
        </div>

   
        <Modal _showModal={showModal} _close={handleModal} _maxWidth="max-w-[90rem]">
                <div className="flex flex-wrap overflow-auto gap-8 mx-14 my-10">
                 {images.map((image) => <img onClick={() => definirFotoPerfil(image)} className="h-52 w-52 cursor-pointer" src={image}/>)}
                </div>
                <button className="self-end max-w-[20rem] px-10 py-4 rounded-xl bg-[#62B8AF] text-white" onClick={handleModal}>Salvar</button>
            </Modal>
    </div>
   
</>
)
}