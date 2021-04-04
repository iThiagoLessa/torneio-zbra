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
    this.state = {
      participantes: []
    }
  }
  componentDidMount() {
    console.log(JSON.parse(localStorage.getItem("participantes")));
    const participantesSalvos = JSON.parse(localStorage.getItem("participantes"));
    if(this.state.participantes.length === 0 && participantesSalvos != null) {
      this.setState(participantesSalvos);
    }
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
  render() {
    return (
      <div className="app">
        <Router>
            <Switch>
                <Route exact path="/">
                    <Participantes setParticipante={this.setParticipante} participantes={this.state.participantes} setReload={this.setReload} reload={this.state.reload} />
                </Route>
                <Route path="/chave">
                    <Chave />
                </Route>
                <Route path="/editar/:id">
                    <Editar />
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
