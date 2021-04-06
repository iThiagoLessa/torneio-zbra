import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/chave.css";
import EstruturaTorneio from "../components/EstruturaTorneio";

const Chave = (props) => {
  //console.log(props);
  return (
    <div className="torneio">
      <h1>Torneio ZBRA - Chaves</h1>
      <EstruturaTorneio participantes={props.participantes} />
      <div className="back">
          <button><Link to="/">Voltar</Link></button>
      </div>
    </div>
  );
};

export default Chave;
