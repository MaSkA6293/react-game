import React from 'react';
import { Footer } from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import Game from './components/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAudio } from './hooks/useAudio';
import mainMusic from './assets/mainMusic.mp3';
import ErrorBoundary from './components/ErrorBoundary';
import './App.scss';

function App(): React.ReactElement {
  const handleFullScreen = () => {
    document.documentElement.requestFullscreen();
  };
  const myRoot = React.useRef(null);
  const [playing, toggle] = useAudio(mainMusic);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="app" ref={myRoot}>
          <Header handle={handleFullScreen} />
          <Routes>
            <Route
              path="/"
              element={
                <Main playing={playing} toggle={toggle} myRoot={myRoot} />
              }
            ></Route>
            <Route path="/game" element={<Game myRoot={myRoot} />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
