import React from "react";
import { ReactComponent as SoundOn } from "../../assets/soundOn.svg";
import { ReactComponent as SoundOff } from "../../assets/soundOff.svg";

import "./styles.scss";
interface ISettings {
  toggle: () => void;
  playing: boolean;
}
export default function Settings({
  playing,
  toggle,
}: ISettings): React.ReactElement {
  return (
    <div className="settings">
      <ul className="settings__list">
        <li className="settings__list-item" onClick={toggle}>
          {playing ? <SoundOn /> : <SoundOff />}
        </li>
      </ul>
    </div>
  );
}
