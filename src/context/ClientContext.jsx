import { useState, createContext } from "react";

export const ClientContext = createContext();

export const ClientProvider = ({children}) => {
  const [client, setClient] = useState();

  return (
    <ClientContext.Provider value={{client, setClient}}>
      {children}
    </ClientContext.Provider>
  );
};