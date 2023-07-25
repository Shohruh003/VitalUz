import React, { useState, useEffect } from 'react';
import './timeOut.css'

function TimeOut({ isDivVisible, setIsDivVisible}) {
  const [countdown, setCountdown] = useState(36 * 60 * 60); 
  const [isRunning, setIsRunning] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    let timerId;
    if (isRunning && countdown > 0) {
      timerId = setTimeout(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [countdown, isRunning]);

  const handleButtonClick = () => {
    setIsRunning(false);
    setIsButtonVisible(false);
    setIsDivVisible(false);
  };

  const hours = Math.floor(countdown / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <div>
      {isDivVisible && (
        <div className='timeOut'>
          <p>Yetkazib berish vaqti</p>
          <p>{hours} : {minutes} : {seconds}</p>
          {isButtonVisible && <button onClick={handleButtonClick}>Qabul qildim!</button>}
        </div>
      )}
    </div>
  );
}

export default TimeOut;