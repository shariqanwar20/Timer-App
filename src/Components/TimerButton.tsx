import React from 'react'
import { TimerButtonProps } from "../types/timerTypes";

export const TimerButton:React.FC<TimerButtonProps> = ({ buttonAction, buttonValue, disable }) => {
    return (
        <div className="button-container">
            {disable && buttonValue === "start"? 
            (<button type="button" disabled className="btn btn-primary ms-2 me-2 ps-4 pe-4 text-center">
                {buttonValue.toUpperCase()}
            </button>) 
            : 
            (<button type="button" className="btn btn-primary ms-2 me-2 ps-4 pe-4 text-center" onClick={buttonAction}>
                {buttonValue.toUpperCase()}
            </button>)}
        </div>
    )
}
