import React from "react";
import { ReactComponent as SoundOn } from "../../assets/soundOn.svg";
import { ReactComponent as SoundOff } from "../../assets/soundOff.svg";
import { ReactComponent as RemoveResults } from "../../assets/remove_results.svg";
import { ReactComponent as Rules } from "../../assets/rules.svg";
import { setBestResults } from "../../actionCreators";
import { useDispatch } from "react-redux";
import CustomModal from "../CustomModal";
import "./styles.scss";
interface ISettings {
  toggle: () => void;
  playing: boolean;
  myroot: any;
}
export default function Settings({
  playing,
  toggle,
  myroot,
}: ISettings): React.ReactElement {
  const dispatch = useDispatch();
  const handleRemove = () => {
    if (localStorage.getItem("quick-count") !== undefined) {
      localStorage.setItem("quick-count", "");
      dispatch(setBestResults(undefined));
    }
  };
  const [open, setOpen] = React.useState(false);

  const handleShowRules = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };
  const textRule = () => {
    return (
      <p className="settings__rules">
        {" "}
        You need to sort out the task on the scoreboard above and choose the
        correct answer
      </p>
    );
  };
  return (
    <div className="settings">
      {myroot.current && (
        <CustomModal
          isOpen={open}
          closeModal={closeModal}
          root={myroot}
          tryAgain={undefined}
          message={undefined}
          child={textRule()}
        />
      )}
      <ul className="settings__list">
        <li className="settings__list-item" onClick={toggle}>
          {playing ? <SoundOn /> : <SoundOff />}
        </li>
        <li className="settings__list-item" onClick={handleRemove}>
          <RemoveResults width="100%" height="100%" />
        </li>
        <li className="settings__list-item" onClick={handleShowRules}>
          <Rules width="100%" height="100%" />
        </li>
      </ul>
    </div>
  );
}
