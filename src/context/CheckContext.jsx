import { useState, createContext } from "react";

export const CheckContext = createContext();

export const CheckProvider = ({children}) => {
  const [check, setCheck] = useState(false);

  return (
    <CheckContext.Provider value={{check, setCheck}}>
      {children}
    </CheckContext.Provider>
  );
};