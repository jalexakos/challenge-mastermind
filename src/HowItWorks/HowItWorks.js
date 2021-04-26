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
                    <TextBox content="On the left side of the screen, you'll see rows of buttons. Those are the possible numbers you can choose."  />
                    <TextBox content="Above the numbers, you'll see your counter. It tells you how many guesses you have left."  />
                    <TextBox content="Below the buttons, there's the submit button. Once you click that, the computer will compare your numbers to its numbers. If they're the same, you'll win!"  />
                    <TextBox content="If there are no matches at all, the computer will tell you on the right side of the screen."  />
                    <TextBox content="If at least one of the numbers you picked was in the numbers the computer picked, it will tell you."  />
                    <TextBox content="If you picked at least one number in the correct location, the computer will tell you. But that's all it'll give you! So guess carefully."  />
                </Col>
            </Row>
        </Container>
    )
};

export default HowItWorks;