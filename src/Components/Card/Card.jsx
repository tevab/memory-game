import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { finishMessage } from "../../Helpers/Messages";

const StyledCard = styled.div`
    background-color: ${props => props.isActive && props.visible ? '#ffd4eb' : '#e12e4b'};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 200ms ease-in-out, opacity 600ms ease-in-out;
    width: 100%;
    transform: ${props => props.isActive && props.visible ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    color: ${props => props.isActive && props.visible ? '#6f1221' : 'transparent'};
    font-size: 6vh;
    cursor: pointer;
    box-shadow: 0px 10px 34px 0px rgba(150,46,57,0.27);
    &:hover {
        background-color: ${props => props.isActive && props.visible ? null : '#cf2b45'};
    }
`;

function Card(props) {

    const [isActive, setActive] = useState(false);
    const [visible, setVisible] = useState(true);

    const initialLoad = useRef(true);

    const handleClick = e => {
        if (!props.disabled) {
            setActive(true);
            // If `cardOne` is empty - set it to the clicked card's text
            if (props.cardOne === '') {
                props.setCardOne(props.text);
            // Otherwise if the card is not already selected - set `cardTwo` with the card's text and disable cards
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
        // If both cards are selected but the message displayed isn't `finishMessage`
        } else if (props.cardTwo !== '' && props.message !== finishMessage) {
            // Reset game and if the cards match hide them and push their character to the `clearedCards` array after 2 seconds
            setTimeout(() => {
                resetGame(); 
                if (props.text === props.cardOne && props.cardOne === props.cardTwo) {
                    setVisible(false);
                    props.setClearedCards([...props.clearedCards, props.cardOne])
                }
             }, 2000);
        // If `reset` is true - reset the game, show all cards, and set `reset` back to false
        } else if (props.reset) {
            resetGame(); 
            setVisible(true);
            props.setReset(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.message, props.reset]);

    // Clear all hooks on reset
    const resetGame = () => {
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