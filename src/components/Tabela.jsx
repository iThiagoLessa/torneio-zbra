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
        <tr>
          <td>Thiago</td>
          <td>(21)96575-0502</td>
          <td>ithiagolessa@gmail.com</td>
          <td><button>Editar</button></td>
          <td><button>Excluir</button></td>
        </tr>
        <tr>
          <td>Danyel</td>
          <td>(21)96575-0502</td>
          <td>ithiagolessa@gmail.com</td>
          <td><button>Editar</button></td>
          <td><button>Excluir</button></td>
        </tr>
        <tr>
          <td>Paulinho</td>
          <td>(21)96575-0502</td>
          <td>ithiagolessa@gmail.com</td>
          <td><button>Editar</button></td>
          <td><button>Excluir</button></td>
        </tr>
        <tr>
          <td>Marcos</td>
          <td>(21)96575-0502</td>
          <td>ithiagolessa@gmail.com</td>
          <td><button>Editar</button></td>
          <td><button>Excluir</button></td>
        </tr>
      </tbody>
    </table>
  );
};


export default Tabela;