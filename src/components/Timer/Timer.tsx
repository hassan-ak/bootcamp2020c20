import React, { useState } from 'react'
import { Buttons } from '../Buttons/Buttons'
import { Time } from '../Time/Time'

type Timetd = {
    ms: number;
    s: number;
    m: number;
    h: number;
};

export const Timer = () => {

    const [time, setTime] = useState<Timetd>({ ms: 979, s: 54, m: 21, h: 87 });

    return (
        <div className="timerContainer">
            <Time Time={time}/>
            <Buttons/>
        </div>
    )
}
