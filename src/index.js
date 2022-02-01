import { render } from 'react-dom';
import React from 'react';
import { App } from './App';
import { GlobalStyles } from 'GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'theme';
import { TasksContextProvider } from 'context/TaskContext';
import { taskReducer, tasksInitialState } from 'context/TaskContext/reducer';

render(
  <React.StrictMode>
    <TasksContextProvider reducer={taskReducer} initialState={tasksInitialState}>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </TasksContextProvider>
  </React.StrictMode>,
  document.querySelector('#app')
);
