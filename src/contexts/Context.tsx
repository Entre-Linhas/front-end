import React, { createContext, useState } from 'react';

interface ContextProps {
  auth: boolean;
}

export const Context = createContext<ContextProps>({ auth: true });

export default function Provider({ children }: { children: React.ReactNode }) {
  const [auth, setAuth] = useState(true);

  return (
    <Context.Provider value={{ auth }}>
      {children}
    </Context.Provider>
  );
}
