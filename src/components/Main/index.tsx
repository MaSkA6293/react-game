import React from "react";
import "./styles.scss";
import classNames from "classnames";
import Counter from "../Counter";
import { ReactComponent as ArrowDown } from "../../assets/arrow-down.svg";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Divide } from "../../assets/divide.svg";
import { ReactComponent as Multiplied } from "../../assets/multiplied.svg";
import { ReactComponent as Cup } from "../../assets/cup.svg";
import { Link } from "react-router-dom";
export default function Main(): React.ReactElement {
  const [sign, setSign] = React.useState<string>("+");
  const [angle, setAngle] = React.useState<number>(45);
  const [countDigit, setCountDigit] = React.useState<number>(1);
  const handlerChangeSign = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.value) {
      case "+":
        setAngle(45);
        break;
      case "-":
        setAngle(-45);
        break;
      case "*":
        setAngle(225);
        break;
      case ":":
        setAngle(135);
        break;
      default:
        setAngle(45);
    }
    setSign(e.currentTarget.value);
  };
  const plus = <Plus fill="black" width="100%" height="100%" />;
  const minus = <Minus fill="black" width="100%" height="100%" />;
  const divide = <Divide fill="black" width="100%" height="100%" />;
  const multiplied = <Multiplied fill="black" width="100%" height="100%" />;
  const cup = <Cup fill="black" width="100%" height="100%" />;

  return (
    <div className="main">
      <div className="contaner">
        <div className="main__contaner">
          <section className="main__selected-status status">
            <span className="status__digit">
              <Counter top={countDigit === 3 ? -350 : 0} reverse={true} />
              <Counter
                top={
                  countDigit === 1
                    ? 0
                    : countDigit === 2
                    ? 250
                    : countDigit === 3
                    ? 300
                    : 0
                }
                reverse={false}
              />
              <Counter
                top={
                  countDigit === 1
                    ? -150
                    : countDigit === 2
                    ? -200
                    : countDigit === 3
                    ? -250
                    : 0
                }
                reverse={true}
              />
            </span>
            <div className="status__sign">
              {sign === "+" ? plus : ""}
              {sign === "-" ? minus : ""}
              {sign === ":" ? divide : ""}
              {sign === "*" ? multiplied : ""}
            </div>
            <span className="status__digit">
              <Counter
                top={
                  countDigit === 1
                    ? -100
                    : countDigit === 2
                    ? -150
                    : countDigit === 3
                    ? -200
                    : 0
                }
                reverse={true}
              />

              <Counter
                top={
                  countDigit === 1
                    ? 0
                    : countDigit === 2
                    ? 100
                    : countDigit === 3
                    ? 150
                    : 0
                }
                reverse={false}
              />
              <Counter top={countDigit === 3 ? -100 : 0} reverse={true} />
            </span>
          </section>

          <section className="main__set-up-game">
            <section className="main__choice-of-sign choice-of-sign">
              <h2 className="choice-of-sign__title">Select sign</h2>
              <div className="choice-of-sign__marker">
                <ArrowDown fill="black" width="40px" height="40px" />
              </div>
              <div
                className="choice-of-sign__select-sign"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="choice-of-sign__sign">
                  <button
                    onClick={handlerChangeSign}
                    className="choice-of-sign__btn"
                    value="+"
                  >
                    <Plus fill="black" width="40px" height="40px" />
                  </button>
                </div>
                <div className="choice-of-sign__sign">
                  {" "}
                  <button
                    onClick={handlerChangeSign}
                    className="choice-of-sign__btn"
                    value="-"
                  >
                    <Minus fill="black" width="40px" height="40px" />
                  </button>
                </div>
                <div className="choice-of-sign__sign">
                  {" "}
                  <button
                    onClick={handlerChangeSign}
                    className="choice-of-sign__btn"
                    value=":"
                  >
                    <Divide fill="black" width="40px" height="40px" />
                  </button>
                </div>
                <div className="choice-of-sign__sign">
                  {" "}
                  <button
                    onClick={handlerChangeSign}
                    className="choice-of-sign__btn"
                    value="*"
                  >
                    <Multiplied fill="black" width="40px" height="40px" />
                  </button>
                </div>
              </div>
            </section>
            <section className="main__last-record">{cup}</section>
            <section className="main__number-of-digits number-of-digits">
              <h2 className="number-of-digits__title">Count</h2>
              <div
                className={classNames(
                  "number-of-digits__item",
                  countDigit === 1 ? "number-of-digits__item-active" : ""
                )}
                onClick={() => setCountDigit(1)}
              >
                <div className="number-of-digits__digit">1</div>
              </div>
              <div
                className={classNames(
                  "number-of-digits__item",
                  countDigit === 2 ? "number-of-digits__item-active" : ""
                )}
                onClick={() => setCountDigit(2)}
              >
                <div className="number-of-digits__digit">2</div>
                <div className="number-of-digits__digit">2</div>
              </div>
              <div
                className={classNames(
                  "number-of-digits__item",
                  countDigit === 3 ? "number-of-digits__item-active" : ""
                )}
                onClick={() => setCountDigit(3)}
              >
                <div className="number-of-digits__digit">1</div>
                <div className="number-of-digits__digit">2</div>
                <div className="number-of-digits__digit">3</div>
              </div>
            </section>
          </section>
          <section className="main__play-game play-game">
            <Link to="/game" className="play-game__start-link">
              <button className="play-game__start">Start game</button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
