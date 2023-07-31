import { useEffect, useRef } from "react";
import SertifikatImg from '../../Images/sertifikat.png'
import "./modal.css";

export const Sertifikat = ({sertifikat , setSertifikat}) => {

  const elTrueOverlay = useRef();
  const closeSertifikat = (evt) => {
    if(evt.target === elTrueOverlay.current) {
      setSertifikat(false);
    }
  }

  useEffect(() => {

    function handleCloseSertifikat(evt) {
      if (evt.code === "Escape") {
        setSertifikat(false)
      }
    }

    if(sertifikat) {
      window.addEventListener("keyup",handleCloseSertifikat);
    }

    return () => window.removeEventListener('keyup', handleCloseSertifikat)
  },[sertifikat])

  return (
    <div 
    ref={elTrueOverlay}
    onClick={closeSertifikat} 
    className={`overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${!sertifikat && 'd-none'}`}>
      <div className="modal-main guvohnomaModal">
          <img className="guvohnoma" src={SertifikatImg} alt="true-icon" />
          <button onClick={(event) => {
            event.preventDefault()
            setSertifikat(false) 
          }} className="btn btn-primary ok" type="submit">Ok</button>
      </div>
    </div>
  )
}