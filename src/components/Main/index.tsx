import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Count from '../Count';
import Status from '../Status';
import PlayGame from '../PlayGame';
import Sign from '../Sign';
import Achievement from '../Achievement';
import {
  setSign,
  setBestResults,
  setCount,
  setLevel,
} from '../../actionCreators';
import Complexity from '../Complexity';
import {
  selectGameSign,
  selectGameCount,
  selectGameBestResults,
  selectGameLevel,
} from '../../selectors';
import Settings from '../Settings';
import './styles.scss';

interface IMain {
  toggle: () => void;
  playing: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  myRoot: any;
}
export default function Main({
  toggle,
  playing,
  myRoot,
}: IMain): React.ReactElement {
  const sign = useSelector(selectGameSign);
  const count = useSelector(selectGameCount);
  const bestResults = useSelector(selectGameBestResults);
  const level = useSelector(selectGameLevel);

  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageSign = localStorage.getItem('sign');
    if (localStorageSign) {
      dispatch(setSign(localStorageSign));
    }
    const localStorageBestResults = localStorage.getItem('results');
    if (localStorageBestResults) {
      dispatch(setBestResults(JSON.parse(localStorageBestResults)));
    }
    const localStorageCountNumbers = localStorage.getItem('countNumbers');
    if (localStorageCountNumbers) {
      dispatch(setCount(+JSON.parse(localStorageCountNumbers)));
    }
    const localStorageLevel = localStorage.getItem('levelComplexity');
    if (localStorageLevel) {
      dispatch(setLevel(+JSON.parse(localStorageLevel)));
    }
  }, [dispatch]);

  return (
    <div className="main">
      <div className="container">
        <div className="main__container">
          <section className="main__settings">
            <Settings toggle={toggle} playing={playing} myRoot={myRoot} />
          </section>
          <Status count={count} sign={sign} />

          <section className="main__set-up-game">
            <Sign sign={sign} />
            <Achievement
              bestResults={bestResults}
              sign={sign}
              countNumber={count}
              level={level}
            />
            <Count count={count} />
          </section>
          <Complexity />
          <PlayGame />
        </div>
      </div>
    </div>
  );
}
