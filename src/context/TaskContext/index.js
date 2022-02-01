const { createContext, useContext, useReducer } = require('react');

const TasksContext = createContext();

const useTaskContext = () => useContext(TasksContext);

function TasksContextProvider({ reducer, initialState, children }) {
  return <TasksContext.Provider value={useReducer(reducer, initialState)}>{children}</TasksContext.Provider>;
}

export { TasksContextProvider, useTaskContext };
