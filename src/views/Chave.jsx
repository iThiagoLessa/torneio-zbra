import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/chave.css";
import imgTrofeu from "../assets/img/trofeu.png";

const Chave = () => {
  return (
    <div>
      <h1>Torneio ZBRA - Chaves</h1>
      <div className="conteudo">
        <div className="bloco1">
          <div className="player1">
            <div>jogador 1</div>
            <div></div>
          </div>
          <div className="player2">
            <div></div>
            <div>jogador2</div>
          </div>
        </div>
        <div className="bloco2">
          <div className="player1">
            <div>jogador 3</div>
            <div></div>
          </div>
          <div className="player2">
            <div></div>
            <div>jogador4</div>
          </div>
        </div>
        <div className="bloco3">
          <div>vencedor duelo1</div>
          <div></div>
        </div>
        <div className="bloco4">
          <div></div>
          <div>vencedor duelo2</div>
        </div>
        <div className="bloco5">
            <div><div></div></div>
            <div>
              <img src={imgTrofeu} alt="Campeão!"/>
            </div>
        </div>
      </div>
      <button><Link to="/">Voltar</Link></button>
    </div>
  );
};

export default Chave;
