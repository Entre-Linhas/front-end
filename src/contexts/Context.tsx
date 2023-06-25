import React, { createContext, useState, useEffect } from 'react';

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

  return (
    <Context.Provider value={{ auth, setAuth, perfil, setPerfil }}>
      {children}
    </Context.Provider>
  );
}
