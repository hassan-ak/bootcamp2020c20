import React from 'react'

type Props = {
    Time : any;
};

export const Time: React.FC<Props> = ({Time,}) => {
    return (
        <div className="timeContainer">
            <p className="time">
                <span className={Time.h === 0 ? "inActive" : "active"}>
                    {Time.h >= 10 ? Time.h : "0" + Time.h}:
                </span>
                <span className={Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>
                    {Time.m >= 10 ? Time.m : "0" + Time.m}:
                </span>
                <span className={Time.s === 0 && Time.m === 0 && Time.h === 0 ? "inActive" : "active"}>
                    {Time.s >= 10 ? Time.s : "0" + Time.s}.
                </span>
                <span className={Time.ms === 0 && Time.s === 0 && Time.m === 0 && Time.h === 0 ? "ms inActive" : "ms active"}>
                    {Time.ms >= 10 ? Time.ms : "0" + Time.ms}
                </span>
            </p>
        </div>
    )
}

