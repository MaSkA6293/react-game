import React from "react";
import "./styles.scss";
import { useSelector } from "react-redux";
import Count from "../Count";
import Status from "../Status";
import Playgame from "../Playgame";
import Sign from "../Sign";
import Achievement from "../Achievement";
import { selectGameSign, selectGameCount } from "../../selectors";
export default function Main(): React.ReactElement {
  const sign = useSelector(selectGameSign);
  const count = useSelector(selectGameCount);
  return (
    <div className="main">
      <div className="contaner">
        <div className="main__contaner">
          <Status count={count} sign={sign} />
          <section className="main__set-up-game">
            <Sign />
            <Achievement />
            <Count count={count} />
          </section>
          <Playgame />
        </div>
      </div>
    </div>
  );
}
