import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TextBox from '../TextBox/TextBox';

const HowItWorks = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <h2>How It Works</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>What is it?</h3>
                    <TextBox content="It's a game against your computer - can you guess the numbers before your guesses run out?"  />
                    <TextBox content="You'll get a set number of guesses, and you can use those to try and guess the numbers that the computer has selected."  />
                    <TextBox content="You don't need to guess it correctly the first time - you'll get a few tries! And you can always look back at your previous guesses." />
                    <TextBox content="Use your guesses to see where things went well, and where they didn't. But be careful - once you run out of guesses, the game is over!" />
                    <TextBox content="The number is different every time you play. So if you want to reset, you can just refresh the page." />
                </Col>
                <Col>
                    <h3>How does it work?</h3>
                    <TextBox content="First, you have to click 'Play' (in the top right)." />
                    <TextBox content="On the top of the page, you'll see the couple of dropdown options. You don't have to do anything with those. But if you want to change either the number of guesses you get or how many random numbers you have to guess, you can change them with those dropdowns." />
                    <TextBox content="WARNING: changing the number of guesses or number of random numbers resets the game entirely! Don't hit Submit unless you want to start over." />
                    <TextBox content="On the left side of the screen, you'll see rows of buttons. Those are the possible numbers you can choose."  />
                    <TextBox content="Above the numbers, you'll see your counter. It tells you how many guesses you have left."  />
                    <TextBox content="Below the buttons, there's the submit button. Once you click that, the computer will compare your numbers to its numbers. If they're the same, you'll win!"  />
                    <TextBox content="If there are no matches at all, the computer will tell you on the right side of the screen."  />
                    <TextBox content="If one (or more) of the numbers you picked was in the numbers the computer picked, it will tell you."  />
                    <TextBox content="If you picked one (or more) numbers in the correct location, the computer will tell you that, too."  />
                </Col>
            </Row>
        </Container>
    )
};

export default HowItWorks;