import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import {finishMessage, startMessage, successMessage, failMessage} from '../../Helpers/Messages'
import Lottie from 'lottie-react';
import Confetti from '../../Animations/Confetti.json';
import Rain from '../../Animations/Rain.json';
import Win from '../../Animations/Win.json';

const MessageContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: 40px;
    transition: all 400ms ease-in-out;
    opacity: ${props => props.visible ? 1 : 0};
    color: #f7e4f3;
    &:before {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(54 8 8 / 66%);
        z-index: -1;
    }
`;

function Message(props) {

    const [visible, setVisible] = useState(false);

    // On component load fade visibility in for 200ms
    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 200);
    }, []);

    const handleClick = () => {
        // If `beginMessage` is being displayed with `end` being true or false - set `start` to true and hide message
        if ((props.beginMessage && !props.end) || (props.end && props.beginMessage)) {
            props.setStart(true);
            setVisible(false);
            setTimeout(() => {
                props.setShowMessage(false);
                props.setBeginMessage(false);
            }, 400);
        // If `end` is true and `beginMessage` is false - hide message, reset the game, set `start` to true, and `end` to false
        } else if (props.end && !props.beginMessage) {
            setVisible(false);
            props.setReset(true);
            props.setStart(true);
            props.setEnd(false);
        } 
    };

    const TimerText = () => {
        return (
            <div style={{fontSize: 18, letterSpacing: 0.4}}>
                You finished the game in {props.timer}
            </div>
        );
    };

    return (
        <MessageContainer
            showMessage={props.showMessage}
            visible={visible}
        >
            <Lottie 
                // Show different animations for different messages
                animationData={
                    props.message === successMessage ? Confetti 
                    : 
                    props.message === failMessage ? Rain 
                    : 
                    props.message === finishMessage ? Win
                    :
                    null
                } 
                loop={true} 
                style={{
                    position: 'absolute',
                    zIndex: 0,
                }} 
            />
            <div 
                style={{
                    position: 'absolute', 
                    zIndex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                }}
            >
            {/* If there is a custom message - display it, if not - show `startMessage` */}
            {props.message ? props.message : startMessage}
            {/* If `timer` is true and the message displayed is `finishMessage` - render <TimerText /> */}
            {props.timer && props.message === finishMessage ? <TimerText /> : null}
            {/* If `beginMessage` or `end` are true while the message is displayed - show button */}
            {(props.beginMessage || props.end) && (
                <Button 
                    handleClick={handleClick}
                    value={`${props.showMessage ? 'Start' : 'Restart'} Game`}
                />
            )}
            </div>
        </MessageContainer>
        
    )
}

export default Message;