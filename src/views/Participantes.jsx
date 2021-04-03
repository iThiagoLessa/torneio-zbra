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
      <Tabela />
      <AdicionarParticipantes closeModal={e => closeModal} participantes={props.participantes} setParticipante={props.setParticipante} setReload={props.setReload} reload={props.reload} />
      <Link to="/chave">Chaves</Link>
    </div>
  );
};

export default Participantes;
