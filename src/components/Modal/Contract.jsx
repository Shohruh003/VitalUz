import { useEffect, useRef } from "react";
import "./modal.css";
import { Check } from "../../Hooks/Check";
import { Link } from "react-router-dom";
import { Client } from "../../Hooks/Client";

export const Contract = ({contract , setContract }) => {
  const queryParameter = new URLSearchParams(window.location.search)
  const code = queryParameter.get("code")
  const {client, setClient} = Client()
  console.log(client);

  const {isChecked, setIsChecked} = Check()

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



  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }


  const handleSubmit = (event) => {
    event.preventDefault()

      var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic UGxhbnNoZXRVc2VyOlVTUkA2NTAxNTU5");
    
    var raw = JSON.stringify({
      "auth": {
        "login": "site_user",
        "password": "x]sh9fD/mSZGHQ=V"
      },
      "counterparty": code,
      "signed": isChecked
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://flashcloud.uz/Vital_Planshet/hs/site/counterparty/info", requestOptions)
      .then(response => response.text())
      .then(result => setClient(result))
      .catch(error => console.log('error', error));

    setContract(false)
  }

  return (
    <div 
      ref={elContractOverlay}
      onClick={closeContract}
      className={`overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center ${!contract && 'd-none'}`}>
      <div className="modal-main guvohnomaModal">
          <p>Vital World korxonasi shartnomasi bilan tanishish</p>
          <p>Tanishaman:</p>
          <Link className='shartnoma-link' target="_blank" to='https://sg.docs.wps.com/l/sIPDAvJVrs_qDpgY?v=v2'>
                Uzb
          </Link>
          <Link className='shartnoma-link' target="_blank" to='https://sg.docs.wps.com/l/sIKPAvJVr5vqDpgY?v=v2'>
                Rus
          </Link>
          <label className="checkLabel" htmlFor="confirm">
            <input className="checkbox" type="checkbox" id="myCheckbox" onChange={handleCheckboxChange} name="confirm" />
            Ha, tanishdim
          </label>

          <button id="myButton" disabled={!isChecked} onClick={handleSubmit} className="btn btn-primary ok" type="submit">Ok</button>
      </div>
    </div>
  )
}