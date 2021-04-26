import React from 'react';

const RadioInput = props => {
    return(
        <div>
                 <h5>Choose {props.name}!</h5>
                <input type="radio" name={props.name} value="0" onChange={props.change.bind(this, props.id)} />
                    <label>0</label>

                <input type="radio" name={props.name} value="1" onChange={props.change.bind(this, props.id)} />
                    <label>1</label>

                <input type="radio" name={props.name} value="2" onChange={props.change.bind(this, props.id)} />
                    <label>2</label>

                <input type="radio" name={props.name} value="3" onChange={props.change.bind(this, props.id)} />
                    <label>3</label>

                <input type="radio" name={props.name} value="4" onChange={props.change.bind(this, props.id)} />
                    <label>4</label>

                <input type="radio" name={props.name} value="5" onChange={props.change.bind(this, props.id)} />
                    <label>5</label>

                <input type="radio" name={props.name} value="6" onChange={props.change.bind(this, props.id)} />
                    <label>6</label>

                <input type="radio" name={props.name} value="7" onChange={props.change.bind(this, props.id)} />
                    <label>7</label>

             </div>
    )
};

export default RadioInput;