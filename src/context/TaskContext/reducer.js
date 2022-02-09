import { CREATE_NEW_TASK, INIT_BOARD, MOVE_TASK_COLUMN } from './actionType';

const initialState = {
  board: {},
  // tasks: {
  //   backlog: [
  //     {
  //       id: 1,
  //       title: 'Task 1',
  //       creationDate: 1643891544760,
  //       description: 'Lorem ipsum dolor act it',
  //       priority: 'high',
  //       assignedTo: ['Fabian'],
  //     },
  //     {
  //       id: 2,
  //       title: 'Task 2',
  //       creationDate: 1643891544760,
  //       description: 'Lorem ipsum dolor act it',
  //       priority: 'low',
  //       assignedTo: ['Fabian'],
  //     },
  //     {
  //       id: 3,
  //       title: 'Task 3',
  //       creationDate: 1643891544760,
  //       description: 'Lorem ipsum dolor act it',
  //       priority: 'normal',
  //       assignedTo: ['Fabian'],
  //     },
  //   ],
  //   doing: [],
  //   done: [],
  // },
};

function moveTask(state, task, columnOrigin, columnTarget) {
  const originIndex = state.column[columnOrigin].findIndex((item) => item.id === task.id);
  state.column[columnOrigin].splice(originIndex, 1);
  state.column[columnTarget].push(task);
  return { ...state.column };
}

function addTask(state, task, column) {
  const newTask = { ...task };
  state.column[column].push(newTask);
  return state.column[column];
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_TASK_COLUMN: {
      const { item, columnOrigin, columnTarget } = action.payload;
      return {
        ...state,
        board: moveTask(state, item, columnOrigin, columnTarget),
      };
    }
    case CREATE_NEW_TASK: {
      const { item, column } = action.payload;
      return {
        ...state,
        board: {
          ...state.column,
          [column]: addTask(state, item, column),
        },
      };
    }
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
