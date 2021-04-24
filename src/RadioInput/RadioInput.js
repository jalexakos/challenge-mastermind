import React from 'react';

const RadioInput = props => {
    return(
        <div>
                 <h5>Choose {props.name}!</h5>
                <input type="radio" name={props.name} value="0" onChange={props.change} />
                    <label>0</label>

                <input type="radio" name={props.name} value="1" onChange={props.change} />
                    <label>1</label>

                <input type="radio" name={props.name} value="2" onChange={props.change} />
                    <label>2</label>

                <input type="radio" name={props.name} value="3" onChange={props.change} />
                    <label>3</label>

                <input type="radio" name={props.name} value="4" onChange={props.change} />
                    <label>4</label>

                <input type="radio" name={props.name} value="5" onChange={props.change} />
                    <label>5</label>

                <input type="radio" name={props.name} value="6" onChange={props.change} />
                    <label>6</label>

                <input type="radio" name={props.name} value="7" onChange={props.change} />
                    <label>7</label>

             </div>
    )
};

export default RadioInput;