import { StateGame } from './reducers/game';
import { GlobalStore } from './reducers/rootReducer';
import { SetBestResultsProps } from './actionCreators';
export const selectGameState = (state: GlobalStore): StateGame => state.game;

export const selectGameSign = (state: GlobalStore): string =>
  selectGameState(state).sign;
export const selectGameCount = (state: GlobalStore): number =>
  selectGameState(state).count;
export const selectGameStep = (state: GlobalStore): number =>
  selectGameState(state).step;
export const selectGameTimeUp = (state: GlobalStore): number =>
  selectGameState(state).timeUp;
export const selectGameCountTasks = (state: GlobalStore): number =>
  selectGameState(state).countTasks;
export const selectGameBestResults = (
  state: GlobalStore,
): SetBestResultsProps | undefined => selectGameState(state).bestResults;

export const selectGameLevel = (state: GlobalStore): number =>
  selectGameState(state).level;
