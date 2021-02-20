import React from "react";
import "./styles.scss";

interface ICounter {
  top: number;
  reverse: boolean;
}
export default function Counter({
  top,
  reverse,
}: ICounter): React.ReactElement {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="counter">
      <div className="counter__item"></div>
      {digits.map((el, i) => {
        reverse ? (top += 50) : (top += -50);
        return (
          <div key={i} className="counter__item" style={{ top: top + "px" }}>
            {el}
          </div>
        );
      })}
    </div>
  );
}
