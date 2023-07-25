import { useContext } from "react";
import { CheckContext } from "../context/CheckContext";



export const Check = () => {
  const {check, setCheck} = useContext(CheckContext);
  return {check, setCheck}
}