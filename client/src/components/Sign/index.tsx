import React from 'react';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';
import { ReactComponent as Plus } from '../../assets/plus.svg';
import { ReactComponent as Minus } from '../../assets/minus.svg';
import { ReactComponent as Divide } from '../../assets/divide.svg';
import { ReactComponent as Multiplied } from '../../assets/multiplied.svg';
import { useDispatch } from 'react-redux';
import { setSign } from '../../actionCreators';

export default function Sign({ sign }: { sign: string }): React.ReactElement {
  React.useEffect(() => {
    rotateSelector(sign);
  }, [sign]);
  const [angle, setAngle] = React.useState<number>(45);
  const dispatch = useDispatch();
  const rotateSelector = (value: string) => {
    switch (value) {
      case '+':
        setAngle(45);
        break;
      case '-':
        setAngle(-45);
        break;
      case '*':
        setAngle(225);
        break;
      case ':':
        setAngle(135);
        break;
      default:
        setAngle(45);
    }
  };
  const handlerChangeSign = (e: React.MouseEvent<HTMLButtonElement>) => {
    rotateSelector(e.currentTarget.value);
    localStorage.setItem('sign', e.currentTarget.value);
    dispatch(setSign(e.currentTarget.value));
  };
  return (
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
          {' '}
          <button
            onClick={handlerChangeSign}
            className="choice-of-sign__btn"
            value="-"
          >
            <Minus fill="black" width="40px" height="40px" />
          </button>
        </div>
        <div className="choice-of-sign__sign">
          {' '}
          <button
            onClick={handlerChangeSign}
            className="choice-of-sign__btn"
            value=":"
          >
            <Divide fill="black" width="40px" height="40px" />
          </button>
        </div>
        <div className="choice-of-sign__sign">
          {' '}
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
  );
}
