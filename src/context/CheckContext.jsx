import { useState, createContext } from "react";

export const CheckContext = createContext();

export const CheckProvider = ({children}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <CheckContext.Provider value={{isChecked, setIsChecked}}>
      {children}
    </CheckContext.Provider>
  );
};