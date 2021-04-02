import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/participantes.css";

const Participantes = (props) => {
  return (
    <div className="content">
      <h1>Participantes</h1>
      <div className="add">
        <button>Adicionar participantes</button>
      </div>
      <table className="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Celular</th>
            <th>Email</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Thiago</td>
            <td>(21)96575-0502</td>
            <td>ithiagolessa@gmail.com</td>
            <td>editar</td>
            <td>excluir</td>
          </tr>
        </tbody>
      </table>
      <Link to="/chave">Chaves</Link>
    </div>
  );
};

export default Participantes;
