import { useTaskContext } from 'context/TaskContext';
import { INIT_BOARD } from 'context/TaskContext/actionType';
import { useFirebaseBoards } from 'hooks';
import { useEffect, useState } from 'react';
import { isObjectEmpty } from 'utils';

export function useActiveBoard(activeBoard) {
  const { boards, save, deleteColumnItem } = useFirebaseBoards();
  const [{ board }, dispatch] = useTaskContext();
  const [columns, setColumns] = useState([]);

  const moveTask = async (item, from, target) => {
    deleteColumnItem({ document: item, column: from, collectionId: board.id });
    save({ document: item, column: target, collectionId: board.id });
  };

  const createTask = async (item, column) => {
    save({ document: item, column, collectionId: board.id });
  };

  const changeActiveBoard = (board) =>
    dispatch({
      type: INIT_BOARD,
      payload: {
        board,
      },
    });

  useEffect(() => {
    if (!isObjectEmpty(boards)) {
      const _activeBoard = Object.values(boards).find(({ name }) => name === activeBoard);
      changeActiveBoard(_activeBoard);
      setColumns(Object.keys(_activeBoard.columns));
    }
  }, [boards]);

  return { board, columns, moveTask, createTask };
}
