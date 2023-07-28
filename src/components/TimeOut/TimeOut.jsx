import React, { useState, useEffect } from 'react';
import './timeOut.css'

function TimeOut({isDivVisible, setIsDivVisible}) {

const [countdown, setCountdown] = useState(parseInt(localStorage.getItem('countdown')) || 36 * 60 * 60);
const [isRunning, setIsRunning] = useState(true);
const [isDiv, setIsDiv] = useState(false);
const [hours, setHours] = useState(parseInt(localStorage.getItem('hours')) || 36);
const [minutes, setMinutes] = useState(parseInt(localStorage.getItem('minutes')) || 0);
const [seconds, setSeconds] = useState(parseInt(localStorage.getItem('seconds')) || 0);

useEffect(() => {
const intervalId = setInterval(() => {
if (isRunning && countdown > 0) {
setCountdown(prevCountdown => {
const newCountdown = prevCountdown - 1;
localStorage.setItem('countdown', newCountdown);
const newHours = Math.floor(newCountdown / 3600);
const newMinutes = Math.floor((newCountdown % 3600) / 60);
const newSeconds = newCountdown % 60;
setHours(newHours);
setMinutes(newMinutes);
setSeconds(newSeconds);
localStorage.setItem('hours', newHours);
localStorage.setItem('minutes', newMinutes);
localStorage.setItem('seconds', newSeconds);
return newCountdown;
});
}
}, 1000);
return () => clearInterval(intervalId);
}, [countdown, isRunning]);

const handleButtonClick = () => {
setIsRunning(false);
setIsDivVisible(false);
setIsDiv(true)
localStorage.setItem('isDivVisible', JSON.stringify(false));
};

const times = 36 * 60 * 60
const tem = times - countdown

const hour = Math.floor(tem / 3600);
const minute = Math.floor((tem % 3600) / 60);
const second = tem % 60;
const handleButton = () => {
setIsDiv(false)
localStorage.removeItem('countdown');
localStorage.removeItem('hours');
localStorage.removeItem('minutes');
localStorage.removeItem('seconds');
window.location.reload();
};

useEffect(() => {
const storedIsDivVisible = localStorage.getItem('isDivVisible');
if (storedIsDivVisible) {
setIsDivVisible(JSON.parse(storedIsDivVisible));
}
}, [setIsDivVisible]);

return (
<div>
{isDivVisible && (
<div className='timeOut'>
<p>Yetkazib berish vaqti</p>
<p>{hours} : {minutes} : {seconds}</p>
<button onClick={handleButtonClick}>Qabul qildim!</button>
</div>
)}

{isDiv && (

<div className='timeOut'> <p>Yetkazib berilgan vaqti</p> <p>{hour} : {minute}: {second}</p> <button className='timeOut-btn' onClick={handleButton}>Ok</button> </div> )} </div> ); }
export default TimeOut;