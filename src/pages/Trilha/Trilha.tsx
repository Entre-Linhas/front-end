import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Context } from "../../contexts/Context";
import { Modulo } from "./Modulo";



export const Trilha = () => {
  const { perfil, setPerfil } = useContext(Context);
  const { atividades, atualizarAtividade, nivelamento } = useContext(Context);
  const [showModal, setShowModal] = useState(true);

  function handleModal() {
    setShowModal(!showModal)
  };
  const matDefLink = (novoMat: any) => {
    /* perfil.progresso += 25.0;
    perfil.trilhas.atividades.materia = 1;
    console.log(perfil); */
    
    const newPerfil = {
      ...perfil,
      progresso: perfil.progresso + 25
    }
    setPerfil && setPerfil(newPerfil)
 
    const newAtividades = {
      ...atividades,
      progresso: novoMat,
      materia: {
        idMateria: novoMat
      },
      pratica: {
        idPratica: 1
      },
      dica: {
        idDica: 1
      }
    }
    atualizarAtividade(newAtividades);
  }

  const navigate = useNavigate();

  const handleIrConteudo = (conteudo: any) => {

    matDefLink(conteudo);
    navigate("/Conteudo");
  };

  const [clientesVendas] = useState(0);

  const [andamento1, setAndamento1] = useState(false);
  const [andamento2, setAndamento2] = useState(false);
  const [andamento3, setAndamento3] = useState(false);
  const [andamento4, setAndamento4] = useState(false);
  const [andamento5, setAndamento5] = useState(false);
  const [andamento6, setAndamento6] = useState(false);
  const [andamento7, setAndamento7] = useState(false);
  const [andamento8, setAndamento8] = useState(false);

  useEffect(() => {
    if (nivelamento >= 25) {
      setAndamento1(true);
    }
    if (nivelamento >= 50) {
      setAndamento2(true);
    }
    if (nivelamento >= 75) {
      setAndamento3(true);
    }
    if (nivelamento >= 100) {
      setAndamento4(true);
    }
    if (clientesVendas >= 25) {
      setAndamento5(true);
    }
    if (clientesVendas >= 50) {
      setAndamento6(true);
    }
    if (clientesVendas >= 75) {
      setAndamento7(true);
    }
    if (clientesVendas >= 100) {
      setAndamento8(true);
    }
  }, [nivelamento, clientesVendas]);

  return (
    <>
    <div className="overflow-hidden h-screen">
      <Header style={{ position: "relative" }} />
      <div className="flex flex-col overflow-auto h-full snap-y snap-mandatory">
        <h1 className="py-[3.5rem] mx-auto text-[3.6rem] font-bold snap-start snap-always">Bem vindo, à Trilha Educacional</h1>
        <div className="flex flex-col mx-auto ">
          <Modulo _titleModulo="Meu Negócio" _progress={nivelamento} conteudos={[
            { title: "1. Identificar o nicho de mercado e da proposta de valor.", describe: "Identificar o nicho de mercado e da proposta de valor.", time: "20min", _completed: andamento1, irConteudo: () => handleIrConteudo(1) }, 
            { title: "2. Análise de mercado", describe: "Estudo do público-alvo e concorrência.", time: "20min", _completed: andamento2, irConteudo: () => handleIrConteudo(10) },
            { title: "3. Meu produto", describe: "Qual o meu produto e como identificar seu valor agregado", time: "20min", _completed: andamento3, irConteudo: () => handleIrConteudo(1) },
            { title: "4. Diferencial", describe: "Identificar o diferencial do seu negócio e o que ele pode oferecer ao mercado", time: "20min", _completed: andamento4, irConteudo: () => handleIrConteudo(1) }
          ]} style={{ visibility: "visible" }} />
          <Modulo _titleModulo="Cliente e Vendas" _progress={clientesVendas} conteudos={[
            { title: "1. Meu cliente.", describe: "Conhecer quem é o meu cliente e suas necessidades", time: "20min", _completed: andamento5, irConteudo: () => handleIrConteudo(1) },
            { title: "2. Experiência do cliente", describe: "Entender como a experiência do cliente ageta suas vendas", time: "20min", _completed: andamento6, irConteudo: () => handleIrConteudo(1) },
            { title: "3. Estratégias de venda", describe: "Criação de promoções e ações de vendas baseadas nos seus clientes", time: "20min", _completed: andamento7, irConteudo: () => handleIrConteudo(1) },
            { title: "4. Engajamento", describe: "Manter um relacionamento com o seu cliente", time: "20min", _completed: andamento8, irConteudo: () => handleIrConteudo(1) }
          ]} style={{ scrollSnapAlign: "start", flexDirection: "row" }} />
        </div>
      </div>
    </div>


    {showModal && nivelamento === 100 && (
  <Modal _showModal={showModal} _close={handleModal} _Custom="bg-[url('/public/Trofeus.svg')] bg-center bg-cover shadow-[#FFB125] shadow-lg">
    <div className="py-10 px-5 flex flex-col items-center gap-10 text-white rounded-[2rem]">
      <h1 className="text-center text-[6rem] font-Sacramento">Entre Linhas</h1>
      <p className="text-[2.4rem] text-center font-bold">Parabéns, você concluiu o módulo “Meu Negócio”</p>
      <img src="/Trofeu.svg" alt="Ilustração de uma troféu" style={{ width: "-webkit-fill-available" }} className="max-h-[30rem]"/>
      <div className="text-[#FFB125] bg-white h-[6rem] flex items-center justify-center w-[27rem] rounded-[1.5rem]" onClick={handleModal}><span>Continuar</span></div>
    </div>
  </Modal>
)}
</>

  );
};