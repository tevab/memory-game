import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
        border-radius: 12px;
        border: 0;
        padding: 14px 40px;
        background-color: #ff3448;
        font-size: 16px;
        font-family: 'Merriweather Sans', Arial, sans-serif;
        margin-top: 24px;
        transition: all 200ms ease-in-out;
        cursor: pointer;
        color: #f7e4f3;
        box-shadow: 0px 10px 34px 0px rgb(81 18 25 / 40%);
        text-shadow: 1px 1px 8px rgb(72 6 6 / 54%);
        &:hover {
           background-color: #ca2737; 
           text-shadow: none;
        }
    `;

function Button(props) {

    return (
        <StyledButton 
            onClick={ props.handleClick}
        >
            {props.value}
        </StyledButton>
    )
}

export default Button;