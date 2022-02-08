import { Task } from 'components/Task';
import { TaskList } from 'components/TaskList';
import { useTasks } from 'hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { StyledBoardWrapper } from './styles';

export function Board({ onAddTask }) {
  const { tasks } = useTasks();
  return (
    <StyledBoardWrapper>
      <DndProvider backend={HTML5Backend}>
        {Object.entries(tasks)?.map(([list, items]) => (
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
