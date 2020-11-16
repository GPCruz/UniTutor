import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import Login from "./Login";

function AppContainer(props) {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>Explicação do Projeto</Col>
                    <Col sm={6}>
                    <Login></Login></Col>
                </Row>
                <Row>
                    <Col>Conteúdo</Col>
                </Row>
                <Row>
                    <Col>Boas vindas</Col>
                </Row> 
            </Container>
        </div>
    );
}
  
export default AppContainer
