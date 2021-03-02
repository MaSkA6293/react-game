import { IStateGame } from "./reducers/game";
import { IGlobalStore } from "./reducers/rootReducer";
import { IsetBestResultsProps } from "./actionCreators";
export const selectGameState = (state: IGlobalStore): IStateGame => state.game;

export const selectGameSign = (state: IGlobalStore): string =>
  selectGameState(state).sign;
export const selectGameCount = (state: IGlobalStore): number =>
  selectGameState(state).count;
export const selectGameStep = (state: IGlobalStore): number =>
  selectGameState(state).step;
export const selectGameTimeUp = (state: IGlobalStore): number =>
  selectGameState(state).timeUp;
export const selectGameCountTasks = (state: IGlobalStore): number =>
  selectGameState(state).countTasks;
export const selectGameBestResults = (
  state: IGlobalStore
): IsetBestResultsProps | undefined => selectGameState(state).bestResults;

export const selectGameLevel = (state: IGlobalStore): number =>
  selectGameState(state).level;
