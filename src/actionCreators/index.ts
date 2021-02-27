import { GameActionsType } from "../constants";

interface IsetSign {
  type: typeof GameActionsType.SET_SIGN;
  payload: { sign: string };
}

export const setSign = (sign: string): IsetSign => {
  return {
    type: GameActionsType.SET_SIGN,
    payload: { sign },
  };
};
interface IsetCount {
  type: typeof GameActionsType.SET_COUNT;
  payload: { count: number };
}

export const setCount = (count: number): IsetCount => {
  return {
    type: GameActionsType.SET_COUNT,
    payload: { count },
  };
};
interface IsetBestResults {
  type: typeof GameActionsType.SET_BEST_RESULTS;
  payload: IsetBestResultsProps | undefined;
}

export interface IsetBestResultsProps {
  "*": { record: number };
  "+": { record: number };
  "-": { record: number };
  ":": { record: number };
}
export const setBestResults = (
  results: IsetBestResultsProps | undefined
): IsetBestResults => {
  return { type: GameActionsType.SET_BEST_RESULTS, payload: results };
};

interface IsetLevel {
  type: GameActionsType.SET_LEVEL;
  payload: IsetLevelProps;
}

interface IsetLevelProps {
  countTasks: number;
  timeUp: number;
}
export const setLevel = (level: number): IsetLevel => {
  let obj: IsetLevelProps = { countTasks: 0, timeUp: 0 };
  switch (level) {
    case 1:
      obj = { ...obj, countTasks: 3, timeUp: 15 * 1000 };
      localStorage.setItem("levelSet", JSON.stringify(obj));
      break;
    case 2:
      obj = { ...obj, countTasks: 6, timeUp: 20 * 1000 };
      localStorage.setItem("levelSet", JSON.stringify(obj));
      break;
    case 3:
      obj = { ...obj, countTasks: 8, timeUp: 30 * 1000 };
      localStorage.setItem("levelSet", JSON.stringify(obj));
      break;
  }
  console.log(level);
  return {
    type: GameActionsType.SET_LEVEL,
    payload: obj,
  };
};
export type GameActionsTypes =
  | IsetSign
  | IsetCount
  | IsetBestResults
  | IsetLevel;
