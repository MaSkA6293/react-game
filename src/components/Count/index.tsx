import React from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { setCount } from "../../actionCreators";

interface ICount {
  count: number;
}

export default function Count({ count }: ICount): React.ReactElement {
  const dispatch = useDispatch();
  const handlerClick = (number: number) => {
    dispatch(setCount(number));
    localStorage.setItem("countNumbers", number.toString());
  };
  return (
    <section className="main__number-of-digits number-of-digits">
      <h2 className="number-of-digits__title">Count</h2>
      <div
        className={classNames(
          "number-of-digits__item",
          count === 1 ? "number-of-digits__item-active" : ""
        )}
        onClick={() => handlerClick(1)}
      >
        <div className="number-of-digits__digit">1</div>
      </div>
      <div
        className={classNames(
          "number-of-digits__item",
          count === 2 ? "number-of-digits__item-active" : ""
        )}
        onClick={() => handlerClick(2)}
      >
        <div className="number-of-digits__digit">2</div>
        <div className="number-of-digits__digit">2</div>
      </div>
      <div
        className={classNames(
          "number-of-digits__item",
          count === 3 ? "number-of-digits__item-active" : ""
        )}
        onClick={() => handlerClick(3)}
      >
        <div className="number-of-digits__digit">1</div>
        <div className="number-of-digits__digit">2</div>
        <div className="number-of-digits__digit">3</div>
      </div>
    </section>
  );
}
