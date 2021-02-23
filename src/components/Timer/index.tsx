import React from "react";
import "./styles.scss";

interface ITimer {
  step: number;
  ranOutOfTime: () => void;
  stop: boolean;
  start: number;
  finish: number;
}
export default function Timer({
  step,
  stop,
  start,
  finish,
  ranOutOfTime,
}: ITimer): React.ReactElement {
  const difference = finish - start;
  const stepTimer = (step * 100) / difference;
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress((prev) => prev - stepTimer);
    }, step);

    if (stop) {
      clearTimeout(timer);
      return;
    }
    if (progress < 0) {
      ranOutOfTime();
      clearTimeout(timer);
    }
    return () => clearTimeout(timer);
  });
  const [progress, setProgress] = React.useState(100);
  return (
    <section className="timer">
      <div className="timer__progress" style={{ width: progress + "%" }}></div>
    </section>
  );
}
