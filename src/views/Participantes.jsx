import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/participantes.css";
import Tabela from "../components/Tabela";
import AdicionarParticipantes from "../components/AdicionarParticipantes";

const Participantes = (props) => {
  return (
    <div className="content">
      <h1>Participantes</h1>
      <div className="add">
        <button>Adicionar participantes</button>
      </div>
      <Tabela />
      <AdicionarParticipantes participantes={props.participantes} setParticipante={props.setParticipante} setReload={props.setReload} reload={props.reload} />
      <Link to="/chave">Chaves</Link>
    </div>
  );
};

export default Participantes;
