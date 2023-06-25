import { HTMLAttributes } from "react";
import { Header } from "../../components/Header";
import { Model } from "../../components/Model";
import { Modulo } from "./Modulo";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../contexts/Context";

interface ExemploProps extends HTMLAttributes<HTMLDivElement> {}

function Exemplo({...rest}: ExemploProps) {
  const [error, setError] = useState(false);
  const [progresso, setProgressPerfil] = useState<any>(null);
  const { perfil } = useContext(Context);
  // progressAtividade e FKS
  
  
  

  const formData = {
    idPerfil : perfil.idPerfil,
    progresso : 10.0,
    /* materia : {
      idMateria: 1
    } */
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    axios
      .put("https://dgc6qt23wamgi.cloudfront.net/api/usuarios/login", formData)
      .then((response) => {
        if (response.data) {
          setProgressPerfil?.(navigate("/Conteudo"));
          console.log(response.data);
        } else {
          console.log("vazio");
        }
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <div className="flex flex-row-reverse item " {...rest}>
      <div className="flex flex-col gap-7 w-2/4">

      {/* <button OnClick={() => {navigate("/Conteudo")}}>  */}
        <Model
          title="1. Definição do negócio"
          describe="Identificar o nicho de mercado e da proposta de valor."
          time="20min"
          _completed
          path="/Conteudo"
        />
      {/* </button> */}

        <Model
          title="2. Análise de mercado"
          describe="Estudo do público-alvo e concorrência."
          time="20min"
        />
        <Model
          title="3. Meu produto"
          describe="Qual o meu produto e como identificar seu valor agregado"
          time="20min"
        />
        <Model
          title="4. Diferencial"
          describe="Identificar o diferencial do seu negócio e o que ele pode oferecer ao mercado"
          time="20min"
        />
      </div>
      <button className="border-none outline-none mx-11 w-3 visible h-[406px] bg-red-500 relative">
        <img src="/btnIndicator.svg" alt="Btn" className="absolute -left-[1.30rem] -top-4 bg-red-500 p-2 rounded-full"/>
      </button>
      <div className="flex w-2/4 " style={{flexDirection: rest.style?.flexDirection === "row" ? "row" : "row-reverse"}}>
        <span>Meu Negócio - 0%</span>
        <div />
      </div>
    </div>
  )
}

export const Trilha = () => { 
  const { perfil, setPerfil} = useContext(Context);
  const atividades = () => {
    /* perfil.progresso += 25.0;
    perfil.trilhas.atividades.materia = 1;
    console.log(perfil); */
    const newPerfil = {
      ...perfil, 
      progresso: perfil.progresso + 25
    }
    setPerfil && setPerfil(newPerfil)
  }
  return (
    <div className="overflow-hidden h-screen">
        <Header style={{position: "relative"}}/>
      <button onClick={atividades}></button>
      <div className="flex flex-col overflow-auto h-full snap-y snap-mandatory">
        <h1 className="py-[3.5rem] mx-auto text-[3.6rem] font-bold snap-start snap-always">Bem vindo, à Trilha Educacional</h1>
        <div className="flex flex-col mx-auto ">
          <Modulo _titleModulo="Meu Negócio" _progress={0} conteudos={[
            {title:"1. Identificar o nicho de mercado e da proposta de valor.", describe:"Identificar o nicho de mercado e da proposta de valor.", time:"20min", _completed: true},
            {title:"2. Análise de mercado", describe: "Estudo do público-alvo e concorrência.", time: "20min"},
            {title:"3. Meu produto", describe: "Qual o meu produto e como identificar seu valor agregado", time:"20min"},
            {title:"4. Diferencial", describe: "Identificar o diferencial do seu negócio e o que ele pode oferecer ao mercado", time:"20min"}
            ]} style={{visibility: "visible"}}/>
          <Modulo _titleModulo="Cliente e Vendas" _progress={0} conteudos={[
            {title:"1. Meu cliente.", describe:"Conhecer quem é o meu cliente e suas necessidades", time:"20min"},
            {title:"2. Experiência do cliente", describe: "Entender como a experiência do cliente ageta suas vendas", time: "20min"},
            {title:"3. Estratégias de venda", describe: "Criação de promoções e ações de vendas baseadas nos seus clientes", time:"20min"},
            {title:"4. Engajamento", describe: "Manter um relacionamento com o seu cliente", time:"20min"}
            ]} style={{scrollSnapAlign: "start", flexDirection: "row"}}/>  
        </div>
      </div>
    </div>
  );
};