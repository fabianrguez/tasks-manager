const initialState = {
  tasks: {
    backlog: [
      {
        id: 1,
        name: 'Task 1',
      },
      {
        id: 2,
        name: 'Task 2',
      },
    ],
    doing: [],
    done: []
  },
};

function moveTask(state, task, columnOrigin, columnTarget) {
  const originIndex = state.tasks[columnOrigin].findIndex((item) => item.id === task.id);
  state.tasks[columnOrigin].splice(originIndex, 1);
  state.tasks[columnTarget].push(task);
  return { ...state.tasks };
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'change_task_column':
      const { item, columnOrigin, columnTarget } = action.payload;
      return {
        ...state,
        tasks: moveTask(state, item, columnOrigin, columnTarget),
      };
    default:
      return state;
  }
}

export { reducer as taskReducer, initialState as tasksInitialState };
