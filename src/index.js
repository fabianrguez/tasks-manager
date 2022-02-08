import { TasksContextProvider } from 'context/TaskContext';
import { taskReducer, tasksInitialState } from 'context/TaskContext/reducer';
import { GlobalStyles } from 'GlobalStyles';
import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { appTheme } from 'theme';
import { App } from './App';

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
