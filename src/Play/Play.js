import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Guess from '../Guess/Guess';
import RadioInput from '../RadioInput/RadioInput';
import classes from './Play.module.css';

const Play = () => {

// initializing amount of random numbers state
const [ numbers, setNumbers ] = useState(4);
// initializing counter state
const [ counter, setCounter ] = useState(10);
// initializing random numbers array state
const [ randomNums, setRandomNums ] = useState([]);
// initializing radio buttons array
const [ radioButtons, setRadioButtons ] = useState([]);
// initializing answer array
const [ answerArray, setAnswerArray ] = useState([]);
// initializing attempt number state
const [ attemptNum, setAttemptNum ] = useState(1);
// initializing past guesses array
const [ guesses, setGuesses ] = useState([]);

// staged array variable for numbers to be submitted
let answerArrayCopy = [];

// tracking numbers selected
const changeNum = (i, e) => {
    answerArrayCopy[i-1] = parseInt(e.target.value);
    setAnswerArray(answerArrayCopy);
};

// the GET request to get the random numbers; re-renders when number of random numbers requested is changed
 useEffect(() => {
    let array = [];
    for (let i = 1; i < numbers+1; i++){
        array.push(<RadioInput name={`Number ${i}`} key={i} id={i} change={changeNum} />);
    };

    setRadioButtons(array);

     axios.get(`https://www.random.org/integers/?num=${numbers}&min=0&max=7&col=1&base=10&format=plain&rnd=new`)
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
     .catch(e => {
        // console.log(e);
        let randomArray = [];
        for (let i = 0; i < numbers; i++){
            randomArray.push(Math.floor(Math.random() * 7));
        };
        setRandomNums(randomArray);
    });
    // eslint-disable-next-line
 }, [numbers]);

 // initializing the button that counts down from 10
 let button = <input type="submit" value="Submit My Guess!" className={classes.submitButton} />;

// creating staged variables so the state is not updated until the first form is submitted
// staged variable for number of random numbers
let stagingRandomNum = 4;
// staged variable for number of guess
let stagingGuesses = 10;
// tracking random number selected
const changeRandomNum = e => stagingRandomNum = parseInt(e.target.value); //setNumbers
// tracking number of guesses selected
const changeGuesses = e => stagingGuesses = parseInt(e.target.value); //setCounter

// updating the state to change the number of random numbers and the number of guesses
const changeDifficulty = e => {
    e.preventDefault();
    setNumbers(stagingRandomNum);
    setCounter(stagingGuesses);
};

// Comparing the numbers to determine correctness
const compareNums = e => {
    // stopping page refresh
    e.preventDefault();
    
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
    
    // initializing instance counter
    let instance = 0;
    // initializing location counter
    let location = 0;
    // initializing random Set
    let randomSet = new Set();
    // initializing submitted Set
    let submittedSet = new Set();

    // if not exactly the same, checking for correct location first
    for (let i = 0; i < answerArray.length; i++){
       
        randomSet.add(randomNums[i]);
        submittedSet.add(answerArray[i]);

        // is the number in the correct place?
        if (answerArray[i] === randomNums[i]){
            location++;
            instance--;
        };
    };

    for (let num of submittedSet){
        if (randomSet.has(num)){
            instance++;
          };
        };

    let total = [instance, location];
    
    // at least one number was in the array and the right place; at least one number was in the array
    if (total[0] < 0) {
        total[0] = 0;
    };

    if (total[0] !== 0 || total[1] !== 0){
        message = `You guessed ${String(total[1])} location(s) correct and ${String(total[0])} other number(s) correct!`;
    };

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

// removing submission button if out of attempts
 if (counter <= 0){
     button = null;
 }

 return(
     <Container>
         <Row className={classes.topRow}>
            <Col>
                <h1>Challenge Mastermind</h1>
                <form onSubmit={changeDifficulty}>
                    <label className={classes.label}>Choose how many random numbers you want to guess against:</label>
                    <select  className={classes.select} id="randomNumber" name="Random Numbers" defaultValue="4" onChange={changeRandomNum}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <label className={classes.label}>Choose how many guesses you get:</label>
                    <select  className={classes.select} id="guesses" name="Guesses" defaultValue="10" onChange={changeGuesses}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10" defaultValue>10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                    <input type="submit" value="Change 'em!" className={classes.submitButton} />
                </form>
            </Col>
         </Row>
         <Row>
            <Col>
                <h3>Guesses Left: {counter}</h3>
                <hr className={classes.lineBreak} />
                <form onSubmit={compareNums}>
                    {radioButtons}
                    {button}
                </form>
            </Col>
        <Col>
            <TransitionGroup component={null}>
                {guesses.map(data => <CSSTransition key={data.attemptNum} in={true} appear={true} enter={true} timeout={2000} classNames="fade"><Guess message={data.message} answer={data.answerArray} attempt={data.attemptNum} /></CSSTransition>).reverse()}
            </TransitionGroup>
        </Col>
    </Row>
    <Row className={classes.bottomRow}>
    </Row>
     </Container>
 );
};

export default Play;