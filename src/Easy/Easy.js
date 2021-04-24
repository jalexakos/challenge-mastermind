import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { CSSTransition } from 'react-transition-group';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Guess from '../Guess/Guess';
import RadioInput from '../RadioInput/RadioInput';
import Calculating from '../Calculating/Calculating';
import classes from './Easy.module.css';

const Easy = props => {

//initializing display state (normal page versus countdown)
const [ showCalculate, setShowCalculate ] = useState(false);
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
// initializing attempt number state
const [ attemptNum, setAttemptNum ] = useState(1);
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
 let button = <input type="submit" value="Submit My Guess!" className={classes.submitButton} />;

 // initialzing calculating variable for added effect
 let calculate = <Calculating text="Calculating." />;

// tracking numbers selected
const changeNumOne = e => setNumOne(Number(e.target.value));
const changeNumTwo = e => setNumTwo(Number(e.target.value));
const changeNumThree = e => setNumThree(Number(e.target.value));
const changeNumFour = e => setNumFour(Number(e.target.value));


// Comparing the numbers to determine correctness
const compareNums = () => {

    // adding numbers to array
    let answerArray = [];
    answerArray.push(numOne);
    answerArray.push(numTwo);
    answerArray.push(numThree);
    answerArray.push(numFour);
    
    // initializing totals counter
    let total = 0;
    
    // initializing message as failure
    let message = "Sorry, all your guesses were incorrect...";
    
    // checking if the arrays are the same - if so, game is over
    let is_same = (answerArray.length === randomNums.length) && answerArray.every((element, index) => {
        return element === randomNums[index];
    });
    
    if (is_same){
        message = "You got 'em all!!! Incredible!!! You win :)";
        setCounter(0);
        setGuesses((oldGuesses) => oldGuesses.concat({answerArray, message, attemptNum}));
        return;
    };
    
    // if not exactly the same, checking for correct number and placement
    for (let i = 0; i < answerArray.length; i++){
        
        // is the number in the array?
        if (randomNums.includes(answerArray[i])){
            if (total < 2){
                total = 1;
            }
        };

        // is the number in the correct place?
        if (answerArray[i] === randomNums[i]){
            total = 2;
        };
    };
    
    // at least one number was in the array and the right place; at least one number was in the array
    if (total === 2){
        message = "You guessed at least one number and location correct!!!";
    } else if (total === 1){
        message = "You guessed at least one number correct!";
    }

    // if out of chances, display message with correct answer
    if (counter < 2){
        message = `Sorry, you're out of chances :( The correct answer was ${randomNums}`
    }
    
    // add guess to guesses array
    setGuesses((oldGuesses) => oldGuesses.concat({answerArray, message, attemptNum}));
    // remove an attempt
    setCounter(counter - 1);
    // add another number to displayed attempt
    setAttemptNum(attemptNum + 1);
};

const displayCalculating = e => {
    // stopping page refresh
    e.preventDefault();

    setShowCalculate(true);
    
    // displaying a calculating text for effect
    setTimeout(() => calculate = <Calculating text="Calculating.." />, 500);
    setTimeout(() => calculate = <Calculating text="Calculating..." />, 500);
    setTimeout(() => calculate = <Calculating text="Calculating." />, 500);
    setTimeout(() => calculate = <Calculating text="Calculating.." />, 500);
    setTimeout(() => calculate = <Calculating text="Calculating..." />, 500);

    // calling actual calculation function
    compareNums();

    setShowCalculate(false);

};

// mapping past guesses to the DOM
const pastGuesses = guesses.map(data => <Guess message={data.message} answer={data.answerArray} attempt={data.attemptNum} key={Math.random()*Math.random()*100} />).reverse()

// removing submission button if out of attempts
 if (counter <= 0){
     button = null;
 }



 return(
     <Container>
         <Row className={classes.topRow}>
            <Col>
                <h1>Challenge Mastermind</h1>
            </Col>
         </Row>
         <Row>
            <Col>
                <h3>Guesses Left: {counter}</h3>
                <hr className={classes.lineBreak} />
                <form onSubmit={displayCalculating}>
                    <RadioInput name="Number 1" change={changeNumOne} />
                    <RadioInput name="Number 2" change={changeNumTwo} />
                    <RadioInput name="Number 3" change={changeNumThree} />
                    <RadioInput name="Number 4" change={changeNumFour} />
                    {button}
                    <br />
                    {showCalculate ? calculate : null}
                </form>
            </Col>
        <Col>
            {pastGuesses}
        </Col>
            {randomNums}
    </Row>
         <Row className={classes.bottomRow}>

        </Row>
     </Container>
 );
};

export default Easy;