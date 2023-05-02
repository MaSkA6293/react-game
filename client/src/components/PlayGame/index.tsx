import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayGame(): React.ReactElement {
  return (
    <section className="main__play-game play-game">
      <Link to="/game" className="play-game__start-link">
        <button className="play-game__start">Start game</button>
      </Link>
    </section>
  );
}
