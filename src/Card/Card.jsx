import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
    background-color: red;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

class Card extends React.Component {
    render() {
       return (
        <StyledCard>
            {this.props.text}
        </ StyledCard>
       )
    }
};

export default Card;