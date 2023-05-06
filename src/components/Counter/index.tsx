import React from 'react';
import './styles.scss';

interface ICounter {
  number: number | undefined;
  reverse: boolean;
}
export default function Counter({
  number,
  reverse,
}: ICounter): React.ReactElement {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let top: number;
  if (number === undefined) {
    top = 0;
  } else {
    if (!reverse) {
      top = -(number + 1) * 50;
    } else {
      top = (number + 1) * 50;
    }
  }

  return (
    <div className="counter">
      <div className="counter__item"></div>
      {digits.map((el, i) => {
        reverse ? (top += -50) : (top += 50);
        return (
          <div key={i} className="counter__item" style={{ top: top + 'px' }}>
            {el}
          </div>
        );
      })}
    </div>
  );
}
