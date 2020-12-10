import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import ReplayIcon from '@material-ui/icons/Replay';

interface Props {
    StatusR: string;
    ResumeR: () => void;
    ResetR: () => void;
    StopR: () => void;
    StartR: () => void;
  }

export const Buttons: React.FC<Props> = ({
    StatusR,
    ResumeR,
    ResetR,
    StopR,
    StartR,
  }) => {
    return (
        <div className="buttonsContainers">
            {StatusR === "finished" ? (
                <button onClick={StartR}>
                    <PlayArrowIcon style={{ fontSize: 40 }}/>
                </button>
            ) : ("")
            }
            {StatusR === "running" ? (
                <div>
                    <button onClick={StopR}><PauseIcon style={{ fontSize: 40 }}/></button>
                    <button onClick={ResetR}><ReplayIcon style={{ fontSize: 40 }}/></button>
                </div>
            ) : ( "" )
            }
            {StatusR === "paused" ? (
                <div>
                    <button onClick={ResumeR}><PlayArrowIcon style={{ fontSize: 40 }}/></button>
                    <button onClick={ResetR}><ReplayIcon style={{ fontSize: 40 }}/></button>
                </div>
            ) : ( "" )
            }
            {StatusR === "completed" ? (
                <div>
                    <button onClick={ResetR}><ReplayIcon style={{ fontSize: 40 }}/></button>
                </div>
            ) : ( "" )
            }
            
        </div>
    )
}