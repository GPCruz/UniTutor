import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button, Container } from 'react-bootstrap';
import Login from "./Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppContext } from "../libs/contextLib";
import Welcome from '../components/Welcome';

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
                        <div className="nav">
                            {isAuthenticated ? (
                                <Link exact to="/" onClick={handleLogout}>  
                                    <Button class="btn btn-primary btn-block btn-lg">Logout</Button>
                                </Link>
                            ):""}
                        </div>
                        <Row>
                            <Switch>
                                <Route exact path="/">
                                    {isAuthenticated ? (
                                        <Welcome/>
                                    ):(
                                        <Col><Login /></Col>
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
