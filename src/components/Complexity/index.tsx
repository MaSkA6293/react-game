import React from 'react';
import { setLevel } from '../../actionCreators';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import './styles.scss';

export default function Complexity(): React.ReactElement {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem('levelComplexity') !== null) {
      const levelComplexity = localStorage.getItem('levelComplexity');
      setLevelComplexity(Number(levelComplexity));
      dispatch(setLevel(Number(levelComplexity)));
    } else {
      dispatch(setLevel(1));
      localStorage.setItem('levelComplexity', '1');
    }
  }, []);

  const [levelComplexity, setLevelComplexity] = React.useState<number>(1);
  const handlerClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const level = e.currentTarget.dataset.level;
    if (level) {
      setLevelComplexity(Number(level));
      dispatch(setLevel(Number(level)));
      localStorage.setItem('levelComplexity', level);
    }
  };
  return (
    <section className="complexity">
      <h2 className="complexity__title">Complexity</h2>
      <ul className="complexity__list">
        <li
          className={classNames(
            'complexity__list-item',
            levelComplexity === 1 ? 'complexity__list-item-active' : '',
          )}
          data-level="1"
          onClick={handlerClick}
        >
          1
        </li>
        <li
          className={classNames(
            'complexity__list-item',
            levelComplexity === 2 ? 'complexity__list-item-active' : '',
          )}
          data-level="2"
          onClick={handlerClick}
        >
          2
        </li>
        <li
          className={classNames(
            'complexity__list-item',
            levelComplexity === 3 ? 'complexity__list-item-active' : '',
          )}
          data-level="3"
          onClick={handlerClick}
        >
          3
        </li>
      </ul>
    </section>
  );
}
