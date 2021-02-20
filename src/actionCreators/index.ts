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

export type GameActionsTypes = IsetSign | IsetCount;
