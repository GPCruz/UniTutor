import Col from 'react-bootstrap/Col'
import React from 'react';

const nome_aluno = 'Arnaldo Batista';

function Welcome() {

    return  <Col>
                <div className="welcome-msg">
                    Olá, {nome_aluno}!<br />
                    Parece que você está com <b>muita dificuldade</b> em algumas disciplinas.<br/>
                    Separamos por disciplina alguns materiais que podem ajudar com seus estudos:<br /><br />
                    <a href="https://www.fisica.net/problemasresolvidos/">Física 1</a><br />
                    <a href="https://www.todamateria.com.br/exercicios/exercicios-de-quimica/">Fundamentos de Química</a><br />
                    <a href="http://www.consultec.com.br/provas/Unifacs20141.pdf">Comunicação e Expressão</a><br />
                    <a href="https://www.estudegratis.com.br/questoes-de-concurso/materia/raciocinio-logico">Raciocínio Lógico</a><br />
                </div>
            </Col>
        
}
  
export default Welcome