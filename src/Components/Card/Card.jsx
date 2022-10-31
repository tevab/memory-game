import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { finishMessage } from "../../Helpers/Messages";

const StyledCard = styled.div`
    background-color: ${props => props.isActive ? '#ffd4eb' : '#e12e4b'};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 200ms ease-in-out, opacity 600ms ease-in-out;
    width: 100%;
    transform: ${props => props.isActive ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    // color: ${props => props.isActive ? '#e12e4b' : 'transparent'};
    font-size: 8vw;
    cursor: pointer;
`;

function Card(props) {

    const [isActive, setActive] = useState(false);
    const [visible, setVisible] = useState(true);

    const initialLoad = useRef(true);

    const handleClick = e => {
        if (!props.disabled) {
            setActive(true);
            if (props.cardOne === '') {
                props.setCardOne(props.text);
            } else if (!isActive) {
                props.setCardTwo(props.text);
                props.setDisabled(true);
            };
        } else {
            return;
        };
    };

    useEffect(() => {
        if (initialLoad.current) {
          initialLoad.current = false
          return;
        } else if (props.cardTwo !== '' && props.message !== finishMessage) {
            setTimeout(() => {
                reset(); 
                if (props.text === props.cardOne && props.cardOne === props.cardTwo) {
                    setVisible(false);
                    props.setClearedCards([...props.clearedCards, props.cardOne])
                }
             }, 2000);
        }
    }, [props.message]);

    const reset = () => {
        props.setCardOne('');
        props.setCardTwo('');
        props.setDisabled(false);
        props.setMessage('');
        setActive(false);
    }


    return (
        <div style={{
            display: 'flex',
            alignContent: 'stretch',
            alignItems: 'stretch',
        }}>
            <StyledCard 
                onClick={handleClick} 
                isActive={isActive} 
                message={props.message} 
                disabled={props.disabled}
                visible={visible}
                style={{
                    display: visible ? 'flex' : 'none',
                }}
                className='card'
            >
                {props.text}
            </ StyledCard>
        </div>
    );
};

export default Card;