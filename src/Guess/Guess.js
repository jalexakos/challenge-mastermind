import React from 'react';
import './Guess.css';

const Guess = props => {
    return(
        <div className="Guess">
            <p className="messageText">{props.message}</p>
            <p className="yourGuess">Your Guess: {props.answer}</p>
            <p className="messageText">Attempt Number: {props.attempt}</p>
        </div>
    )
};

export default Guess;