import React, { Component } from "react";
import { Link } from "react-router-dom";

class Participantes extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Participantes</h1>
        <Link to="/chave">Chaves</Link>
      </div>
    );
  }
}

export default Participantes;
