import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
export default function Game() {
  return (
    <div className="game">
      <div className="contaner">
        <Link to="/">
          <button className="game__exit">Exit</button>
        </Link>
      </div>
    </div>
  );
}
