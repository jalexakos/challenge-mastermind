import React from 'react';

import './TextBox.css';

const TextBox = props => {
    return(
        <div className="textBox">
            <p className="messageText" >{props.content}</p>
        </div>
    )
};

export default TextBox;