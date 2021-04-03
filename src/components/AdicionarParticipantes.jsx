import React from "react";
import "../assets/css/adicionarParticipantes.css";

const AdicionarParticipantes = (props) => {
  console.log(props);
  const cadastraPessoa = (e) => {
    e.preventDefault();
    const form = document.forms.cadastro;
    const { nome, email, telefone } = form;
    const participante = {
      nome: nome.value,
      email: email.value,
      telefone: telefone.value,
    };
    props.setParticipante(participante);
  };
  const close = props.closeModal();
  const fechar = (e) => {
    e.preventDefault();
    close();
  }
  return (
    <div id="modal">
      <div className="formulario">
        <div>
          <header>
            <span>Adicionar Participantes</span>
            <span onClick={props.closeModal()}>fechar</span>
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
              <button onClick={e => fechar(e)}>Fechar</button>
              <button>Salvar</button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdicionarParticipantes;
