import React from "react";
import { Link } from "react-router-dom";

export default function Playgame({ click }: any): React.ReactElement {
  return (
    <section className="main__play-game play-game">
      <Link to="/game" className="play-game__start-link" onClick={click}>
        <button className="play-game__start">Start game</button>
      </Link>
    </section>
  );
}