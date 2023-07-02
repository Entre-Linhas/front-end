import { useState, useContext } from "react";
import { Sun, Moon } from "@phosphor-icons/react";
import { Input } from "../components/Input";
import { Header } from "../components/Header";
import { Context } from "../contexts/Context";
import { Modal } from "../components/Modal";
import { handleTheme, getTheme, theme } from "../utils/theme";

export const Configurar = () => {
   const { perfil, definirFotoPerfil, definirDescricao } = useContext(Context);
   const [descricao, setDescricao] = useState<string>("");
   const [showModal, setShowModal] = useState(false);
   const [selectedTheme, setSelectedTheme] = useState<"dark" | "light">(getTheme);
   const [redeSocial, setRedeSocial] = useState<any>();

   const images = [
      {
         src: "/16.png",
         alt: "Imagem 16"
      },
      {
         src: "/17.png",
         alt: "Imagem 17"
      },
      {
         src: "/18.png",
         alt: "Imagem 18"
      },
      {
         src: "/19.png",
         alt: "Imagem 19"
      },
      {
         src: "/20.png",
         alt: "Imagem 20"
      },
      {
         src: "/21.png",
         alt: "Imagem 21"
      },
      {
         src: "/22.png",
         alt: "Imagem 22"
      },
      {
         src: "/23.png",
         alt: "Imagem 23"
      },
      {
         src: "/24.png",
         alt: "Imagem 24"
      },
      {
         src: "/25.png",
         alt: "Imagem 25"
      },
      {
         src: "/26.png",
         alt: "Imagem 26"
      },
      {
         src: "/27.png",
         alt: "Imagem 27"
      },
      {
         src: "/28.png",
         alt: "Imagem 28"
      },
      {
         src: "/29.png",
         alt: "Imagem 29"
      },
      {
         src: "/30.png",
         alt: "Imagem 30"
      },
   ];

   function handleModal() {
      setShowModal(!showModal);
   }

   function changeSelectedTheme(newTheme: "dark" | "light") {
      handleTheme(newTheme)
      setSelectedTheme(newTheme);
      return theme;
   }


   return (
      <>
         <Header />

         <div className="m-auto flex max-md:flex-col justify-center py-[10rem] gap-[6rem]   lg:max-w-[99rem] xl:max-w-[122rem] 2xl:max-w-[147.6rem]">
            <div className="h-96 max-w-[25rem] w-full flex flex-col items-center gap-10 max-md:m-auto">
               <img
                  src={perfil.foto}
                  className="max-w-[100%] h-full rounded-full cursor-pointer"
                  onClick={handleModal}
                  alt="Foto de perfil"
                  role="imagem"
               />
               <span
                  className="font-semibold text-[2.4rem]"
                  title="nome do usuário"
               >{`Seu perfil, ${perfil.usuario.nome}`}</span>
            </div>

            <div className="flex flex-col gap-8 box-border w-[100%] py-[5rem] px-10">
               {/* inputs e outras coisas. */}

               <div>
                  <h2 className="font-semibold text-[2rem] " title="Perfil público">Perfil público</h2>
                  <hr />
               </div>
               <div className="max-w-[90rem]">
                  <label htmlFor="nome" title="Seu nome">Seu nome</label>
                  <br />
                  <Input type="text" id="nome" value={perfil.usuario.nome} disabled aria-labelledby="nome"/>
               </div>

               {/* nesse input aqui, colocar a função pra adicionar uma descrição. */}
               <div className="max-w-[40rem]  ">
                  <label htmlFor="desc">Sua descrição</label>
                  <br />
                  <textarea
                  name="desc"
                  onChange={(e) => setDescricao(e.target.value)}
                  id="desc"
                  placeholder={perfil.serviço || "Insira uma descrição"}
                  className="text-black w-full py-3 px-2 rounded-xl shadow-lg resize-y focus:border-custom-salmon"
                  role="texto de descrição"
                  />
               </div>

               <div className="max-w-[40rem]">
                  <label htmlFor="desc">Redes Sociais</label>
                  <br />
                  <Input id="desc" type="text" placeholder="Link da Rede Social" aria-labelledby="descrição" />
               </div>

               <div>
                  <h2 className="font-bold text-[2rem]" title="Configurções da conta">Configurações da conta</h2>
                  <hr />
               </div>

               <div className="max-w-[60rem]">
                  <label htmlFor="desc">E-mail</label>
                  <br />
                  <Input id="desc" value={perfil.usuario.email} disabled aria-labelledby="descrição"/>
               </div>

               <div className="max-w-[30rem] flex flex-col">
                  <span title="senha">Senha</span>
                  <button className="max-w-[15rem] px-8 py-4 rounded-xl bg-[#62B8AF] text-white" aria-roledescription="botão alterar">Alterar</button>
               </div>

               <div className="max-w-[60rem]">
                  <label htmlFor="desc">CPF</label>
                  <br />
                  <Input id="desc" type="text" value={perfil.usuario.cpf} aria-labelledby="descrição" />
               </div>

               <div className="max-w-[60rem]">
                  <label htmlFor="rede">Endereço</label>
                  <br />
                  <div className="flex gap-5">
                     <Input id="red" type="url" value={perfil.usuario.endereco} disabled aria-labelledby="descrição" />
                  </div>
               </div>

               <div>
                  <h2 className="font-bold text-[2rem]" >Aparência</h2>
                  <hr />
               </div>

               <div className="flex gap-10">
                  <button className="flex items-center gap-2 border-2 border-zinc-300 hover:border-turquoise-300 dark:hover:hover:border-turquoise-300 dark:border-zinc-700 dark:bg-zinc-800 bg-white px-8 py-3 rounded-xl shadow-md" style={{
                     borderColor: selectedTheme === "light" ? "#62B8AF" : undefined
                  }} aria-roledescription="botão modo claro" onClick={() => changeSelectedTheme("light")}>
                  <Sun size={24} className="text-[#FFB125]" />
                  <span >Modo claro</span>
                  </button>

                  <button className="flex items-center gap-2 border-2 border-zinc-300 hover:border-turquoise-300 dark:hover:hover:border-turquoise-300 dark:border-zinc-700 dark:bg-zinc-800 bg-white px-8 py-3 rounded-xl shadow-md" style={{
                     borderColor: selectedTheme === "dark" ? "#62B8AF" : undefined
                  }} aria-roledescription="botão modo escuro" onClick={() => changeSelectedTheme("dark")}>
                  <Moon size={24} className="text-gray-500" />
                  <span>Modo escuro</span>
                  </button>
               </div>

               <button className="max-w-[20rem] px-8 py-4 rounded-xl bg-[#62B8AF] text-white" onClick={() => definirDescricao(descricao)} aria-roledescription="Botão salvar alterações">Salvar alterações</button>
            </div>

            <Modal _showModal={showModal} _close={handleModal} _maxWidth="max-w-[90rem]" >
               <div className="flex flex-wrap overflow-auto gap-8 mx-14 my-10">
                  {images.map((image) => <img onClick={() => definirFotoPerfil(image.src)} className="h-52 w-52 cursor-pointer" src={image.src} alt={image.alt} />)}
               </div>
               <button 
                  className="self-end max-w-[20rem] px-10 py-4 rounded-xl bg-[#62B8AF] text-white"
                  onClick={handleModal}
               >
                  Salvar
               </button>
            </Modal>
         </div>
      </>
   );
};
