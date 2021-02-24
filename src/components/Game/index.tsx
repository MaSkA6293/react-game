import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectGameSign,
  selectGameStep,
  selectGameTimeUp,
  selectGameCountTasks,
  selectGameCount,
} from "../../selectors";
import Bord from "../Bord";
import Counter from "../Counter";
import { getSuffleArr } from "../../utils/getSuffleArr";
import CustomModal from "../CustomModal";
import { useHistory } from "react-router-dom";
import { ReactComponent as GetBack } from "../../assets/getBack.svg";
import Timer from "../Timer";
import { saveResultToStorage } from "../../utils/saveResultToStorage";
import { getResult } from "../../utils/getResult";
import { getExpressionItems } from "../../utils/getExpressionItems";

export default function Game(): React.ReactElement {
  const step = useSelector(selectGameStep);
  const timeUp = useSelector(selectGameTimeUp);
  const countTasks = useSelector(selectGameCountTasks);
  const countNumber = localStorage.getItem("countNumbers")
    ? +localStorage.getItem("countNumbers")!
    : useSelector(selectGameCount);
  React.useEffect(() => {
    const [a, b] = getExpressionItems(countTasks, sign!, countNumber!);
    const result = getResult(a, b, sign!);
    setLefArr(a);
    setRightArr(b);
    setResultArr(result);
    const board = Array(48 - result.length)
      .fill(undefined)
      .concat(result);
    setBord(getSuffleArr(board));
    setTimeStart(new Date().getTime());
    setTimeFinish(new Date().getTime() + timeUp);
  }, []);

  const ranOutOfTime = () => {
    setMessage("You lose... You should try again!");
    openModal();
  };
  const stopTimer = () => {
    setTimerStop(true);
  };

  const [timerStop, setTimerStop] = React.useState<boolean>(false);
  const [timeFinish, setTimeFinish] = React.useState<number>(0);
  const [timeStart, setTimeStart] = React.useState<number>(0);
  const [bord, setBord] = React.useState<(number | undefined)[]>([]);
  const [leftArr, setLefArr] = React.useState<number[]>([]);
  const [rightArr, setRightArr] = React.useState<number[]>([]);
  const [resultArr, setResultArr] = React.useState<number[]>([]);
  const [indexResultArr, setIndexResultArr] = React.useState(0);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const sign = localStorage.getItem("sign")
    ? localStorage.getItem("sign")
    : useSelector(selectGameSign);
  const history = useHistory();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    history.push("/");
  }
  function tryAgain() {
    window.location.reload();
  }

  const renderCurrentExpression = (
    n: number,
    reverse = false
  ): React.ReactElement => {
    const str = n
      .toString()
      .split("")
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
        {resultArr.map(
          (el, i): React.ReactElement => {
            return <Counter key={i} number={el} reverse={reverse} />;
          }
        )}
      </div>
    );
  };

  const handlerClick = (e: React.MouseEvent<HTMLDivElement>, i: number) => {
    const value = e.currentTarget.dataset.value;
    if (value !== undefined) {
      if (parseInt(value) === resultArr[indexResultArr]) {
        if (indexResultArr < resultArr.length - 1) {
          setIndexResultArr((prev) => prev + 1);
          const newBoard = bord.map((el: number | undefined, index: number) =>
            index === i ? undefined : el
          );
          setBord(newBoard);
        } else {
          const newBoard = bord.map((el: number | undefined, index: number) =>
            index === i ? undefined : el
          );
          setBord(newBoard);
          setMessage("Congratulations! You win!");
          stopTimer();
          const record = +((new Date().getTime() - timeStart) / 1000).toFixed(
            2
          );
          openModal();

          saveResultToStorage(record, sign!, countNumber!);
        }
      } else {
        setMessage("You lose... You should try again!");
        stopTimer();
        openModal();
      }
    }
  };
  return (
    <div className="game">
      <CustomModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        message={message}
        tryAgain={tryAgain}
      />

      <div className="game__contaner">
        <Link to="/" className="game__get-back">
          <GetBack width="40px" height="40px" />
        </Link>

        <Timer
          step={step}
          start={timeStart}
          finish={timeFinish}
          ranOutOfTime={ranOutOfTime}
          stop={timerStop}
        />

        <section className="game__current-expression current-expression">
          {renderCurrentExpression(
            leftArr.length ? leftArr[indexResultArr] : 0
          )}
          <div className="current-expression__sign">{sign}</div>
          {renderCurrentExpression(
            rightArr.length ? rightArr[indexResultArr] : 0,
            true
          )}
        </section>

        <Bord bord={bord} handlerClick={handlerClick} />
      </div>
    </div>
  );
}
