import produce from 'immer';
import { GameActionsTypes } from '../actionCreators/index';
import { GameActionsType } from '../constants';
import { SetBestResultsProps } from '../actionCreators';

export interface StateGame {
  sign: string;
  count: number;
  step: number;
  timeUp: number;
  countTasks: number;
  bestResults: SetBestResultsProps | undefined;
  level: number;
}

const initialState: StateGame = {
  sign: '+',
  count: 1,
  step: 1000,
  timeUp: 15 * 1000,
  countTasks: 3,
  bestResults: undefined,
  level: 1,
};

const game = (
  state: StateGame = initialState,
  action: GameActionsTypes,
): StateGame => {
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
        draft.level = action.payload.level;
        break;
      default:
        return state;
    }
  });
};

export default game;
