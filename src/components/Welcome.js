import Col from 'react-bootstrap/Col'
import React from 'react';

let nome_aluno = 'Yonarah';
let greet_text = 'Olá ' + nome_aluno + ',';

function Welcome() {

    return <>
        <Col>{greet_text}</Col>
    </>
}
  
export default Welcome