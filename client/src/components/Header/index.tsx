import React from 'react';
import { ReactComponent as FullScreen } from '../../assets/switch-to-full-screen-button.svg';
import './styles.scss';

export default function Header({
  handle,
}: {
  handle: () => void;
}): React.ReactElement {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Quick count</h1>
        <button
          className="header__full-screen"
          title="Full screen"
          onClick={handle}
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
