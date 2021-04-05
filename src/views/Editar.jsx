import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "../assets/css/editar.css";
const Editar = (props) => {
  console.log(props)
  const { id } = useParams();
  useEffect(() => {
    const obj = [...props.participantes];
    const index = obj.findIndex((elm) => {
      return elm.id === parseInt(id);
    });
    if(obj.length > 0) {
     //console.log(obj);
      const form = document.forms.cadastro;
      const { nome, email, telefone } = form;
      nome.value = obj[index].nome;
      email.value = obj[index].email;
      telefone.value = obj[index].telefone;
    }
  }, [props, id]);

  const cadastraPessoa = (e) => {
    e.preventDefault();
    const obj = [...props.participantes];
    const index = obj.findIndex((elm) => {
      return elm.id === parseInt(id);
    });
    const form = document.forms.cadastro;
    const { nome, email, telefone } = form;
    obj[index].nome = nome.value;
    obj[index].email = email.value;
    obj[index].telefone = telefone.value;
    props.updateTable(obj);
  };
  return (
    <div>
      <div className="formulario">
        <div>
          <header>
            <span>Editar Participante</span>
            <span>
              <Link to="/">Voltar</Link>
            </span>
          </header>
          <form
            name="cadastro"
            onSubmit={(e) => cadastraPessoa(e)}
          >
            <div>
              <label>Nome:</label>
              <input type="text" name="nome" placeholder="insira seu nome" />
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
              <button>
                <Link to="/">Voltar</Link>
              </button>
              <button>Editar</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Editar;
