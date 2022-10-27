import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledCard = styled.div`
        background-color: ${props => props.isActive ? 'red' : 'yellow'};
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

function Card(props) {

    const [isActive, setActive] = useState(false);

    const handleClick = e => {
            if (!props.disabled) {
            setActive(true);
            if (props.cardOne === '') {
                props.setCardOne(props.text);
            } else {
                props.setCardTwo(props.text);
                props.setDisabled(true);
            };
        } else {
            return;
        };
    };


    return (
        <StyledCard onClick={handleClick} isActive={isActive} disabled={props.disabled}>
            {props.text}
        </ StyledCard>
    );
};

export default Card;