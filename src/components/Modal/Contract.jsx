import { useEffect, useRef, useState } from "react";
import "./modal.css";
import { Check } from "../../Hooks/Check";
import { Loader } from "../../Hooks/Loader";

export const Contract = ({contract , setContract}) => {
 const {check, setCheck} = Check()
 const {setLoader} = Loader()

  const elContractOverlay = useRef();
  const closeContract = (evt) => {
    if(evt.target === elContractOverlay.current) {
      setContract(false);
    }
  }

  useEffect(() => {

    function handleCloseContract(evt) {
      if (evt.code === "Escape") {
        setContract(false)
      }
    }

    if(contract) {
      window.addEventListener("keyup",handleCloseContract);
    }

    return () => window.removeEventListener('keyup', handleCloseContract)
  },[contract])

  const handleSubmit = (event) => {
    event.preventDefault()

    if (check) {
      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic UGxhbnNoZXRVc2VyOlVTUkA2NTAxNTU5");
    
    var raw = JSON.stringify({
      "auth": {
        "login": "site_user",
        "password": "x]sh9fD/mSZGHQ=V"
      },
      "counterparty": "9147",
      "signed": check
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://flashcloud.uz/Vital_Planshet/hs/site/counterparty/info", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    setContract(false)

    setLoader(true)
    setTimeout(() => {
      setLoader(false)
    }, 1)
    } 
  }

  return (
    <div 
    ref={elContractOverlay}
    onClick={closeContract}
    className={`overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${!contract && 'd-none'}`}>
      <div className="modal-main guvohnomaModal">
          <label className="checkLabel" htmlFor="confirm">
            <input className="checkbox" type="checkbox" id="confirm" name="confirm" checked={check} onChange={() => setCheck(!check)} />
            Ha, ommaviy ofertalarga roziman
          </label>
          <button onClick={handleSubmit} className="btn btn-primary ok" type="submit">Ok</button>
      </div>
    </div>
  )
}