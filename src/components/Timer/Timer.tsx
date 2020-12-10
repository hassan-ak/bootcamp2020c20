import React, { useEffect, useState } from 'react'
import { Buttons } from '../Buttons/Buttons'
import { Time } from '../Time/Time'

type Timetd = {
    ms: number;
    s: number;
    m: number;
    h: number;
};

export const Timer = () => {

    const   initialMs = 15, initialS = 1, initialM = 1, initialH = 1;

    const [time, setTime] = useState<Timetd>({ ms: initialMs, s: initialS, m: initialM, h: initialH });
    const [status, setStatus] = useState<string>("finished");

    const start: () => void = () => {
        setStatus("running");
        console.log("running")
    }
    
    const reset: () => void = () => {
        setStatus("finished");
        console.log("finished")
    };

    const pause: () => void = () => {
        setStatus("paused");
        console.log("paused")
    };

    const resume: () => void = () => start();

    return (
        <div className="timerContainer">
            <Time Time={time}/>
            <Buttons
                StatusR={status}
                ResumeR={resume}
                ResetR={reset}
                StopR={pause}
                StartR={start}
            />
        </div>
    )
}
