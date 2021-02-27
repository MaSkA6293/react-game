import React from "react";
import "./styles.scss";
import { ReactComponent as FullScreen } from "../../assets/switch-to-full-screen-button.svg";

export default function Header({ handle }: any): React.ReactElement {
  return (
    <header className="header">
      <div className="contaner">
        <h1 className="header__title">Quick count</h1>
        <button
          className="header__full-screen"
          title="Full screen"
          onClick={handle.enter}
        >
          <h3 className="header__button-title">Full screen</h3>
          <FullScreen
            className="header__full-screen-image"
            fill="black"
            width="20px"
            height="20px"
          />
        </button>
      </div>
    </header>
  );
}
