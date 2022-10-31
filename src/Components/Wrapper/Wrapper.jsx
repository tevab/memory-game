import React from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const StyledWrapper = styled.div`
    width: 90vw;
    height: 80vh;
    max-width: 56vh;
    margin: 20px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
`;

function Wrapper(props) { 

    const [disabled, setDisabled] = useState(false);
    const [shuffledCards, setShuffledCards] = useState([]);

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

    useEffect(() => {
        const shuffle = cards.sort(() => 0.5 - Math.random());
        setShuffledCards(shuffle)
    }, []);

    return (
      <StyledWrapper>
       {shuffledCards.map((card, i) => (
          <Card 
            key={i} 
            id={card.id}
            text={card.name}
            cards={shuffledCards[i]}
            cardOne={props.cardOne}
            setCardOne={props.setCardOne}
            cardTwo={props.cardTwo}
            setCardTwo={props.setCardTwo}
            disabled={disabled}
            setDisabled={setDisabled}
            clearedCards={props.clearedCards}
            setClearedCards={props.setClearedCards}
            message={props.message}
            setMessage={props.setMessage}
          />))}
      </StyledWrapper>
    );
  }
  
  export default Wrapper;
  