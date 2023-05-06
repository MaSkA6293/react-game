import React from 'react';
import { ReactComponent as Cup } from '../../assets/cup.svg';
import './styles.scss';
interface IAchievement {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  bestResults: any;
  sign: string;
  countNumber: number;
  level: number;
}

export default function Achievement({
  bestResults,
  sign,
  countNumber,
  level,
}: IAchievement): React.ReactElement {
  const cup = <Cup fill="#1f441e" width="100%" height="100%" />;
  React.useEffect(() => {
    if (bestResults !== undefined) {
      setBest(bestResults[`${sign}`][`${countNumber}`][`${level}`].result);
    } else setBest('--');
  }, [sign, bestResults, countNumber, level]);
  const [best, setBest] = React.useState('--');
  return (
    <section className="main__last-record">
      <div className="main__last-record-title">The best result</div>
      <div className="main__last-record-cup">{cup}</div>
      <div className="main__last-record-best">{best}</div>
      <div className="main__last-record-sec">sec</div>
    </section>
  );
}
