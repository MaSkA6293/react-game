import produce from "immer";
import { GameActionsTypes } from "../actionCreators/index";
import { GameActionsType } from "../constants";
import { IsetBestResultsProps } from "../actionCreators";
export interface IStateGame {
  sign: string;
  count: number;
  step: number;
  timeUp: number;
  countTasks: number;
  bestResults: IsetBestResultsProps | undefined;
}
const initialState: IStateGame = {
  sign: "+",
  count: 1,
  step: 1000,
  timeUp: 15 * 1000,
  countTasks: 3,
  bestResults: undefined,
};

const game = (
  state: IStateGame = initialState,
  action: GameActionsTypes
): IStateGame => {
  return produce(state, (draft) => {
    switch (action.type) {
      case GameActionsType.SET_SIGN:
        draft.sign = action.payload.sign;
        break;
      case GameActionsType.SET_COUNT:
        draft.count = action.payload.count;
        break;
      case GameActionsType.SET_BEST_RESULTS:
        draft.bestResults = action.payload;
        break;
      case GameActionsType.SET_LEVEL:
        draft.countTasks = action.payload.countTasks;
        draft.timeUp = action.payload.timeUp;
        break;
      default:
        state;
    }
  });
};

export default game;
