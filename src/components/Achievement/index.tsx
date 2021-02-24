import React from "react";
import { ReactComponent as Cup } from "../../assets/cup.svg";
import "./styles.scss";
interface IAchievement {
  bestResults: any;
  sign: string;
  countNumber: number;
}

export default function Achievement({
  bestResults,
  sign,
  countNumber,
}: IAchievement): React.ReactElement {
  const cup = <Cup fill="black" width="100%" height="100%" />;
  React.useEffect(() => {
    if (bestResults !== undefined && bestResults[`${sign}`] !== undefined) {
      setBest(
        bestResults[`${sign}`][`${countNumber}`] !== undefined
          ? bestResults[`${sign}`][`${countNumber}`].record.toString()
          : "--"
      );
    }
  }, [sign, bestResults, countNumber]);
  const [best, setBest] = React.useState("--");
  return (
    <section className="main__last-record">
      <div className="main__last-record-title">The best</div>
      <div className="main__last-record-cup">{cup}</div>
      <div className="main__last-record-best">{best}</div>
      <div className="main__last-record-sec">sec</div>
    </section>
  );
}
