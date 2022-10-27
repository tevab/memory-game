import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledCard = styled.div`
    background-color: red;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Card(props) {

    const [isActive, setActive] = useState(false);

    const handleClick = e => {
        setActive(true);
        props.countCards();
    }

    return (
        <StyledCard onClick={handleClick}>
            {props.text}
        </ StyledCard>
    );
};

export default Card;