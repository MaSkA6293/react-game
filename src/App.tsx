import React, { useCallback } from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App(): React.ReactElement {
  const handle = useFullScreenHandle();
  const myroot = React.useRef(null);
  return (
    <FullScreen handle={handle}>
      <Router>
        <div className="app" ref={myroot}>
          <Header handle={handle} />
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/game">
              <Game myroot={myroot} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </FullScreen>
  );
}

export default App;
