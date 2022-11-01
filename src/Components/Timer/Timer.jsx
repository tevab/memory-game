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
            console.log('pause');
        } else {
            return;
        }
    }, [props.start, props.end]); 

    useEffect(() => {
        if (!props.reset && props.start) {
            reset();
            start();
            console.log('test');
        } else {
            pause();
        }
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