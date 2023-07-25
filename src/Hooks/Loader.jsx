import { useContext } from "react";
import { LoaderContext } from "../context/LoaderContext";

export const Loader = () => {
  const {loader, setLoader} = useContext(LoaderContext);
  return {loader, setLoader}
}