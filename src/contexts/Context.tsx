import React, { createContext, useState } from 'react';

interface ContextProps {
  auth: boolean;
  setAuth?: Function;
}

export const Context = createContext<ContextProps>({ auth: false });

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(false);

  return (
    <Context.Provider value={{ auth, setAuth }}>
      {children}
    </Context.Provider>
  );
}
