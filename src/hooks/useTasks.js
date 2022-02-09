import { useTaskContext } from 'context/TaskContext';
import { CREATE_NEW_TASK, MOVE_TASK_COLUMN } from 'context/TaskContext/actionType';
import { useFirebase } from './useFirebase';

export function useTasks() {
  const [{ tasks }, dispatch] = useTaskContext();

  const moveTask = (item, from, target) =>
    dispatch({
      type: MOVE_TASK_COLUMN,
      payload: {
        item,
        columnOrigin: from,
        columnTarget: target,
      },
    });

  const createTask = (item, column) =>
    dispatch({
      type: CREATE_NEW_TASK,
      payload: {
        item,
        column,
      },
    });
  return { tasks, moveTask, createTask };
}
