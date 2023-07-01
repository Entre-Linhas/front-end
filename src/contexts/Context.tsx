import React, { createContext, useState, useEffect } from 'react';
import api from '../apiInstance';
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';

interface ContextProps {
  auth: boolean
  setAuth?: Function
  perfil: any
  setPerfil?: Function
  atividades: any
  setAtividades?: Function;
  incrementarProgressoAtividade: Function
  decrementarProgressoAtividade: Function
  atualizarAtividade: Function
  definirFotoPerfil: (imageName: string) => void
  definirDescricao: (descricaoProps: string) => void
  avançarQuest: Function
  nivelamento: any
  setNivelamento: Function
}
export const Context = createContext<ContextProps>({} as any);

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [perfil, setPerfil] = useState<any>(null);
  const [atividades, setAtividades] = useState<any>({ progresso: 0 });
  const [nivelamento, setNivelamento] = useState<any>(null);

  /* useEffect(() => {
    console.log("Log no context",
      perfil
    )
  },[perfil]) */


  // para não perder os dados mesmo depois de recarregar
  /* useEffect(() => {
    const storedPerfil = localStorage.getItem('perfil');
    if (storedPerfil) {
      setPerfil(JSON.parse(storedPerfil));
    }
  }, []);

  useEffect(() => {
    if (perfil) {
      localStorage.setItem('perfil', JSON.stringify(perfil));
    }
  }, [perfil]); */

  useEffect(() => {
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
  }, [perfil]);

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

  function atualizarAtividade(newAtividade: any) {
    const idAtividade: any = atividades?.idAtividades;
    api
      .put("/atividades/" + idAtividade, newAtividade)
      .then((response) => {
        if (response.data) {
          setAtividades(response.data);
          console.log(response.data); // AQUI PODE APAGAR ESSE CONSOLE NO FUTURO
        } else {
          console.log("vazio");
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
  };

    function definirDescricao(servicoProps: string) {
      const newPerfil = {
        ...perfil,
        servico: servicoProps
      };
      setPerfil(newPerfil)
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
      console.log(atividades.materia) // AQUI PODE APAGAR ESSE CONSOLE NO FUTURO
      atualizarAtividade(newAtividade)
    }

    function avançarQuest() {
      const newAtividade = {
        ...atividades,
        progresso: atividades.progresso + 1,
        pratica: {
          idPratica: atividades.pratica.idPratica + 1
        }
      }
      atualizarAtividade(newAtividade)
    }

    // ADICIONADO, PODE SE TORNAR UM ERRO CAUSA DO ERRO
    

    /* function handleSubmit2(formData2: any) {
      api
          .post("https://dgc6qt23wamgi.cloudfront.net/api/usuarios/cadastro", formData2)
          .then((response) => {
              console.log(response);
              
              if (response) {
                <Router>
                  const navigate = useNavigate();
                  navigate("/Nivelamento");
                </Router>
              } else {
                  alert("teste");
              }

          })
          .catch((error) => {
              alert("Email já utilizado");
              console.error(error);

          });
  };

  function hS3(formData2: any) {
    const navigate = useNavigate();
  
    return (
      <Router>
        <div>
          <button onClick={() => handleSubmit2(formData2)}></button>
        </div>
      </Router>
    );
  } */
  // ATÈ AQUI  

    return (
      <Context.Provider value={{ auth, setAuth, perfil, setPerfil, atividades, setAtividades, decrementarProgressoAtividade, incrementarProgressoAtividade, atualizarAtividade, definirFotoPerfil, definirDescricao, avançarQuest, nivelamento,
        setNivelamento }}>
        {/* {JSON.stringify(atividades.progresso || {})} */}
        {children}
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
