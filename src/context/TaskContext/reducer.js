const initialState = {
  tasks: {
    backlog: [
      {
        id: 1,
        title: 'Task 1',
        creationDate: 1643891544760,
        description: 'Lorem ipsum dolor act it',
        priority: 'high',
      },
      {
        id: 2,
        title: 'Task 2',
        creationDate: 1643891544760,
        description: 'Lorem ipsum dolor act it',
        priority: 'low',
      },
      {
        id: 3,
        title: 'Task 3',
        creationDate: 1643891544760,
        description: 'Lorem ipsum dolor act it',
        priority: 'normal',
      },
    ],
    doing: [],
    done: [],
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
