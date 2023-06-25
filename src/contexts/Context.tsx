import React, { createContext, useState } from 'react';

interface ContextProps {
  auth: boolean
  perfil: any
  setPerfil?: Function
}

export const Context = createContext<ContextProps>({ auth: false, perfil: null });

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(true);
  const [perfil, setPerfil] = useState(true);
  return (
    <Context.Provider value={{ auth, perfil, setPerfil }}>
      {children}
    </Context.Provider>
  );
}