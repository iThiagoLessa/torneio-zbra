import React from "react";
import { Link } from "react-router-dom";

const Tabela = (props) => {
  function getPath(id) {
    return `editar/${id}`
  }
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {
          props.participantes.map((participante, index) => {
            return(
              <tr key={index}>
                <td>{participante.nome}</td>
                <td>{participante.email}</td>
                <td>{participante.telefone}</td>
                <td><button><Link to={getPath(participante.id)} >Editar</Link></button></td>
                <td><button>Excluir</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};


export default Tabela;