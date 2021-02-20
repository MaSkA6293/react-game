import React from "react";
import { ReactComponent as Cup } from "../../assets/cup.svg";

export default function Achievement(): React.ReactElement {
  const cup = <Cup fill="black" width="100%" height="100%" />;
  return <section className="main__last-record">{cup}</section>;
}
