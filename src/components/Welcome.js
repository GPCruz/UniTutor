import Col from 'react-bootstrap/Col'
import React from 'react';

const nome_aluno = 'Arnaldo Batista';

function Welcome() {

    return  <Col>
                Olá, {nome_aluno}!<br />
                Parece que você está com <b>muita dificuldade</b> em <b>Física 1</b>, <b>Fundamentos de Química</b>, <b>Comunicação e Expressão</b> e <b>Raciocínio Lógico</b>.<br />
                Aqui vão alguns materiais que podem ajudar com seus estudos:<br /><br />
                <a href="https://www.fisica.net/problemasresolvidos/">https://www.fisica.net/problemasresolvidos/</a><br />
                <a href="https://www.todamateria.com.br/exercicios/exercicios-de-quimica/">https://www.todamateria.com.br/exercicios/exercicios-de-quimica/</a><br />
                <a href="http://www.consultec.com.br/provas/Unifacs20141.pdf">http://www.consultec.com.br/provas/Unifacs20141.pdf</a><br />
                <a href="https://www.estudegratis.com.br/questoes-de-concurso/materia/raciocinio-logico">https://www.estudegratis.com.br/questoes-de-concurso/materia/raciocinio-logico</a><br />
            </Col>
        
}
  
export default Welcome