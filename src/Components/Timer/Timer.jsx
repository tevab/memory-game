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
        // If `start` is true and `end` is false - start stopwatch
        if (props.start && !props.end) {
            start();
        // If `end` is true and `start` is false - pause stopwatch and set `timer` with the stopwatch's data
        } else if (props.end && !props.start) {
            pause();
            let timerData = document.getElementById('timer').innerText;
            props.setTimer(timerData)
        // If `end` and `start` are false - pause stopwatch
        } else if (!props.end && !props.start) {
            pause();
        } else {
            return;
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.start, props.end]); 

    useEffect(() => {
        // If `reset` is false and `start is true - reset stop watch and start it again, if not just pasue it
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