import React from 'react';

import './Home.css';

import { CSSTransition } from 'react-transition-group';

const Home = props => {

    return(
        <div>
            <h1>
                Welcome to the Challenge Mastermind!
            </h1>
            <br />
            <h2>
                A Game of Man Against Machine
            </h2>
            <br />
            <h3>
                Who Can Best Whom?
            </h3>
            <br />
            <CSSTransition in={true} appear={true} timeout={2000} classNames="fade">
                <a className="link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=KXzNo0vR_dU">"Shall We Play A Game?"</a>
            </CSSTransition>            
        </div>
    );
};

export default Home;