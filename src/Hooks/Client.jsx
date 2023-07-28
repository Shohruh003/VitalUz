import { useContext } from "react";
import { ClientContext } from "../context/ClientContext";



export const Client = () => {
  const {client, setClient} = useContext(ClientContext);
  return {client, setClient}
}