import { useTaskContext } from 'context/TaskContext';

export function useTasks() {
  const [{ tasks }, dispatch] = useTaskContext();

  const moveTask = (item, from, target) => {
    dispatch({
      type: 'change_task_column',
      payload: {
        item,
        columnOrigin: from,
        columnTarget: target,
      },
    });
  };

  return { tasks, moveTask };
}
