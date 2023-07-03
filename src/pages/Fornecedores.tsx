import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Menu } from "../components/Menu"
import { CardForn } from "../components/CardForn"
import { Context } from "../contexts/Context"
import { useContext } from 'react';

export const Fornecedores = () => {
const { auth, perfil, LogOut } = useContext(Context);

return (
    <> 
<Header />
    <div className="text-3xl flex flex-wrap min-h-[900px] gap-5 py-[10rem]">

     <div className={auth ? "hidden" : " "}> 
        <Menu SelectPage="Fornecedores" />
      </div>
      <div className="flex flex-col max-w-[130rem] mt-16 m-auto px-[3rem] box-border">
        <h1 className="font-bold py-10">Conheça fornecedores</h1>
        <p>Sabemos que a qualidade dos produtos que você utiliza em suas confecções é essencial para criar peças incríveis e duradouras. É por isso que trabalhamos em parceria com fornecedores confiáveis e comprometidos em oferecer os melhores materiais para o mundo da costura.</p>

        <div className="flex flex-wrap gap-10 py-20 justify-center"> 
        <CardForn title="Costuramo" image="/c.png"/>
        <CardForn title="Tesoura e Costura" image="/e.png"/>
        <CardForn title="Máquina Mágica" image="/g.png"/>
        <CardForn title="Máquina do Costureiro" image="/a.png"/>
        <CardForn title="Armarinho do Osvaldo" image="/h.png"/>
        <CardForn title="J&M" image="/i.png"/>
        <CardForn title="Gato Costureiro" image="/k.png"/>
        <CardForn title="Alves Materiais de Costura" image="/l.png"/>
        <CardForn title="Bola de Lã" image="/n.png"/>
    

        </div>



      </div>
    </div>
<Footer />
</>
)
}