import React, { useState, useEffect } from 'react';
import './timeOut.css'

function TimeOut({isDivVisible, setIsDivVisible}) {
  const [isDiv, setIsDiv] = useState(false)
  const [currentTime, setCurrentTime] = useState(0);
  const [extraTime, setExtraTime] = useState(0);
  const [countdown, setCountdown] = useState(36 * 60 * 60 * 1000);
  const [deliveryTime, setDeliveryTime] = useState(
    localStorage.getItem("count") || 0
  );


  const handleStart =() => {
    localStorage.setItem("count", new Date().getTime() + countdown);
    setDeliveryTime(new Date().getTime() + countdown);
  };
  
  const handleStop = () => {
    setExtraTime(countdown - currentTime);
    setCurrentTime(0);
  };

  useEffect(() => {
    setCurrentTime(+deliveryTime - new Date().getTime());
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentTime > 0) {
        setCurrentTime(+deliveryTime - new Date().getTime());
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentTime, deliveryTime]);

  function secondsToHms(seconds) {
    let d = Number(seconds / 1000);

    if (d <= 0) {
      return "00:00:00";
    } else {
      let h = Math.floor(d / 3600);
      let m = Math.floor((d % 3600) / 60);
      let s = Math.floor((d % 3600) % 60);

      let hDisplay = h <= 9 ? "0" + h + ":" : h + ":";
      let mDisplay = m <= 9 ? "0" + m + ":" : m + ":";
      let sDisplay = s <= 9 ? "0" + s : s;

      return hDisplay + mDisplay + sDisplay;
    }
  }


  useEffect(() => {
    const storedIsDivVisible = localStorage.getItem('isDivVisible');
    if (storedIsDivVisible) {
      setIsDivVisible(JSON.parse(storedIsDivVisible));
    }
  }, [setIsDivVisible]);

  const handleButtonClick = () => {
    handleStop()
    setIsDivVisible(false);
    setIsDiv(true);
    localStorage.setItem('isDivVisible', JSON.stringify(false));
  };

const handleButton = () => {
  handleStart()
  setIsDiv(false);
window.location.reload();
};

return (
<div>
{isDivVisible && (
<div className='timeOut'>
<p>Yetkazib berish vaqti</p>
<p>{secondsToHms(+currentTime)}</p>
<button onClick={handleButtonClick}>Qabul qildim!</button>
</div>
)}

{isDiv && (

<div className='timeOut'> <p>Yetkazib berilgan vaqti</p>
<p> {secondsToHms(extraTime)}</p>
<button className='timeOut-btn' onClick={handleButton}>Ok</button> </div> )} </div> ); }

export default TimeOut;