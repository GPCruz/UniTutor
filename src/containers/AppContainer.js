import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function AppContainer(props) {
    return (
        <div className="App">
            <Container>
                <Router>
                    <div className="nav">
                        <ul className="menu">
                            <li><Link exact to="/">Login</Link></li>
                            <li><Link exact to="/about">Resumo</Link></li>
                            <li><Link exact to="/welcome">Bem Vindo</Link></li>
                        </ul>
                    </div>
                    <Row>
                        <Col>
                            <Switch>
                                <Route exact path="/"><Login /></Route>
                                <Route exact path="/about">Explicação sobre o projeto</Route>
                                <Route exact path="/welcome">Boas vindas</Route>
                            </Switch>
                        </Col>
                    </Row> 
                </Router>
            </Container>
        </div>
    );
}
  
export default AppContainer
