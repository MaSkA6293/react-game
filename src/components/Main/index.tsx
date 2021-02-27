import React from "react";
import "./styles.scss";
import { useSelector, useDispatch } from "react-redux";
import Count from "../Count";
import Status from "../Status";
import Playgame from "../Playgame";
import Sign from "../Sign";
import Achievement from "../Achievement";
import { setSign, setBestResults, setCount } from "../../actionCreators";
import {
  selectGameSign,
  selectGameCount,
  selectGameBestResults,
} from "../../selectors";
import Settings from "../Settings";
interface IMain {
  toggle: () => void;
  playing: boolean;
  myroot: any;
}
export default function Main({
  toggle,
  playing,
  myroot,
}: IMain): React.ReactElement {
  const sign = useSelector(selectGameSign);
  const count = useSelector(selectGameCount);
  const bestResults = useSelector(selectGameBestResults);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const localStorageSign = localStorage.getItem("sign");
    if (localStorageSign) {
      dispatch(setSign(localStorageSign));
    }
    const localStorageBestResults = localStorage.getItem("quick-count");
    if (localStorageBestResults) {
      dispatch(setBestResults(JSON.parse(localStorageBestResults)));
    }
    const localStorageCountNumbers = localStorage.getItem("countNumbers");
    if (localStorageCountNumbers) {
      dispatch(setCount(+JSON.parse(localStorageCountNumbers)));
    }
  }, []);
  return (
    <div className="main">
      <div className="contaner">
        <div className="main__contaner">
          <Status count={count} sign={sign} />
          <section className="main__settings">
            <Settings toggle={toggle} playing={playing} myroot={myroot} />
          </section>
          <section className="main__set-up-game">
            <Sign sign={sign} />
            <Achievement
              bestResults={bestResults}
              sign={sign}
              countNumber={count}
            />
            <Count count={count} />
          </section>
          <Playgame />
        </div>
      </div>
    </div>
  );
}
