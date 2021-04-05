import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../assets/css/editar.css";
const Editar = (props) => {
  const { id } = useParams();
  const index = props.participantes.findIndex((elm) => {
    return elm.id === parseInt(id);
  });
  const form = document.forms.cadastro;
  const { nome, email, telefone } = form;

    
  
  const cadastraPessoa = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="formulario">
        <div>
          <header>
            <span>Editar Participante</span>
            <span><Link to="/">Voltar</Link></span>
          </header>
          <form name="cadastrar" onSubmit={(e) => cadastraPessoa(e)}>
            <div>
              <label>Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="insira seu nome" />
            </div>
            <div>
              <label>Email:</label>
              <input
                id="email"
                type="Email"
                name="email"
                placeholder="insira seu email válido"
              />
            </div>
            <div>
              <label>Telefone:</label>
              <input
                id="telefone"
                type="number"
                name="telefone"
                placeholder="insira seu telefone"
              />
            </div>
            <footer>
              <button><Link to="/">Voltar</Link></button>
              <button>Editar</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editar;
