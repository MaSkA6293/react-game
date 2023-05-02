import React from 'react';
import classNames from 'classnames';

interface IBoard {
  board: (number | undefined)[];
  handlerClick: (e: React.MouseEvent<HTMLDivElement>, i: number) => void;
}

export default function Board({
  board,
  handlerClick,
}: IBoard): React.ReactElement {
  return (
    <section className="game__board">
      {board.map((el, i) => {
        return (
          <div
            className={classNames(
              'game__board-item',
              el !== undefined ? 'game__board-item-activ' : '',
              el !== undefined && el?.toString().length >= 4
                ? 'game__board-item-text-md'
                : '',
              el !== undefined && el?.toString().length >= 6
                ? 'game__board-item-text-sm'
                : '',
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
