import { IStateGame } from "./reducers/game";
import { IGlobalStore } from "./reducers/rootReducer";
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
