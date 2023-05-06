import { combineReducers } from 'redux';
import game from './game';
import { StateGame } from './game';

export interface GlobalStore {
  game: StateGame;
}

const rootReducer = combineReducers<GlobalStore>({ game });
export default rootReducer;
