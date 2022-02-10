import { INIT_BOARD } from './actionType';

const initialState = {
  board: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_BOARD: {
      const { board } = action.payload;
      return {
        ...state,
        board,
      };
    }
    default:
      return state;
  }
}

export { reducer as taskReducer, initialState as tasksInitialState };

