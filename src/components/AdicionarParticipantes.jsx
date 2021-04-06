import React, { useState } from "react";
import "../assets/css/adicionarParticipantes.css";

const AdicionarParticipantes = (props) => {
  //console.log(props);
  const cadastraPessoa = (e) => {
    e.preventDefault();
    if (props.participantes.length === 4) {
      let msg = document.getElementById("msgError");
      msg.style.display = "block";
      return;
    } else {
      const form = document.forms.cadastro;
      const { nome, email, telefone } = form;
      if(nome.value.trim() === "" || email.value.trim() === "" || telefone.value.trim() === "") return;
      const participante = {
        id: props.participantes.length + 1,
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
      };
      //console.log(participante)
      props.setParticipante(participante);
      const modal = document.getElementById("modal");
      modal.style.display = "none";
      modal.style.opacity = 0;
      form.reset();
    }
  };
  const close = props.closeModal();
  const fechar = (e) => {
    e.preventDefault();
    //console.log(props.participantes);
    close();
  };
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
              <input type="text" name="nome" required placeholder="insira seu nome" />
            </div>
            <div>
              <label>Email:</label>
              <input
                required
                type="Email"
                name="email"
                placeholder="insira seu email válido"
              />
            </div>
            <div>
              <label>Celular:</label>
              <input
                type="number"
                required
                name="telefone"
                placeholder="(xx)xxxx-xxxx"
              />
            </div>
            <footer>
              <button onClick={(e) => fechar(e)}>Fechar</button>
              <button>Salvar</button>
            </footer>
          </form>
          <div id="msgError">
            <span>
              Número de máximo de jogadores atingido!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdicionarParticipantes;
