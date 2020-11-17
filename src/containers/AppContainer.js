import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import AppHeader from '../components/AppHeader';
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AppContext } from "../libs/contextLib";

function AppContainer(props) {
    const [isAuthenticated, userHasAuthenticated] = useState(false);
    
    function handleLogout() {
        userHasAuthenticated(false);
    }

    return (
        <div className="App">
            <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                <Container>
                    <Router>
                        <AppHeader />
                        <div className="nav">
                            <ul className="menu">
                                {isAuthenticated ? (
                                    <li><Link exact to="/" onClick={handleLogout}>Logout</Link></li>
                                ):""}
                            </ul>
                        </div>
                        <Row>
                            <Switch>
                                <Route exact path="/">
                                    {isAuthenticated ? (
                                        <Col>Boas vindas</Col>
                                    ):(
                                        <><Col>Explicação sobre o projeto</Col><Col><Login /></Col></>
                                    )}
                                </Route>
                            </Switch>
                        </Row> 
                    </Router>
                </Container>
            </AppContext.Provider>
        </div>
    );
}
  
export default AppContainer
