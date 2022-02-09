import { useEffect } from 'react';
import { useFirebase } from 'hooks';
import { useTaskContext } from 'context/TaskContext';
import { INIT_BOARD } from 'context/TaskContext/actionType';

export function useActiveBoard(activeBoard) {
  const { boards } = useFirebase();
  const [{ board }, dispatch] = useTaskContext();

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

  const changeActiveBoard = (board) =>
    dispatch({
      type: INIT_BOARD,
      payload: {
        board,
      },
    });

  useEffect(() => {
    console.log(boards);
    // const _board = Object.values(boards)?.filter((values) => console.log({ values, activeBoard }));
    // console.log(_board);
    // changeActiveBoard(_board);
  }, [boards, activeBoard]);

  return { board, moveTask, createTask };
}
