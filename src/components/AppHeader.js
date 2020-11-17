import unilogo from '../img/logo-unicarioca-vertical.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react';
import { Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

let g_titulo = 'Gerador de conteúdo personalizado';
let nome_aluno = 'Aluno';
let greet_text = 'Olá ' + nome_aluno + ',';

function AppHeader() {

    return <div className="Header">
        <Container>
            <Row>
                <Link exact to="/"><Col sm={3}><img src={unilogo} className="Uni-logo" alt="logo" /></Col></Link>
                <Col sm={9}><p className='App-Title'>{g_titulo}</p></Col>
            </Row>
        </Container>
    </div>
}
  
export default AppHeader