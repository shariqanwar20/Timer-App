import React from 'react'
import { TimerScreenProps } from '../types/timerTypes'

export const TimerScreen:React.FC<TimerScreenProps> = ({ minutes, seconds }) => {
    return (
        <div className="timer-screen-container">
            {minutes < 10? `0${minutes}` : minutes} : {seconds < 10? `0${seconds}` : seconds}
        </div>
    )
}
