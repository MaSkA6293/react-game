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
        <Counter top={count === 3 ? -350 : 0} reverse={true} />
        <Counter
          top={count === 1 ? 0 : count === 2 ? 250 : count === 3 ? 300 : 0}
          reverse={false}
        />
        <Counter
          top={count === 1 ? -150 : count === 2 ? -200 : count === 3 ? -250 : 0}
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
          top={count === 1 ? -100 : count === 2 ? -150 : count === 3 ? -200 : 0}
          reverse={true}
        />
        <Counter
          top={count === 1 ? 0 : count === 2 ? 100 : count === 3 ? 150 : 0}
          reverse={false}
        />
        <Counter top={count === 3 ? -100 : 0} reverse={true} />
      </span>
    </section>
  );
}
