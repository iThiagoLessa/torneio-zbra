import React, { useEffect } from "react";
import imgTrofeu from "../assets/img/trofeu.png";
const EstruturaTorneio = (props) => {
  useEffect(() => {
    const obj = [...props.participantes];
    obj.filter((participante, index) => {
      const jogador = document.getElementById(`jogador${index+1}`);
      jogador.innerHTML = participante.nome;
    });
    if(obj.length === 3 ) {
      const finalista2 = document.getElementById("finalista2");
      finalista2.innerHTML = obj[2].nome;
    }
  });
  return (
    <div className="conteudo">
      <div className="bloco1">
        <div className="player1">
          <div>
            <span id="jogador1">jogador1</span>
          </div>
          <div></div>
        </div>
        <div className="player2">
          <div></div>
          <div>
            <span id="jogador2">jogador2</span>
          </div>
        </div>
      </div>
      <div className="bloco2">
        <div className="player1">
          <div>
            <span id="jogador3">jogador3</span>
          </div>
          <div></div>
        </div>
        <div className="player2">
          <div></div>
          <div>
            <span id="jogador4">jogador4</span>
          </div>
        </div>
      </div>
      <div className="bloco3">
        <div>
          <span id="finalista1">finalista1</span>
        </div>
        <div></div>
      </div>
      <div className="bloco4">
        <div></div>
        <div>
          <span id="finalista2">finalista2</span>
        </div>
      </div>
      <div className="bloco5">
        <div>
          <div></div>
        </div>
        <div>
          <img src={imgTrofeu} alt="Campeão!" />
        </div>
      </div>
    </div>
  );
};

export default EstruturaTorneio;
