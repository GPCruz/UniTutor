import React, { useState } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import Login from "./Login";

function AppContainer(props) {
    const [page, setPage] = useState("login");
    return (
        <div className="App">
            <Container>
            <div className="nav">
            <ul className="menu">
                <li className="menu-item" onClick={() => setPage("login")}>Login</li>
                <li className="menu-item" onClick={() => setPage("resumo")}>Resumo</li>
                <li className="menu-item" onClick={() => setPage("content")}>Conteúdo</li>
                <li className="menu-item" onClick={() => setPage("welcome")}>Bem vindo</li>
            </ul>
        </div>
                <Row>
                    <Col>
                    {page === "resumo" && "Explicação do Projeto"}
                    {page === "login" && <Login/>}
                    {page === "content" && "Conteúdo"}
                    {page === "welcome" && "Boas vindas"}</Col>
                </Row> 
            </Container>
        </div>
    );
}
  
export default AppContainer
