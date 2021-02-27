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

export type GameActionsTypes = IsetSign | IsetCount | IsetBestResults;
