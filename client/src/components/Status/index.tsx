import React from "react";
import Counter from "../Counter";
import { ReactComponent as Plus } from "../../assets/plus.svg";
import { ReactComponent as Minus } from "../../assets/minus.svg";
import { ReactComponent as Divide } from "../../assets/divide.svg";
import { ReactComponent as Multiplied } from "../../assets/multiplied.svg";

interface IStatusProps {
  count: number;
  sign: string;
}

export default function Status({
  count,
  sign,
}: IStatusProps): React.ReactElement {
  const plus = <Plus fill="black" width="100%" height="100%" />;
  const minus = <Minus fill="black" width="100%" height="100%" />;
  const divide = <Divide fill="black" width="100%" height="100%" />;
  const multiplied = <Multiplied fill="black" width="100%" height="100%" />;
  return (
    <section className="main__selected-status status">
      <span className="status__digit">
        <Counter number={count === 3 ? 6 : undefined} reverse={true} />
        <Counter
          number={
            count === 1
              ? undefined
              : count === 2
              ? 4
              : count === 3
              ? 5
              : undefined
          }
          reverse={false}
        />
        <Counter
          number={count === 1 ? 2 : count === 2 ? 3 : count === 3 ? 4 : 0}
          reverse={true}
        />
      </span>
      <div className="status__sign">
        {sign === "+" ? plus : ""}
        {sign === "-" ? minus : ""}
        {sign === ":" ? divide : ""}
        {sign === "*" ? multiplied : ""}
      </div>
      <span className="status__digit">
        <Counter
          number={
            count === 1 ? 1 : count === 2 ? 2 : count === 3 ? 3 : undefined
          }
          reverse={true}
        />
        <Counter
          number={
            count === 1
              ? undefined
              : count === 2
              ? 1
              : count === 3
              ? 2
              : undefined
          }
          reverse={false}
        />
        <Counter number={count === 3 ? 1 : undefined} reverse={true} />
      </span>
    </section>
  );
}
