import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../assets/css/editar.css";
const Editar = () => {
  const { id } = useParams();
  const cadastraPessoa = (e) => {
    e.preventDefault();
    const form = document.forms.cadastro;
    console.log(form);
  };
  return (
    <div>
      <div className="formulario">
        <div>
          <header>
            <span>Editar Participante</span>
            <span><Link to="/">Voltar</Link></span>
          </header>
          <form name="cadastro" onSubmit={(e) => cadastraPessoa(e)}>
            <div>
              <label>Nome:</label>
              <input type="text" name="nome" placeholder="insira seu nome" />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="Email"
                name="email"
                placeholder="insira seu email válido"
              />
            </div>
            <div>
              <label>Telefone:</label>
              <input
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
