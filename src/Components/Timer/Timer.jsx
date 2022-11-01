import React from "react";
import { useStopwatch } from "react-timer-hook";
import { useEffect } from "react";

function Timer(props) {

    const {
        seconds,
        minutes,
        hours,
        start,
        pause,
        reset,
      } = useStopwatch({ autoStart: false });

        const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
        const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;

    useEffect(() => {
        if (props.start && !props.end) {
            start();
        } else if (props.end && !props.start) {
            pause();
            let timerData = document.getElementById('timer').innerText;
            props.setTimer(timerData)
        } else if (!props.end && !props.start) {
            pause();
        } else {
            return;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.start, props.end]); 

    useEffect(() => {
        if (!props.reset && props.start) {
            reset();
            start();
        } else {
            pause();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.reset]);

    return(
        <div 
        id='timer'
        style={{display: 'block', margin: '12px auto', textAlign: 'center'}}
        >
            <span>{hourTime}</span>
            :
            <span>{minuteTime}</span>
            :
            <span>{secondTime}</span>
        </div>
    );
};

export default Timer;