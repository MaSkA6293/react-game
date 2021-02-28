import React from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import Game from "./components/Game";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAudio } from "./hooks/useAudio";
import mainMusic from "./assets/mainMusic.mp3";
import ErrorBoundary from "./components/ErrorBoundary";
function App(): React.ReactElement {
  const handleFullScreen = () => {
    document.documentElement.requestFullscreen();
  };
  const myroot = React.useRef(null);
  const [playing, toggle] = useAudio(mainMusic);
  return (
    <ErrorBoundary>
      <Router>
        <div className="app" ref={myroot}>
          <Header handle={handleFullScreen} />
          <Switch>
            <Route path="/" exact>
              <Main playing={playing} toggle={toggle} myroot={myroot} />
            </Route>
            <Route path="/game">
              <Game myroot={myroot} />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
