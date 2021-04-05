import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Participantes from "./Participantes";
import Chave from "./Chave";
import Editar from "./Editar";
import NotFound from "./NotFound";
import "../assets/css/index.css";

class App extends Component {
  constructor() {
    super();
    this.setParticipante = this.setParticipante.bind(this);
    this.updateTable = this.updateTable.bind(this)
    this.state = {
      participantes: []
    }
  }
  componentDidMount() {
    // inserindo com o json que está salva no localStorage
    const participantesSalvos = JSON.parse(localStorage.getItem("participantes"));
    if(this.state.participantes.length === 0 && participantesSalvos != null) {
      this.setState({
        participantes: participantesSalvos
      });
    }
   // console.log(this.state.participantes)
    console.log("did renderizado");
  }
  setParticipante(participante) {
    const novoParticipante = [...this.state.participantes, participante];
    const novoArray = {
      participantes: novoParticipante
    }
    //console.log(novoArray)
    localStorage.setItem("participantes", JSON.stringify(novoArray));
    this.setState(novoArray);
  }
  updateTable(valor) {
    this.setState({
      participantes: valor
    });
    localStorage.setItem("participantes", JSON.stringify(valor));
  }
  render() {
    return (
      <div className="app">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Participantes updateTable={this.updateTable} setParticipante={this.setParticipante} participantes={this.state.participantes} />
                </Route>
                <Route path="/chave">
                    <Chave />
                </Route>
                <Route path="/editar/:id">
                    <Editar updateTable={this.updateTable} setParticipante={this.setParticipante} participantes={this.state.participantes} />
                </Route>
                <Route exact path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
      </div>
    ) 
  }
};

export default App;
