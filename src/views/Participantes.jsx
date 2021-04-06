import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/participantes.css";
import Tabela from "../components/Tabela";
import AdicionarParticipantes from "../components/AdicionarParticipantes";


const Participantes = (props) => {
  const openModal = (e) => {
    const modal = document.getElementById("modal");
    modal.style.display = "block";
    modal.style.opacity = 1;
    let msg = document.getElementById("msgError");
    msg.style.display = "none";
  }
  const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    modal.style.opacity = 0;
  }
  return (
    <div className="content">
      <h1>Participantes</h1>
      <div className="add">
        <button onClick={e => openModal(e)}>Adicionar participantes</button>
      </div>
      <Tabela updateTable={props.updateTable} participantes={props.participantes} setParticipante={props.setParticipante} />
      <AdicionarParticipantes closeModal={e => closeModal} participantes={props.participantes} setParticipante={props.setParticipante} />
      <Link to="/chave">Chaves</Link>
    </div>
  );
};

export default Participantes;
