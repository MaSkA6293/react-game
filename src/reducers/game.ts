import produce from "immer";
export interface IStateGame {
  sign: string;
  count: number;
}
const initialState: IStateGame = {
  sign: "",
  count: 1,
};

const game = (state: IStateGame = initialState, action: any): any => {
  return produce(state, (draft: any) => {
    switch (action.type) {
      default:
        state;
    }
  });
};

export default game;
