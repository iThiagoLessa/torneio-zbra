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
  componentDidMount() {
    if(this.state.reload === 1) {
      this.setState({
        reload: 0
      });
    }
  }
  setReload(valor){
    this.setState({reload: valor})
  }
  setParticipante(participantes) {
    const novoParticipante = [...this.state.participantes, participantes];
    const novoArray = {
      participantes: novoParticipante
    }
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
