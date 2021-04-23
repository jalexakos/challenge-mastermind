import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

import Guess from '../Guess/Guess';
import classes from './Easy.module.css';

const Easy = props => {

// initializing counter state
 const [ counter, setCounter ] = useState(10);
// initializing random numbers array state
 const [ randomNums, setRandomNums ] = useState([]);
// initializing number 1 state
const [ numOne, setNumOne ] = useState(0);
// initializing number 2 state
const [ numTwo, setNumTwo ] = useState(0);
// initializing number 3 state
const [ numThree, setNumThree ] = useState(0);
// initializing number 4 state
const [ numFour, setNumFour ] = useState(0);
// initializing past guesses array
const [ guesses, setGuesses ] = useState([]);

// the GET request to get the random numbers
 useEffect(() => {
     axios.get('https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new')
     .then(response =>{
        // getting the data in a string
        let unParsedString = response.data;
        // initializing an array to save the random numbers to
        let randomArray = [];
        // iterating through the string for the numbers and adding them (as integers) to the array
        for (let i = 0; i < unParsedString.length; i+=2){
            let parsedNum = parseInt(unParsedString[i]);
            randomArray.push(parsedNum);
        };
        // setting the random numbers to randomNums state
        setRandomNums(randomArray);
    })
     .catch(e => console.log(e))
 }, []);

 // initializing the button that counts down from 10
 let button = <input type="submit" value="Submit" />;
 // initializing the message in case all chances are used without a correct guess

const changeNumOne = e => setNumOne(Number(e.target.value));

const changeNumTwo = e => setNumTwo(Number(e.target.value));

const changeNumThree = e => setNumThree(Number(e.target.value));

const changeNumFour = e => setNumFour(Number(e.target.value));

const compareNums = e => {
    e.preventDefault();

    let answerArray = [];
    answerArray.push(numOne);
    answerArray.push(numTwo);
    answerArray.push(numThree);
    answerArray.push(numFour);

    let total = 0;

    let message = "Sorry, all your guesses were incorrect...";

    let is_same = (answerArray.length === randomNums.length) && answerArray.every((element, index) => {
        return element === randomNums[index];
    });

    if (is_same){
        message = "You got 'em all!!! Incredible!!! You win :)";
        setCounter(0);
        setGuesses((oldGuesses) => oldGuesses.concat({answerArray, message}));
        return;
    };

    for (let i = 0; i < answerArray.length; i++){

        if (randomNums.includes(answerArray[i])){
            if (total < 2){
                total = 1;
            }
        };
        if (answerArray[i] === randomNums[i]){
            total = 2;
        };
    };

    if (total === 2){
        message = "You guessed at least one number and location correct!!!";
    } else if (total === 1){
        message = "You guessed at least one number correct!";
    }

    if (counter < 2){
        message = `Sorry, you're out of chances :( The correct answer was ${randomNums}`
    }
    
    setGuesses((oldGuesses) => oldGuesses.concat({answerArray, message}));
    setCounter(counter - 1);
};

const pastGuesses = guesses.map(data => <CSSTransition timeout={1000} in={true} key={Math.random()*Math.random()*100}><Guess message={data.message} answer={data.answerArray} /></CSSTransition>)

 if (counter <= 0){
     button = null;
 }

 return(
     <div>
         <br />
        <div>
            {pastGuesses}
        </div>
         <br />
         <br />
         <div>
         <h3>Guesses Left: {counter}</h3>
         <form onSubmit={compareNums}>
             <div>
                 <h5>Choose Number 1!</h5>
                <input type="radio" name="numberOne" value="0" onChange={changeNumOne} />
                    <label>0</label>

                <input type="radio" name="numberOne" value="1" onChange={changeNumOne} />
                    <label>1</label>

                <input type="radio" name="numberOne" value="2" onChange={changeNumOne} />
                    <label>2</label>

                <input type="radio" name="numberOne" value="3" onChange={changeNumOne} />
                    <label>3</label>

                <input type="radio" name="numberOne" value="4" onChange={changeNumOne} />
                    <label>4</label>

                <input type="radio" name="numberOne" value="5" onChange={changeNumOne} />
                    <label>5</label>

                <input type="radio" name="numberOne" value="6" onChange={changeNumOne} />
                    <label>6</label>

                <input type="radio" name="numberOne" value="7" onChange={changeNumOne} />
                    <label>7</label>

             </div>
             <div>
             <h5>Choose Number 2!</h5>
                <input type="radio" name="numberTwo" value="0" onChange={changeNumTwo} />
                    <label>0</label>

                <input type="radio" name="numberTwo" value="1" onChange={changeNumTwo} />
                    <label>1</label>

                <input type="radio" name="numberTwo" value="2" onChange={changeNumTwo} />
                    <label>2</label>

                <input type="radio" name="numberTwo" value="3" onChange={changeNumTwo} />
                    <label>3</label>

                <input type="radio" name="numberTwo" value="4" onChange={changeNumTwo} />
                    <label>4</label>

                <input type="radio" name="numberTwo" value="5" onChange={changeNumTwo} />
                    <label>5</label>

                <input type="radio" name="numberTwo" value="6" onChange={changeNumTwo} />
                    <label>6</label>

                <input type="radio" name="numberTwo" value="7" onChange={changeNumTwo} />
                    <label>7</label>

             </div>
             <div>
             <h5>Choose Number 3!</h5>
                <input type="radio" name="numberThree" value="0" onChange={changeNumThree} />
                    <label>0</label>

                <input type="radio" name="numberThree" value="1" onChange={changeNumThree} />
                    <label>1</label>

                <input type="radio" name="numberThree" value="2" onChange={changeNumThree} />
                    <label>2</label>

                <input type="radio" name="numberThree" value="3" onChange={changeNumThree} />
                    <label>3</label>

                <input type="radio" name="numberThree" value="4" onChange={changeNumThree} />
                    <label>4</label>

                <input type="radio" name="numberThree" value="5" onChange={changeNumThree} />
                    <label>5</label>

                <input type="radio" name="numberThree" value="6" onChange={changeNumThree} />
                    <label>6</label>

                <input type="radio" name="numberThree" value="7" onChange={changeNumThree} />
                    <label>7</label>

             </div>
             <div>
             <h5>Choose Number 4!</h5>
                <input type="radio" name="numberFour" value="0" onChange={changeNumFour} />
                    <label>0</label>

                <input type="radio" name="numberFour" value="1" onChange={changeNumFour} />
                    <label>1</label>

                <input type="radio" name="numberFour" value="2" onChange={changeNumFour} />
                    <label>2</label>

                <input type="radio" name="numberFour" value="3" onChange={changeNumFour} />
                    <label>3</label>

                <input type="radio" name="numberFour" value="4" onChange={changeNumFour} />
                    <label>4</label>

                <input type="radio" name="numberFour" value="5" onChange={changeNumFour} />
                    <label>5</label>

                <input type="radio" name="numberFour" value="6" onChange={changeNumFour} />
                    <label>6</label>

                <input type="radio" name="numberFour" value="7" onChange={changeNumFour} />
                    <label>7</label>

             </div>
             {button}
         </form>
         </div>
        <br />
         {randomNums}
     </div>
 );
};

export default Easy;