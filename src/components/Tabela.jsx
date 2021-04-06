import React from "react";
import { Link } from "react-router-dom";

const Tabela = (props) => {
  function getPath(id) {
    return `editar/${id}`
  }
  //console.log(props)
  function excluirItem(id) {
    const obj = [...props.participantes];
    const index = obj.findIndex((elm) => {
      return elm.id === id;
    });
    //removendo do json
    obj.splice(obj.indexOf(index), 1);
    props.updateTable(obj)
    //console.log(obj);
  }
  const mask = (value, pattern) => {
    let i = 0;
    const v = value.toString();
    return pattern.replace(/#/g, () => v[i++] || '');
  }
  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Celular</th>
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
                <td>{mask(participante.telefone, '(##)#####-####')}</td>
                <td><button><Link to={getPath(participante.id)} >Editar</Link></button></td>
                <td><button onClick={e => excluirItem(participante.id)}>Excluir</button></td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  );
};


export default Tabela;