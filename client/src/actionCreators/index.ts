import { GameActionsType } from '../constants';

interface SetSign {
  type: typeof GameActionsType.SET_SIGN;
  payload: { sign: string };
}

export const setSign = (sign: string): SetSign => {
  return {
    type: GameActionsType.SET_SIGN,
    payload: { sign },
  };
};
interface SetCount {
  type: typeof GameActionsType.SET_COUNT;
  payload: { count: number };
}

export const setCount = (count: number): SetCount => {
  return {
    type: GameActionsType.SET_COUNT,
    payload: { count },
  };
};
interface SetBestResults {
  type: typeof GameActionsType.SET_BEST_RESULTS;
  payload: SetBestResultsProps | undefined;
}

export interface SetBestResultsProps {
  '*': { record: number };
  '+': { record: number };
  '-': { record: number };
  ':': { record: number };
}
export const setBestResults = (
  results: SetBestResultsProps | undefined,
): SetBestResults => {
  return { type: GameActionsType.SET_BEST_RESULTS, payload: results };
};

interface SetLevel {
  type: GameActionsType.SET_LEVEL;
  payload: SetLevelProps;
}

interface SetLevelProps {
  countTasks: number;
  timeUp: number;
  level: number;
}
export const setLevel = (level: number): SetLevel => {
  let obj: SetLevelProps = { countTasks: 0, timeUp: 0, level: 1 };
  switch (level) {
    case 1:
      obj = { ...obj, countTasks: 3, timeUp: 15 * 1000, level: 1 };
      localStorage.setItem('levelSet', JSON.stringify(obj));
      break;
    case 2:
      obj = { ...obj, countTasks: 6, timeUp: 20 * 1000, level: 2 };
      localStorage.setItem('levelSet', JSON.stringify(obj));
      break;
    case 3:
      obj = { ...obj, countTasks: 8, timeUp: 30 * 1000, level: 3 };
      localStorage.setItem('levelSet', JSON.stringify(obj));
      break;
  }
  return {
    type: GameActionsType.SET_LEVEL,
    payload: obj,
  };
};
export type GameActionsTypes = SetSign | SetCount | SetBestResults | SetLevel;
