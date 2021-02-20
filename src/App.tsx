import React from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
function App(): React.ReactElement {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
