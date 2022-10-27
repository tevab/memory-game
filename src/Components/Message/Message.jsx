import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

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
`;

function Message(props) {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
        }, 200);
    }, []);

    const handleClick = () => {
        setVisible(false);
        props.setBeginMessage(false);
        if (props.showMessage) {
            setTimeout(() => {
                props.setShowMessage(false);
                props.setStart(true);
                props.setEnd(false);
            }, 400);  
        } else {
            setTimeout(() => {
                props.setShowMessage(false);
            }, 400);
        };
    };

    return (
        <MessageContainer
            showMessage={props.showMessage}
            visible={visible}
        >
            {props.message ? props.message : 'hello'}
            {(props.beginMessage || props.end) && (
                <Button 
                handleClick={handleClick}
                value={props.showMessage ? 'Start' : 'Restart'}
                setRestart={props.setRestart}
            />
            )}
        </MessageContainer>
        
    )
}

export default Message;