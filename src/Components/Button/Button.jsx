import React from "react";

function Button(props) {

    const reset = () => {
        props.setRestart(true);
    }

    return (
        <button 
            onClick={props.value === 'Restart' ? reset : props.handleClick}
        >
            {props.value}
        </button>
    )
}

export default Button;