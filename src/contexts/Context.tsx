import React, { createContext, useState, useEffect } from 'react';
import api from '../apiInstance';

interface ContextProps {
  auth: boolean;
  setAuth?: Function;
  perfil: any
  setPerfil?: Function;
  atividades: any
  setAtividades?: Function;
}


export const Context = createContext<ContextProps>({ auth: false, perfil: null , atividades: null});

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [perfil, setPerfil] = useState<any>(null);
  const [atividades, setAtividades] = useState<any>(null);

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

  //manter os dados salvos

  useEffect(() => {
    const idPerfil : any = perfil?.idPerfil;

    api
      .put("/perfis/" + idPerfil, perfil)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        } else {
          console.log("vazio");
        }
      })
      .catch((error) => {
        console.error(error);
      });

      const idAtividade : any = perfil?.trilhas?.atividades?.idAtividades;

      if (atividades != null) 
      api
      .put("/atividades/" + idAtividade, atividades)
      .then((response) => {
        if (response.data) {
          /* const newAtividades = {
            ...response.data
          }
          setAtividades?.(newAtividades); */
          console.log("resposta api", response.data);
        } else {
          console.log("vazio");
        }
      })
      .catch((error) => {
        console.log("deu erro")
        console.error(error);
      });
  }, [perfil, atividades]);

  return (
    <Context.Provider value={{ auth, setAuth, perfil, setPerfil, atividades, setAtividades }}>
      {children}
    </Context.Provider>
  );
}
