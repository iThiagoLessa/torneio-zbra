import React from "react";

const Tabela = (props) => {
  return (
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
        {
          props.participantes.map((participante, index) => {
            return(
              <tr key={index}>
                <td>{participante.nome}</td>
                <td>{participante.email}</td>
                <td>{participante.telefone}</td>
                <td><button>Editar</button></td>
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