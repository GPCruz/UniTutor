import Col from 'react-bootstrap/Col'
import React from 'react';

let nome_aluno = 'Yonarah';
let greet_text = <>Olá {nome_aluno}!<br />
Parece que você está com dificuldade em <b>Cálculo 3</b> e <b>Estatística</b>.<br />
Aqui vão alguns materiais que podem ajudar com seus estudos:<br />
Link<br />
Link<br />
Link<br /></>;


function Welcome() {

    return <>
        <Col>{greet_text}</Col>
    </>
}
  
export default Welcome