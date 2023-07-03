import { Header } from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { CheckCircle } from "@phosphor-icons/react";
import { Context } from "../contexts/Context";
import { Modal } from "../components/Modal";
import { useContext } from "react";

export const Pagamento = () => {
  const [AlterForm, setAlterForm] = useState(1);
  const [auth, setAuth] = useState(Context)

  const ProximoForm = () => {
    setAlterForm(AlterForm + 1);
  };

  const [showModal, setShowModal] = useState(true);

    function handleModal() {
        setShowModal(!showModal)
    }

  return (
    <>
      <Header />
      <div className="text-[2.2rem] m-auto max-w-[63rem] py-[15rem]">
        {AlterForm === 1 && (
          <div className="px-3 flex flex-col items-center">
            <h1 className="font-bold text-[3.6rem]">Dados cadastrais</h1>
            <br />
            <p className="text-center py-10">
              Para iniciar o pagamento, insira seus dados cadastrais. Em seguida você será direcionado(a) para o pagamento.
            </p>

            <div className="space-y-2">
              <div className="py-5">
                <label htmlFor="nomeCompleto" className="block text-[#575757] dark:text-gray-100" >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nomeCompleto"
                  placeholder="Seu nome"
                  className="placeholder-[#62B8AF] w-full max-w-[60rem] px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon"
                  aria-labelledby="nome completo"
                  disabled 
                />
              </div>
              <div className="py-5">
                <label htmlFor="email" className="block text-[#575757] dark:text-gray-100">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="seu.email.aqui@example.com"
                  className="placeholder-[#62B8AF] w-full max-w-[60rem] px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon" aria-labelledby="email"
                  disabled 
               />
              </div>
              <div className="flex gap-12 max-[450px]:flex-col">
                <div className="w-full max-w-[28.5rem] py-5">
                  <label htmlFor="celular" className="block text-[#575757] dark:text-gray-100">
                    Celular com DDD
                  </label>
                  <input
                    type="tel"
                    id="celular"
                    placeholder="(00) 00000-0000"
                    className="placeholder-[#62B8AF] w-full px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon" aria-labelledby="celular"
                    disabled 
                  />
                </div>

                <div className="w-full max-w-[28.5rem] py-5">
                  <label htmlFor="cpf" className="block text-[#575757] dark:text-gray-100">
                    CPF
                  </label>
                  <input
                    type="text"
                    id="cpf"
                    placeholder="000.000.000-00"
                    className="placeholder-[#62B8AF] w-full px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon" aria-labelledby="cpf"
                    disabled 
                  />
                </div>
              </div>
            </div>

            <div className="py-10">
              <button className="px-[6rem] py-5 bg-[#62B8AF] rounded-[1rem] text-white" title="continuar pagamento" onClick={ProximoForm}>
                Continuar
              </button>
            </div>
          </div>
        )}

        {AlterForm === 2 && (
          <div className="px-3 flex flex-col items-center">
            <h1 className="font-bold text-[3.6rem]">Pagamento</h1>
            <br />
            <p className="text-center py-10">
              Agora insira seus dados para realizar o pagamento. Iremos te avisar quando a compra for concluída com sucesso.
            </p>

            <div className="space-y-2">
              <div className="py-5">
                <label htmlFor="nomeImpresso" className="block text-[#575757] dark:text-gray-100">
                  Nome impresso no cartão
                </label>
                <input
                  type="text"
                  id="nomeImpresso"
                  placeholder="Matheus Passos da Silva"
                  className="placeholder-[#62B8AF] w-full max-w-[60rem] px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon"
                  disabled 
              />
              </div>
              <div className="py-5">
                <label htmlFor="numeroCartao" className="block text-[#575757] dark:text-gray-100">
                  Número do cartão 
                </label>
                <input
                  type="text"
                  id="numeroCartao"
                  placeholder="0000 0000 0000 0000"
                  className="placeholder-[#62B8AF] w-full max-w-[60rem] px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon" aria-labelledby="numero do cartão"
                  disabled 
                />
              </div>
              <div className="flex gap-12 max-[450px]:flex-col">
                <div className="w-full max-w-[28.5rem] py-5">
                  <label htmlFor="validade" className="block text-[#575757] dark:text-gray-100">
                    Validade
                  </label>
                  <input
                    type="text"
                    id="validade"
                    placeholder="MM/AA"
                    className="placeholder-[#62B8AF] w-full px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon" aria-labelledby="validade"
                    disabled 
                  />
                </div>

                <div className="w-full max-w-[28.5rem] py-5">
                  <label htmlFor="cvv" className="block text-[#575757] dark:text-gray-100">
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    placeholder="000"
                    className="placeholder-[#62B8AF] w-full px-5 py-3 rounded-[0.8rem] shadow-[0px_6px_4px_rgba(0,6,4,0.1)] focus:outline-none focus:border-[1px] border-custom-salmon" aria-labelledby="cvv"
                    disabled 
                 />
                </div>
              </div>
            </div>

            <div className="py-10">
              <button className="px-[6rem] py-5 bg-[#62B8AF] rounded-[1rem] text-white" title='concluir pagamento' onClick={ProximoForm}>
                Concluir
              </button>
            </div>
          </div>
        )}

        {AlterForm === 3 && (
          <div className="px-3 flex flex-col items-center">
            <h1 className="font-bold text-[3.6rem]">Pagamento concluído com sucesso!</h1>
            <br />
            <p className="text-center py-10">
              Obrigado pela compra. Vamos começar a costurar o seu futuro com as ferramentas do Entre Linhas?
            </p>

            <CheckCircle size={250} className="text-[#62B8AF]" />

            <div className="py-10 flex flex-col items-center gap-5">
              <button className="px-[6rem] py-5 bg-[#62B8AF] rounded-[1rem] text-white">
                
                <Link to={auth ? "/gerenciamento" : "/signin"} title="ir para as ferramentas">Ir para as ferramentas</Link>
              </button>
              <span className="text-[1.8rem] text-[#8F8F8F] underline dark:text-gray-100">
                <Link to="/" title='voltar para página inicial'>Voltar para a página inicial</Link>
              </span>
            </div>
          </div>
        )}
          <Modal _showModal={showModal} _close={handleModal}  >
              <div className="flex flex-col items-center">
              <h1 className="text-center font-semibold text-[2.8rem] dark:text-white darkbg-zinc-800 text-custom-salmon">Não se preocupe!</h1>
                <p style={{ width: "-webkit-fill-available"}} className="py-10 text-[1.8rem]">Todas as ferramentas do Entre Linhas estão disponíveis gratuitamente para testes durante um mês! A opção de pagamento foi desativada, o que significa que você pode conhecer e desfrutar de todas as nossas funcionalidades apenas se cadastrando.</p>
                <div className="flex gap-10 text-white"> 
                  <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md"><Link to="/signup" title="Saiba mais">Registrar</Link></button>
                  <button className="bg-turquoise-400 color-white text-2xl py-5 px-6 rounded-md"><Link to="/signin" title="Saiba mais">Login</Link></button>
               </div>
              </div>
            </Modal>
      </div>
    </>
  );
};
