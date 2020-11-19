import unilogo from '../img/logo-unicarioca-vertical.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react';
import { Container } from 'react-bootstrap';

let g_titulo = 'Gerador de conteúdo personalizado';

const about = "Este tutor virtual utiliza um sistema de Machine Learning para de identificar défices no seu aprendizado e fornecer conteúdos personalizados para auxiliar na melhoria de seu desempenho acadêmico.";

function AppHeader() {

    return <div className="Header">
        <Container>
            <Row>
                <Col sm={3}><img src={unilogo} className="Uni-logo" alt="logo" /></Col>
                <Col sm={9}>
                    <Col xs={12}><p className='App-Title'>{g_titulo}</p></Col>
                    <Col xs={12}><p className='App-Subtitle'>{about}</p></Col>
                </Col>
            </Row>
        </Container>
    </div>
}
  
export default AppHeader