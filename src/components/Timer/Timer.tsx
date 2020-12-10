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

    
    const timeDefined = { ms: 25, s: 15, m: 0, h: 0 }

    const [time, setTime] = useState<Timetd>(timeDefined);
    const [status, setStatus] = useState<string>("finished");
    const [interv, setInterv] = useState<NodeJS.Timeout | any>();

    var   initialMs = time.ms, initialS = time.s, initialM = time.m, initialH = time.h;


    const start: () => void = () => {
        setStatus("running");
        setInterv(setInterval(run,10))
    }

    const reset: () => void = () => {
        clearInterval(interv)
        setTime(timeDefined)
        setStatus("finished");
    };

    const run : () => void =() => {
        if (initialMs > 0 && initialS>=0 && initialM>=0 && initialH>=0) {
            initialMs --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }else if (initialMs === 0 && initialS>0 && initialM>=0 && initialH>=0) {
            initialMs = 99
            initialS --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }else if (initialMs === 0 && initialS===0 && initialM>0 && initialH>=0) {
            initialMs = 99
            initialS = 59
            initialM --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }
        else if (initialMs === 0 && initialS===0 && initialM===0 && initialH>0) {
            initialMs = 99
            initialS = 59
            initialM = 59
            initialH --
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
        }
        else if (initialMs === 0 && initialS===0 && initialM===0 && initialH===0) {
            setTime({ ms: initialMs, s: initialS, m: initialM, h: initialH })
            setStatus("completed")
        }
    }


    const pause: () => void = () => {
        setStatus("paused");
        clearInterval(interv);
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
