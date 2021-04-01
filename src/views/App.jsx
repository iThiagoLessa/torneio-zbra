import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Participantes from "./Participantes";
import Chave from "./Chave";
import "../assets/css/index.css";

const App = () => {
  return (
    <div className="app">
      <Router>
          <Switch>
              <Route exact path="/">
                  <Participantes />
              </Route>
              <Route path="/chave">
                  <Chave />
              </Route>
          </Switch>
      </Router>
    </div>
  );
};

export default App;
