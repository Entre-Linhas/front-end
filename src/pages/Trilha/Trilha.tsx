import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import { Context } from "../../contexts/Context";
import { Modulo } from "./Modulo";



export const Trilha = () => {
  const { atividades, atualizarAtividade, nivelamento, setNivelamento, perfil, atualizarPerfil, setNomeModuloConquista, setShowModalConquista, nomeModuloConquista, showModalConquista } = useContext(Context);
  const [showModal, setShowModal] = useState(true);

  // atualizarPerfil(); // talves precisa para voltar os valores depois de entrar no conteudo
  

  function handleModal() {
    setShowModal(true); 
    
  };

  function handleModal2() {
    setShowModalConquista(false);
  };


  // salva a materia e pratica e progress.atividade atraves da function atualizarAtividades, apenas gerando o objeto antes...
  const matDefLink = (novoMat: any, novaPrat: any) => {
    const newAtividades = {
      ...atividades,
      progresso: novoMat,
      materia: {
        idMateria: novoMat
      },
      pratica: {
        idPratica: novaPrat
      },
      dica: {
        idDica: 1
      }
    }
    atualizarAtividade(newAtividades);
  }

  const navigate = useNavigate();

  // direnciana para a pagina conteudo e antes salva a materia e pratica e progress.atividade atraves da function mat...
  const handleIrConteudo = (mater: any, pratica: any, nomeModulo?: string) => {
    nomeModulo && setNomeModuloConquista(nomeModulo)
    matDefLink(mater, pratica);
    navigate("/Conteudo");
  };

  const [clientesVendas, setC2] = useState(0);

  const [aprendendoGerenciar, setA3] = useState(0);

  const [marketingInovação, setMI4] = useState(0);

  const [andamento1, setAndamento1] = useState(false);
  const [andamento2, setAndamento2] = useState(false);
  const [andamento3, setAndamento3] = useState(false);
  const [andamento4, setAndamento4] = useState(false);
  const [andamento5, setAndamento5] = useState(false);
  const [andamento6, setAndamento6] = useState(false);
  const [andamento7, setAndamento7] = useState(false);
  const [andamento8, setAndamento8] = useState(false);
  const [andamento9, setAndamento9] = useState(false);
  const [andamento10, setAndamento10] = useState(false);
  const [andamento11, setAndamento11] = useState(false);
  const [andamento12, setAndamento12] = useState(false);
  const [andamento13, setAndamento13] = useState(false);
  const [andamento14, setAndamento14] = useState(false);
  const [andamento15, setAndamento15] = useState(false);
  const [andamento16, setAndamento16] = useState(false);

  useEffect(() => {
    // Controla o progresso de acordo com os exercicios concluidos
    if (perfil?.progresso >= 2 && perfil?.progresso <= 4) {
      setNivelamento(25)
    }
    if (perfil?.progresso >= 4 && perfil?.progresso <= 6) {
      setNivelamento(50)
    }
    if (perfil?.progresso >= 6 && perfil?.progresso <= 8) {
      setNivelamento(75)
    }
    if (perfil?.progresso >= 8 && perfil?.progresso <= 10) {
      setNivelamento(100)
    }

    // libera apenas o grafico para os proximos exercicios de concluido
    if (nivelamento >= 25 || perfil?.progresso >= 2) {
      setAndamento1(true);
    }
    if (nivelamento >= 50  || perfil?.progresso >= 4) {
      setAndamento2(true);
    }
    if (nivelamento >= 75  || perfil?.progresso >= 6) {
      setAndamento3(true);
    }
    if (nivelamento >= 100  || perfil?.progresso >= 8) {
      setAndamento4(true);
    }
    if (/* clientesVendas >= 25  ||  */perfil?.progresso >= 10) {
      if (
        clientesVendas <= 25 
      ) {
        setC2(25);
      }
      setAndamento5(true);
    }
    if (/* clientesVendas >= 50  ||  */perfil?.progresso >= 12) {
      if (
        clientesVendas <= 50 
      ) {
        setC2(50);
      }
      setAndamento6(true);
    }
    if (/* clientesVendas >= 75  ||  */perfil?.progresso >= 14) {
      if (
        clientesVendas <= 75 
      ) {
        setC2(75);
      }
      setAndamento7(true);
    }
    if (/* clientesVendas >= 100  ||  */perfil?.progresso >= 16) {
      if (
        clientesVendas <= 100 
      ) {
        setC2(100);
      }
      setAndamento8(true);
    }
    if (/* aprendendoGerenciar >= 25  ||  */perfil?.progresso >= 18) {
      if (
        aprendendoGerenciar <= 25 
      ) {
        setA3(25);
      }
      setAndamento9(true);
    }
    if (/* aprendendoGerenciar >= 50  ||  */perfil?.progresso >= 20) {
      if (
        aprendendoGerenciar <= 50 
      ) {
        setA3(50);
      }
      setAndamento10(true);
    }
    if (/* aprendendoGerenciar >= 75  ||  */perfil?.progresso >= 22) {
      if (
        aprendendoGerenciar <= 75 
      ) {
        setA3(75);
      }
      setAndamento11(true);
    }
    if (/* aprendendoGerenciar >= 100  ||  */perfil?.progresso >= 24) {
      if (
        aprendendoGerenciar <= 100 
      ) {
        setA3(100);
      }
      setAndamento12(true);
    }
    if (/* marketingInovação >= 25  ||  */perfil?.progresso >= 26) {
      if (
        marketingInovação <= 25 
      ) {
        setMI4(25);
      }
      setAndamento13(true);
    }
    if (/* marketingInovação >= 50  ||  */perfil?.progresso >= 28) {
      if (
        marketingInovação <= 50 
      ) {
        setMI4(50);
      }
      setAndamento14(true);
    }
    if (/* marketingInovação >= 75  ||  */perfil?.progresso >= 30) {
      if (
        marketingInovação <= 75 
      ) {
        setMI4(75);
      }
      setAndamento15(true);
    }
    if (/* marketingInovação >= 100  ||  */perfil?.progresso >= 32) {
      if (
        marketingInovação <= 100 
      ) {
        setMI4(100);
      }
      setAndamento16(true);
    }
  }, [nivelamento, clientesVendas, aprendendoGerenciar, marketingInovação, perfil?.progresso]);

  console.log("Trilha", perfil)
  
  return (
    <>
      <div className="overflow-hidden h-screen">
        <Header style={{ position: "relative" }} />
        <div className="flex flex-col overflow-auto h-full snap-y snap-mandatory">
          <h1 className="py-[3.5rem] mx-auto text-[3.6rem] font-bold snap-start snap-always max-[540px]:text-center px-[1rem]">Bem vindo, à Trilha Educacional</h1>
          <div className="flex flex-col mx-auto ">
            <Modulo _titleModulo="Meu Negócio" _progress={nivelamento} conteudos={[
              { title: "1. Nicho de mercado e proposta de valor.", describe: "Identificar o nicho de mercado e da proposta de valor.", time: "20min", _completed: andamento1, irConteudo: () => handleIrConteudo(1, 1, "Meu Negócio") },
              { title: "2. Análise de mercado", describe: "Estudo do público-alvo e concorrência.", time: "20min", _completed: andamento2, irConteudo: () => handleIrConteudo(10, 3) },
              { title: "3. Meu produto", describe: "Qual o meu produto e como identificar seu valor agregado", time: "20min", _completed: andamento3, irConteudo: () => handleIrConteudo(19, 5) },
              { title: "4. Diferencial", describe: "Identificar o diferencial do seu negócio e o que ele pode oferecer ao mercado", time: "20min", _completed: andamento4, irConteudo: () => handleIrConteudo(28, 7) }
            ]} style={{ visibility: "visible" }} />
            <Modulo _titleModulo="Cliente e Vendas" _progress={clientesVendas} conteudos={[
              { title: "1. Meu cliente.", describe: "Conhecer quem é o meu cliente e suas necessidades", time: "20min", _completed: andamento5, irConteudo: () => handleIrConteudo(37, 9) },
              { title: "2. Experiência do cliente", describe: "Entender como a experiência do cliente ageta suas vendas", time: "20min", _completed: andamento6, irConteudo: () => handleIrConteudo(48, 11) },
              { title: "3. Estratégias de venda", describe: "Criação de promoções e ações de vendas baseadas nos seus clientes", time: "20min", _completed: andamento7, irConteudo: () => handleIrConteudo(55, 13) },
              { title: "4. Engajamento", describe: "Manter um relacionamento com o seu cliente", time: "20min", _completed: andamento8, irConteudo: () => handleIrConteudo(64, 15) }
            ]} style={{ scrollSnapAlign: "start", flexDirection: "row" }} />
            <Modulo _titleModulo="Aprendendo a Gerenciar" _progress={aprendendoGerenciar} conteudos={[
              { title: "1. Planejamento Estratégico e Organização.", describe: "Definição de metas e estratégias para alcançar objetivos e estruturação eficiente dos recursos e processos da empresa.", time: "20min", _completed: andamento9, irConteudo: () => handleIrConteudo(73, 17) },
              { title: "2. Finanças e Planejamento", describe: "Gestão e análise dos recursos financeiros de uma empresa. Definição de estratégias e ações para alcançar metas financeiras.", time: "20min", _completed: andamento10, irConteudo: () => handleIrConteudo(82, 19) },
              { title: "3. Gestão de Pessoas e Desenvolvimento", describe: "Administração e liderança dos recursos humanos de uma organização. Promovendo o crescimento e aprimoramento dos colaboradores por meio de treinamentos e programas de capacitação", time: "20min", _completed: andamento11, irConteudo: () => handleIrConteudo(91, 21) },
              { title: "4. Gestão de Pessoas e Desenvolvimento", describe: "Administração estratégica dos recursos humanos de uma organização. Investimento no aprimoramento das competências e habilidades dos colaboradores para promover seu crescimento pessoal e profissional.", time: "20min", _completed: andamento12, irConteudo: () => handleIrConteudo(100, 23) }
            ]} style={{ visibility: "visible" }} />
            <Modulo _titleModulo="Marketing e Inovação" _progress={marketingInovação} conteudos={[
              { title: "1. Análise de mercado", describe: "Pesquisa e avaliação de dados para entender o cenário competitivo, identificar oportunidades e tomar decisões estratégicas.", time: "20min", _completed: andamento13, irConteudo: () => handleIrConteudo(109, 25) },
              { title: "2. Segmentação de mercado", describe: "Divisão do mercado em grupos distintos com características e necessidades semelhantes para direcionar estratégias de marketing de forma mais eficaz.", time: "20min", _completed: andamento14, irConteudo: () => handleIrConteudo(118, 27) },
              { title: "3. Inovação de produtos e serviços", describe: "Criação e introdução de novas soluções no mercado para atender às demandas dos clientes e se destacar da concorrência.", time: "20min", _completed: andamento15, irConteudo: () => handleIrConteudo(127, 29) },
              { title: "4. Estratégias de marketing eficazes", describe: "Estratégias de marketing eficazes: Abordagens estratégicas que geram resultados positivos na promoção e venda de produtos e serviços.", time: "20min", _completed: andamento16, irConteudo: () => handleIrConteudo(136, 31) }
            ]} style={{ scrollSnapAlign: "start", flexDirection: "row" }} />
          </div>
        </div>
      </div>


      <Modal _showModal={showModalConquista} _close={handleModal} _Custom="bg-[url('/public/Trofeus.svg')] bg-center bg-cover shadow-[#FFB125] shadow-lg">
          <div className="py-10 px-5 flex flex-col items-center gap-10 text-white rounded-[2rem]">
            <h1 className="text-center text-[6rem] font-Sacramento">Entre Linhas</h1>
            <p className="text-[2.4rem] text-center font-bold">Parabéns, você concluiu o módulo {nomeModuloConquista}</p>
             <img src="/Trofeu.svg" alt="Ilustração de um troféu" style={{ width: "-webkit-fill-available", height: "28.5rem"}} className="max-h-[30rem]" />
            <div className="text-[#FFB125] bg-white h-[6rem] flex items-center justify-center w-[27rem] rounded-[1.5rem]" onClick={handleModal2} title="continuar a trilha"><span>Continuar</span></div>
          </div>
        </Modal>

      {/* {showModal && perfil?.progresso == 8 && (
        <Modal _showModal={showModal} _close={handleModal} _Custom="bg-[url('/public/Trofeus.svg')] bg-center bg-cover shadow-[#FFB125] shadow-lg">
          <div className="py-10 px-5 flex flex-col items-center gap-10 text-white rounded-[2rem]">
            <h1 className="text-center text-[6rem] font-Sacramento">Entre Linhas</h1>
            <p className="text-[2.4rem] text-center font-bold">Parabéns, você concluiu o módulo “Meu Negócio”</p>
             <img src="/Trofeu.svg" alt="Ilustração de um troféu" style={{ width: "-webkit-fill-available", height: "28.5rem"}} className="max-h-[30rem]" />
            <div className="text-[#FFB125] bg-white h-[6rem] flex items-center justify-center w-[27rem] rounded-[1.5rem]" onClick={handleModal2} title="continuar a trilha"><span>Continuar</span></div>
          </div>
        </Modal>
      )}

{showModal && perfil?.progresso == 16 && (
        <Modal _showModal={showModal} _close={handleModal} _Custom="bg-[url('/public/Trofeus.svg')] bg-center bg-cover shadow-[#FFB125] shadow-lg">
          <div className="py-10 px-5 flex flex-col items-center gap-10 text-white rounded-[2rem]">
            <h1 className="text-center text-[6rem] font-Sacramento">Entre Linhas</h1>
            <p className="text-[2.4rem] text-center font-bold">Parabéns, você concluiu o módulo “Meu Negócio”</p>
             <img src="/Trofeu.svg" alt="Ilustração de um troféu" style={{ width: "-webkit-fill-available", height: "28.5rem"}} className="max-h-[30rem]" />
            <div className="text-[#FFB125] bg-white h-[6rem] flex items-center justify-center w-[27rem] rounded-[1.5rem]" onClick={handleModal2} title="continuar a trilha"><span>Continuar</span></div>
          </div>
        </Modal>
      )}

{showModal && perfil?.progresso == 24 && (
        <Modal _showModal={showModal} _close={handleModal} _Custom="bg-[url('/public/Trofeus.svg')] bg-center bg-cover shadow-[#FFB125] shadow-lg">
          <div className="py-10 px-5 flex flex-col items-center gap-10 text-white rounded-[2rem]">
            <h1 className="text-center text-[6rem] font-Sacramento">Entre Linhas</h1>
            <p className="text-[2.4rem] text-center font-bold">Parabéns, você concluiu o módulo “Meu Negócio”</p>
             <img src="/Trofeu.svg" alt="Ilustração de um troféu" style={{ width: "-webkit-fill-available", height: "28.5rem"}} className="max-h-[30rem]" />
            <div className="text-[#FFB125] bg-white h-[6rem] flex items-center justify-center w-[27rem] rounded-[1.5rem]" onClick={handleModal2} title="continuar a trilha"><span>Continuar</span></div>
          </div>
        </Modal>
      )}

{showModal && perfil?.progresso == 32 && (
        <Modal _showModal={showModal} _close={handleModal} _Custom="bg-[url('/public/Trofeus.svg')] bg-center bg-cover shadow-[#FFB125] shadow-lg">
          <div className="py-10 px-5 flex flex-col items-center gap-10 text-white rounded-[2rem]">
            <h1 className="text-center text-[6rem] font-Sacramento">Entre Linhas</h1>
            <p className="text-[2.4rem] text-center font-bold">Parabéns, você concluiu o módulo “Meu Negócio”</p>
             <img src="/Trofeu.svg" alt="Ilustração de um troféu" style={{ width: "-webkit-fill-available", height: "28.5rem"}} className="max-h-[30rem]" />
            <div className="text-[#FFB125] bg-white h-[6rem] flex items-center justify-center w-[27rem] rounded-[1.5rem]" onClick={handleModal2} title="continuar a trilha"><span>Continuar</span></div>
          </div>
        </Modal>
      )} */}
    </>

  );
};