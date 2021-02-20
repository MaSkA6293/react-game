import React from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App(): React.ReactElement {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
