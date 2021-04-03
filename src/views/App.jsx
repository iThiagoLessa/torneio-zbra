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
    this.setReload = this.setReload.bind(this);
    this.setParticipante = this.setParticipante.bind(this);
    this.state = {
      reload: 0,
      participantes: []
    }
  }
  setReload(reload){
    this.setState({reload});
    console.log(localStorage.getItem("participantes"));
    console.log(this.state.participantes);
  }
  setParticipante(participante) {
    const novoParticipante = [...this.state.participantes, participante];
    const novoArray = {
      participantes: novoParticipante
    }
    this.setState(novoArray);
    //console.log(this.state.participantes)
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
