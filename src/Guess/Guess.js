import React from 'react';
import './Guess.css';

const Guess = props => {
    return(
        <div className="Guess">
            <p className="messageText">{props.message}</p>
            <p className="messageText">Your Guess: {props.answer}</p>
            <p>Attempt Number: {props.attempt}</p>
        </div>
    )
};

export default Guess;