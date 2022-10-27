import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const StyledWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 56vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

function Wrapper(props) { 

    const [disabled, setDisabled] = useState(false);

    const cards = [
        {
            id: 0,
            name: '~',
        },
        {
            id: 1,
            name: '!',
        },
        {
            id: 2,
            name: '@',
        },
        {
            id: 3,
            name: '#',
        },
        {
            id: 4,
            name: '$',
        },
        {
            id: 5,
            name: '%',
        },
        {
            id: 6,
            name: '~',
        },
        {
            id: 7,
            name: '!',
        },
        {
            id: 8,
            name: '@',
        },
            {
            id: 9,
            name: '#',
        },
        {
            id: 10,
            name: '$',
        },
        {
            id: 11,
            name: '%',
        },
    ];

    return (
      <StyledWrapper>
       {cards.map((card, i) => (
          <Card 
            key={i} 
            text={card.name}
            cardOne={props.cardOne}
            setCardOne={props.setCardOne}
            cardTwo={props.cardTwo}
            setCardTwo={props.setCardTwo}
            disabled={disabled}
            setDisabled={setDisabled}
          />))}
      </StyledWrapper>
    );
  }
  
  export default Wrapper;
  