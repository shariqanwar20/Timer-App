import React, { useState } from 'react'
import { TimerButton } from './TimerButton'
import { TimerScreen } from './TimerScreen';

export const Timer = () => {

    
    let [access, setAccess] = useState<any>();
    let [disable, setDisable] = useState(false);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    let startTimer = () => {
        setAccess(
            setInterval(() => {
                //use arrow function inside setState VERY IMP
                if (seconds < 59)
                {
                    seconds += 1;
                    setSeconds(seconds);
                }
                else
                {
                    seconds = 0;
                    minutes += 1;
                    setSeconds(seconds);
                    setMinutes(minutes);
                }
            }, 1000)
        );
        setDisable(true);
    };
    const stopTimer = () => {
        setAccess(clearInterval(access));
        setDisable(false)
    };
    const resetTimer = () => {
        stopTimer()
        setSeconds(0)
        setMinutes(0)
    };
    return (
        <div className="timer-container">
                {/* timer screen */}
            <div className="timer-screen-container">
                {minutes < 10? `0${minutes}` : minutes} : {seconds < 10? `0${seconds}` : seconds}
            </div>
            <p>
                <div className="btn-group  text-center">
                    {/* button div; it will contain the three buttons */}
                    <TimerButton buttonAction={startTimer} buttonValue="start" disable={disable}/>
                    <TimerButton buttonAction={stopTimer} buttonValue="stop" disable={disable}/>
                    <TimerButton buttonAction={resetTimer} buttonValue="reset" disable={disable}/>
                </div>
            </p>
        </div>
    )
}
