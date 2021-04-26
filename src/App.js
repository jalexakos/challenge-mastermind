import './App.css';

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './Home/Home';
import Play from './Play/Play';
import HowItWorks from './HowItWorks/HowItWorks';

function App() {

  return (
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <Container>
              <Row>
              <Col>
              <li>
                <Link to="/how-it-works">How It Works</Link>
              </li>
              </Col>
              <Col>
              <li>
                <Link to="/">Home</Link>
              </li>
              </Col>
              <Col>
              <li>
                <Link to="/play">Play</Link>
              </li>
              </Col>
              </Row>
            </Container>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/play">
            <Play />
          </Route>
          <Route path="/how-it-works">
            <HowItWorks />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
