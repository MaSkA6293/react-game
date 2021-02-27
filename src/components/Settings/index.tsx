import React from "react";
import { ReactComponent as SoundOn } from "../../assets/soundOn.svg";
import { ReactComponent as SoundOff } from "../../assets/soundOff.svg";
import { ReactComponent as RemoveResults } from "../../assets/remove_results.svg";
import { setBestResults } from "../../actionCreators";
import { useDispatch } from "react-redux";
import "./styles.scss";
interface ISettings {
  toggle: () => void;
  playing: boolean;
}
export default function Settings({
  playing,
  toggle,
}: ISettings): React.ReactElement {
  const dispatch = useDispatch();
  const handleRemove = () => {
    if (localStorage.getItem("quick-count") !== undefined) {
      localStorage.setItem("quick-count", "");
      dispatch(setBestResults(undefined));
    }
  };
  return (
    <div className="settings">
      <ul className="settings__list">
        <li className="settings__list-item" onClick={toggle}>
          {playing ? <SoundOn /> : <SoundOff />}
        </li>
        <li className="settings__list-item" onClick={handleRemove}>
          <RemoveResults width="100%" height="100%" />
        </li>
      </ul>
    </div>
  );
}
