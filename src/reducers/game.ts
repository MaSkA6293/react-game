import produce from "immer";
import { GameActionsTypes } from "../actionCreators/index";
import { GameActionsType } from "../constants";
export interface IStateGame {
  sign: string;
  count: number;
}
const initialState: IStateGame = {
  sign: "+",
  count: 1,
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
      default:
        state;
    }
  });
};

export default game;
