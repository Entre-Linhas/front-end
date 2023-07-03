import React, { createContext, useEffect, useState } from 'react';
import api from '../apiInstance';
import { Pedido } from '../models/pedido';
import { pedidoParser } from '../utils/parsers';
import { Conquista } from '../models/consquista';

interface ContextProps {
  auth: boolean
  setAuth?: Function
  perfil: any
  setPerfil?: Function
  atividades: any
  setAtividades?: Function
  incrementarProgressoAtividade: Function
  decrementarProgressoAtividade: Function
  atualizarAtividade: Function
  definirFotoPerfil: (imageName: string) => void
  definirDescricao: (descricaoProps: string) => void
  avançarQuest: Function
  nivelamento: any
  setNivelamento: Function
  atualizarPerfil: Function
  pedido2: Pedido[]
  setPedido?: Function
  pegarDadosPedido?: Function
  LogOut: Function
  setShowModalConquista: Function
  showModalConquista: boolean
  setNomeModuloConquista: Function
  nomeModuloConquista: string
  conquista2: Conquista[]
}
export const Context = createContext<ContextProps>({} as any);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [perfil, setPerfil] = useState<any>(null);
  const [atividades, setAtividades] = useState<any>({ progresso: 0 });
  const [nivelamento, setNivelamento] = useState<any>(0);
  const [pedido2, setPedido] = useState<Pedido[]>([]);
  const [hasVerifiedLogin, setHasVerifiedLogin] = useState(false)
  const [showModalConquista, setShowModalConquista] = useState(false)
  const [nomeModuloConquista, setNomeModuloConquista ] = useState('')
  const [conquista2, setConquista] = useState<Conquista[]>([])

  
  function verificaLoginAnterior() {
    const rawPerfil = localStorage.getItem('perfil')
    if(rawPerfil) {
      const localPerfil = JSON.parse(rawPerfil)
      setPerfil(localPerfil)
      setAuth(true)
    }
    setHasVerifiedLogin(true)
  }

  function verificaAtividadesAnterior() {
    const rawAtividades = localStorage.getItem('atividades')
    if(rawAtividades) {
      const localAtividades = JSON.parse(rawAtividades)
      localAtividades?.idAtividades && setAtividades(localAtividades)
    }
  }

  function verificaNivelamentoAnterior() {
    const rawNivelamento = localStorage.getItem('nivelamento')
    if(rawNivelamento) {
      const localNivelamento = JSON.parse(rawNivelamento)
      setNivelamento(localNivelamento)
    }
  } 
  

  useEffect(() => {
    verificaLoginAnterior()
    verificaAtividadesAnterior()
    verificaNivelamentoAnterior()
  },[])

  useEffect(() => {
    perfil?.idPerfil && localStorage.setItem('perfil', JSON.stringify(perfil))
  }, [perfil])

  useEffect(() => {
    atividades?.idAtividades && localStorage.setItem('atividades', JSON.stringify(atividades))
  }, [atividades])

  useEffect(() => {
    console.log('este é o nivel', nivelamento)
    !!nivelamento && localStorage.setItem('nivelamento', JSON.stringify(nivelamento))
  }, [nivelamento])

  useEffect(() => {
    if(showModalConquista) {
      const payload = {
        usuario: perfil.usuario,
        dataConquista: new Date(),
        nome: nomeModuloConquista
      }
      api.post('/conquistas', payload)
      .then((response) => {})
      .catch((err) => console.log('ERRO AO SALVAR A CONQUISTA'))
    }
  }, [showModalConquista])


  // para não perder os dados mesmo depois de recarregar
  /* useEffect(() => {
    const storedData = localStorage.getItem('contextData');

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setAuth(parsedData.auth);
      setPerfil(parsedData.perfil);
      setAtividades(parsedData.atividades);
      setNivelamento(parsedData.nivelamento);
      setPedido(parsedData.pedido2);
    }
  }, [localStorage]);

  // Armazena os dados no localStorage sempre que eles forem atualizados
  useEffect(() => {
    const dataToStore = {
      auth,
      perfil,
      atividades,
      nivelamento,
      pedido2
    };

    localStorage.setItem('contextData', JSON.stringify(dataToStore));
  }, [auth, perfil, atividades, nivelamento, pedido2]); */

  console.log("CONTEXT", perfil)
  
