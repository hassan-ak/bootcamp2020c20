import React from 'react'
import { Buttons } from '../Buttons/Buttons'
import { Time } from '../Time/Time'

export const Timer = () => {
    return (
        <div className="timerContainer">
            <Time/>
            <Buttons/>
        </div>
    )
}
