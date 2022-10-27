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
        setActive(true);
        if (props.cardOne === '') {
            props.setCardOne(props.text);
        } else {
            props.setCardTwo(props.text);
        };;
    }

    return (
        <StyledCard onClick={handleClick} isActive={isActive}>
            {props.text}
        </ StyledCard>
    );
};

export default Card;