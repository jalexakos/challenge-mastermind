import React from 'react';
import './Guess.css';

const Guess = props => {
    return(
        <div className="Guess">
            <p className="messageText">{props.message}</p>
            <p className="messageText">Your Guess: {props.answer}</p>
        </div>
    )
};

export default Guess;