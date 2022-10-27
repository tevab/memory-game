import React from "react";
import styled from "styled-components";
import { useState, useRef } from "react";
import { useEffect } from "react";

const StyledCard = styled.div`
    background-color: ${props => props.isActive ? 'red' : 'yellow'};
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: all 200ms ease-in-out;
    z-index: 1;
    transform: ${props => props.isActive ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    color: ${props => props.isActive ? 'black' : 'transparent'};
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
        } else if (props.cardTwo !== '') {
            setTimeout(() => {
                reset(); 
                if (props.text === props.cardOne && props.cardOne === props.cardTwo) {
                    setVisible(false);
                }
             }, 4000);
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
        <StyledCard 
            onClick={handleClick} 
            isActive={isActive} 
            message={props.message} 
            disabled={props.disabled}
            visible={visible}
            style={{
                opacity: visible ? 1 : 0,
            }}
        >
            {props.text}
        </ StyledCard>
    );
};

export default Card;