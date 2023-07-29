import { useContext } from "react";
import { CheckContext } from "../context/CheckContext";



export const Check = () => {
  const {isChecked, setIsChecked} = useContext(CheckContext);
  return {isChecked, setIsChecked}
}