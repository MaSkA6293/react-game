import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectGameSign,
  selectGameStep,
  selectGameTimeUp,
  selectGameCountTasks,
  selectGameCount,
  selectGameLevel,
} from '../../selectors';
import Board from '../Board';
import Counter from '../Counter';
import { getShuffledArr } from '../../utils/getShuffledArr';
import CustomModal from '../CustomModal';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as GetBack } from '../../assets/getBack.svg';
import Timer from '../Timer';
import { saveResultToStorage } from '../../utils/saveResultToStorage';
import { getResult } from '../../utils/getResult';
import { getExpressionItems } from '../../utils/getExpressionItems';
import './styles.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Game({ myRoot }: { myRoot: any }): React.ReactElement {
  const step = useSelector(selectGameStep);
  const countTasks = useSelector(selectGameCountTasks);
  const countNumber = useSelector(selectGameCount);
  const timeUp = useSelector(selectGameTimeUp);
  const level = useSelector(selectGameLevel);
  const sign = useSelector(selectGameSign);

  const [restart, setRestart] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false);
    const [a, b] = getExpressionItems(countTasks, sign, countNumber);
    const result = getResult(a, b, sign);
    setLefArr(a);
    setRightArr(b);
    setResultArr(result);
    setIndexResultArr(0);
    const board = Array(48 - result.length)
      .fill(undefined)
      .concat(result);
    setBoard(getShuffledArr(board));
    setTimeStart(new Date().getTime());
    setTimeFinish(new Date().getTime() + timeUp);
    setTimerStop(false);
  }, [restart, countNumber, countTasks, sign, timeUp]);

  const ranOutOfTime = () => {
    setMessage('You lose... You should try again!');
    openModal();
  };
  const stopTimer = () => {
    setTimerStop(true);
  };
  const [timerStop, setTimerStop] = React.useState<boolean>(false);
  const [timeFinish, setTimeFinish] = React.useState<number>(0);
  const [timeStart, setTimeStart] = React.useState<number>(0);
  const [board, setBoard] = React.useState<(number | undefined)[]>([]);
  const [leftArr, setLefArr] = React.useState<number[]>([]);
  const [rightArr, setRightArr] = React.useState<number[]>([]);
  const [resultArr, setResultArr] = React.useState<number[]>([]);
  const [indexResultArr, setIndexResultArr] = React.useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    navigate('/');
  }
  function tryAgain() {
    setRestart((prev) => !prev);
  }

  const renderCurrentExpression = (
    n: number,
    reverse = false,
  ): React.ReactElement => {
    const str = n
      .toString()
      .split('')
      .map((el) => parseInt(el));
    let resultArr = [];
    if (str.length === 1) {
      resultArr = [undefined, undefined, ...str];
    } else if (str.length === 2) {
      resultArr = [undefined, ...str];
    } else {
      resultArr = str;
    }
    if (reverse) {
      if (str.length === 1) {
        resultArr = [...str, undefined, undefined];
      } else if (str.length === 2) {
        resultArr = [...str, undefined];
      } else {
        resultArr = str;
      }
    }
    return (
      <div className="current-expression__block">
        {resultArr.map((el, i): React.ReactElement => {
          return <Counter key={i} number={el} reverse={reverse} />;
        })}
      </div>
    );
  };

  const handlerClick = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    const value = e.currentTarget.dataset.value;
    if (value !== undefined) {
      if (parseInt(value) === resultArr[indexResultArr]) {
        if (indexResultArr < resultArr.length - 1) {
          setIndexResultArr((prev) => prev + 1);
          const newBoard = board.map((el: number | undefined, index: number) =>
            index === i ? undefined : el,
          );
          setBoard(newBoard);
        } else {
          const newBoard = board.map((el: number | undefined, index: number) =>
            index === i ? undefined : el,
          );
          setBoard(newBoard);
          setMessage('Congratulations! You win!');
          stopTimer();
          const record = +((new Date().getTime() - timeStart) / 1000).toFixed(
            2,
          );
          openModal();

          saveResultToStorage(record, sign, countNumber, level);
        }
      } else {
        setMessage('You lose... You should try again!');
        stopTimer();
        openModal();
      }
    }
  };
  return (
    <div className="game">
      {myRoot.current && (
        <CustomModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          message={message}
          tryAgain={tryAgain}
          root={myRoot}
          child={undefined}
          closeShow={true}
          closeMessage={'Close'}
        />
      )}

      <div className="game__container">
        <Link to="/" className="game__get-back">
          <GetBack width="40px" height="40px" />
        </Link>

        <Timer
          step={step}
          start={timeStart}
          finish={timeFinish}
          ranOutOfTime={ranOutOfTime}
          stop={timerStop}
          restart={restart}
        />

        <section className="game__current-expression current-expression">
          {renderCurrentExpression(
            leftArr.length ? leftArr[indexResultArr] : 0,
          )}
          <div className="current-expression__sign">{sign}</div>
          {renderCurrentExpression(
            rightArr.length ? rightArr[indexResultArr] : 0,
            true,
          )}
        </section>

        <Board board={board} handlerClick={handlerClick} />
      </div>
    </div>
  );
}
