import { Task } from 'components/Task';
import { TaskList } from 'components/TaskList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { StyledBoardWrapper } from './styles';

export function Board({ columns, onAddTask }) {
  return (
    <StyledBoardWrapper>
      <DndProvider backend={HTML5Backend}>
        {columns &&
          Object.entries(columns)?.map(([list, items]) => (
            <TaskList key={list} title={list} onAddTask={onAddTask}>
              {items.map((task) => (
                <Task key={task.id} {...task} list={list} />
              ))}
            </TaskList>
          ))}
      </DndProvider>
    </StyledBoardWrapper>
  );
}
