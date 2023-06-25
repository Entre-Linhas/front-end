import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface ContextProps {
  auth: boolean;
  setAuth?: Function;
  perfil: any
  setPerfil?: Function
}


export const Context = createContext<ContextProps>({ auth: false, perfil: null });

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);
  const [perfil, setPerfil] = useState<any>(null);

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
    const id : any = perfil?.idPerfil;

    axios
      .put("http://localhost:5000/api/perfis/" + id, perfil)
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
  }, [perfil]);

  return (
    <Context.Provider value={{ auth, setAuth, perfil, setPerfil }}>
      {children}
    </Context.Provider>
  );
}
