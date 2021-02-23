import React from "react";
import classNames from "classnames";

interface IBord {
  bord: (number | undefined)[];
  handlerClick: (e: React.MouseEvent<HTMLDivElement>, i: number) => void;
}

export default function Bord({
  bord,
  handlerClick,
}: IBord): React.ReactElement {
  return (
    <section className="game__bord">
      {bord.map((el, i) => {
        return (
          <div
            className={classNames(
              "game__bord-item",
              el !== undefined ? "game__bord-item-activ" : ""
            )}
            key={i}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handlerClick(e, i)
            }
            data-value={el !== undefined ? el : undefined}
          >
            {el}
          </div>
        );
      })}
    </section>
  );
}
