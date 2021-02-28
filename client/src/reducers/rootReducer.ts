import { combineReducers } from "redux";
import game from "../reducers/game";
import { IStateGame } from "../reducers/game";
export interface IGlobalStore {
  game: IStateGame;
}
const rootReducer = combineReducers<IGlobalStore>({ game });
export default rootReducer;
