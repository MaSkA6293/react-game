import React, { useState } from 'react';
import { ReactComponent as FullScreenOn } from '../../assets/full-screen-on.svg';
import { ReactComponent as FullScreenOff } from '../../assets/full-screen-off.svg';
import './styles.scss';

export default function Header(): React.ReactElement {
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

  const handleClick = () => {
    setIsFullScreen(!isFullScreen);
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">Quick count</h1>
        <button
          className="header__full-screen"
          title="Full screen"
          onClick={handleClick}
        >
          {isFullScreen ? (
            <FullScreenOff
              className="header__full-screen-image"
              fill="black"
              width="20px"
              height="20px"
            />
          ) : (
            <FullScreenOn
              className="header__full-screen-image"
              fill="black"
              width="20px"
              height="20px"
            />
          )}
        </button>
      </div>
    </header>
  );
}