function LogOut() {
  setAtividades(null)
  setPerfil(null)
  setNivelamento(null)
  localStorage.clear();
  setAuth(false);
  window.location.reload();
}

  

  /* useEffect(() => {
    const idPerfil: any = perfil?.idPerfil;
    idPerfil && api
      .put("/perfis/" + idPerfil, perfil)
      .then((response) => {
        if (response.data) {
          console.log('resposta put perfil', response.data);
          atividades?.idAtividades &&
            setAtividades(response.data.trilhas.atividades)
        } else {
          console.log("vazio");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [perfil]); */
  
  // salva no banco o perfil atualizado e salvar no perfil a resposta do banco
  function atualizarPerfil(newPerfil: any) {
    const idPerfil: any = newPerfil?.idPerfil;
    idPerfil && api
      .put("/perfis/" + idPerfil, newPerfil)
      .then((response) => {
        if (response.data) {
          setPerfil?.(response.data)
        } else {
          console.log("vazio in context");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  /* useEffect(() => {
    const idAtividade: any = atividades?.idAtividades;

    if (atividades != null)
      api
        .put("/atividades/" + idAtividade, atividades)
        .then((response) => {
          if (response.data) {
            console.log("resposta api", response.data);
          } else {
            console.log("vazio");
          }
        })
        .catch((error) => {
          console.log("deu erro")
          console.error(error);
        });
  }, [atividades]) */

  // salva no banco o atividades atualizada do perfil e salvar no atividades da resposta do banco
  function atualizarAtividade(newAtividade: any) {
    const idAtividade: any = atividades?.idAtividades;
    api
      .put("/atividades/" + idAtividade, newAtividade)
      .then((response) => {
        if (response.data) {
          setAtividades(response.data);
          // console.log("in contextAtualizarAt111", atualizarPerfil)
          // console.log("in Context atualizarAt", response.data);
        } else {
          console.log("vazio in atualizaAt");
        }
      })
      .catch((error) => {
        console.log("deu erro")
        console.error(error);
      });
  }

  function definirFotoPerfil(imageName: string) {
    const newPerfil = {
      ...perfil,
      foto: imageName
    };
    setPerfil(newPerfil)
    atualizarPerfil(newPerfil)
  };

    function definirDescricao(servicoProps: string) {
      const newPerfil = {
        ...perfil,
        servico: servicoProps
      };
      setPerfil(newPerfil)
      atualizarPerfil(newPerfil)
      
    };

    function incrementarProgressoAtividade() {
      const newAtividade = {
        ...atividades,
        progresso: atividades.progresso + 1,
        materia: {
          idMateria: atividades.progresso + 1
        }
      }
      atualizarAtividade(newAtividade);
    }

    function decrementarProgressoAtividade() {
      const newAtividade = {
        ...atividades,
        progresso: atividades.progresso - 1,
        materia: {
          idMateria: atividades.progresso - 1
        }
      }
      console.log("in DecrementarProgress, context", atividades.materia) // AQUI PODE APAGAR ESSE CONSOLE NO FUTURO
      atualizarAtividade(newAtividade)
    }

    function avançarQuest() {
      const newAtividade = {
        ...atividades,
        pratica: {
          idPratica: atividades.pratica.idPratica + 1
        }
      }
      atualizarAtividade(newAtividade)
    }

    /* 
    function avançarProgressoPerfil() {
      const newPerfil = {
      ...perfil,
      progresso: perfil?.progresso + 1
    }
    setPerfil?.(newPerfil)
    atualizarPerfil(newPerfil)
    } 
    */

    // faz o get da lista de pedido
  /* function pegarDadosPedido() {
    api
      .get("/pedidos")
      .then((response) => {
        if (response.data) {
          setPedido?.(response.data)
          console.log("Console do CONTEXT PEGAR DADOS PEDIDOS - response.data", response.data)
        } else {
          console.log("vazio in context");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  } */

  function pegarDadosPedido() {
    api.get<Partial<Pedido>[]>(`/pedidos/${perfil.usuario.idUsuario}`)
      .then((response) => {
        if (response.data) {
          const pedidosParsed = response.data.map(item => pedidoParser(item))

          setPedido?.(pedidosParsed);
          console.log("Console do CONTEXT PEGAR DADOS PEDIDOS - response.data", response.data);
        } else {
          console.log("vazio in context");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function definirNovaConquista(nomeModulo: string) {
    setShowModalConquista(true)
    setNomeModuloConquista(nomeModulo)
  }

    return (
      <Context.Provider value={{ auth, setAuth, perfil, setPerfil, atividades, setAtividades, decrementarProgressoAtividade, incrementarProgressoAtividade, atualizarAtividade, definirFotoPerfil, definirDescricao, avançarQuest, nivelamento,
        setNivelamento, atualizarPerfil, pedido2, setPedido, pegarDadosPedido, LogOut, setShowModalConquista, showModalConquista, nomeModuloConquista, setNomeModuloConquista, conquista2 }}>
        {hasVerifiedLogin && children}
      </Context.Provider>
    );
  }
  // 

  // import React, { createContext, useState, useEffect } from 'react';
  // import api from '../apiInstance';

  // interface ContextProps {
  //   auth: boolean;
  //   setAuth?: Function;
  //   perfil: any
  //   setPerfil?: Function;
  //   atividades: any
  //   setAtividades?: Function;
  //   incrementarProgressoAtividade: Function
  //   decrementarProgressoAtividade: Function
  // }
  // export const Context = createContext<ContextProps>({ /* auth: false, perfil: null , atividades: null */} as any);

  // export default function Provider({ children }: { children: React.ReactNode }) {
  //   const [auth, setAuth] = useState(false);
  //   const [perfil, setPerfil] = useState<any>(null);
  //   const [atividades, setAtividades] = useState<any>({progresso: 0});

  //   /* useEffect(() => {
  //     console.log("Log no context",
  //       perfil
  //     )
  //   },[perfil]) */


  //   // para não perder os dados mesmo depois de recarregar
  //   /* useEffect(() => {
  //     const storedPerfil = localStorage.getItem('perfil');
  //     if (storedPerfil) {
  //       setPerfil(JSON.parse(storedPerfil));
  //     }
  //   }, []);

  //   useEffect(() => {
  //     if (perfil) {
  //       localStorage.setItem('perfil', JSON.stringify(perfil));
  //     }
  //   }, [perfil]); */

  //   useEffect(() => {
  //     const idPerfil : any = perfil?.idPerfil;
  //     idPerfil && api
  //       .put("/perfis/" + idPerfil, perfil)
  //       .then((response) => {
  //         if (response.data) {
  //           console.log('resposta put perfil', response.data);
  //           setAtividades(response.data.trilhas.atividades)
  //         } else {
  //           console.log("vazio");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, [perfil]);

  //   useEffect(()=>{
  //     const idAtividade : any = atividades?.idAtividades;

  //     if (atividades != null) 
  //     api
  //     .put("/atividades/" + idAtividade, atividades)
  //     .then((response) => {
  //       if (response.data) {
  //         console.log("resposta api", response.data);
  //       } else {
  //         console.log("vazio");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("deu erro")
  //       console.error(error);
  //     });
  //   }, [atividades])

  //   function incrementarProgressoAtividade() {
  //     const newAtividade = {
  //       ...atividades,
  //       progresso: atividades.progresso + 1/* ,
  //       materia: {
  //         idMateria: atividades.progresso + 1
  //       } */
  //     }

  //     setAtividades(newAtividade)
  //   }

  //   function decrementarProgressoAtividade() {
  //     const newAtividade = {
  //       ...atividades,
  //       progresso: atividades.progresso - 1
  //     }
  //     setAtividades(newAtividade)
  //   }

  //   return (
  //     <Context.Provider value={{ auth, setAuth, perfil, setPerfil, atividades, setAtividades, decrementarProgressoAtividade, incrementarProgressoAtividade }}>
  //       {JSON.stringify(atividades || {})}
  //       {children}
  //     </Context.Provider>
  //   );
