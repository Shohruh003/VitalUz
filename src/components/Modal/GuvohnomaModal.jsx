import { useEffect, useRef } from "react";
import Guvohnoma from '../../Images/guvohnoma-img.jpg'
import "./modal.css";

export const GuvohnomaModal = ({guvohnomaModal , setGuvohnomaModal}) => {

  const elTrueOverlay = useRef();
  const closeGuvohnomaModal = (evt) => {
    if(evt.target === elTrueOverlay.current) {
      setGuvohnomaModal(false);
    }
  }

  useEffect(() => {

    function handleCloseGuvohnomaModal(evt) {
      if (evt.code === "Escape") {
        setGuvohnomaModal(false)
      }
    }

    if(guvohnomaModal) {
      window.addEventListener("keyup",handleCloseGuvohnomaModal);
    }

    return () => window.removeEventListener('keyup', handleCloseGuvohnomaModal)
  },[guvohnomaModal])

  return (
    <div 
    ref={elTrueOverlay}
    onClick={closeGuvohnomaModal} 
    className={`overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${!guvohnomaModal && 'd-none'}`}>
      <div className="modal-main guvohnomaModal">
          <img className="guvohnoma" src={Guvohnoma} alt="true-icon" />
          <button onClick={(event) => {
            event.preventDefault()
            setGuvohnomaModal(false) 
          }} className="btn btn-primary ok" type="submit">Ok</button>
      </div>
    </div>
  )
}