import { Header } from "../components/Header";
import { useState } from "react";
import { Link } from "react-router-dom"; 
import { CheckCircle } from "@phosphor-icons/react";
import { Context } from "../contexts/Context";
import { Modal } from "../components/Modal";

export const Pagamento = () => {
  const [AlterForm, setAlterForm] = useState(1);

  const ProximoForm = () => {
    setAlterForm(AlterForm + 1);
  };

  const [showModal, setShowModal] = useState(false);

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
                
                <Link to="/Gerenciamento" title="ir para as ferramentas">Ir para as ferramentas</Link>
              </button>
              <span className="text-[1.8rem] text-[#8F8F8F] underline dark:text-gray-100">
                <Link to="/" title='voltar para página inicial'>Voltar para a página inicial</Link>
              </span>
            </div>
          </div>
        )}
          <Modal _showModal={showModal} _close={handleModal}>
                <div className="flex flex-col overflow-auto gap-8 mx-14 my-10">
                    <h2 className="text-custom-salmon font-semibold text-3xl text-center">Com dúvida em qual opção escolher?</h2>
                    <p className="dark:text-gray-900">Se você pretende iniciar um negócio, a primeira opção foi feita para você. Ela irá te ensinar desde como identificar seu cliente até o que o seu produto tem de especial.<br /><br />Já se você tem um negócio, a segunda opção é a melhor. Você poderá escolher em que ponto da trilha irá iniciar seus estudos.</p>
                </div>
            </Modal>
      </div>
    </>
  );
};
