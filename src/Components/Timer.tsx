import React, { useState } from 'react'
import { TimerButton } from './TimerButton'
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
        <div className="timer-container shadow p-3 mb-5 bg-white rounded">
                {/* timer screen */}
            <div className="timer-screen-container rounded-circle">
                {minutes < 10? `0${minutes}` : minutes} : {seconds < 10? `0${seconds}` : seconds}
            </div>
            <div className="btn-group btn-container text-center">
                {/* button div; it will contain the three buttons */}
                <TimerButton buttonAction={startTimer} buttonValue="start" disable={disable}/>
                <TimerButton buttonAction={stopTimer} buttonValue="stop" disable={disable}/>
                <TimerButton buttonAction={resetTimer} buttonValue="reset" disable={disable}/>
            </div>
        </div>
    )
}
