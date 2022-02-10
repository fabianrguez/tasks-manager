import { Task } from 'components/Task';
import { TaskList } from 'components/TaskList';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { StyledBoardWrapper } from './styles';

export function Board({ columns = {}, onAddTask }) {
  const orderTaskList = ([, values1], [, values2]) => values1.order - values2.order;

  return (
    <StyledBoardWrapper>
      <DndProvider backend={HTML5Backend}>
        {columns &&
          Object.entries(columns)
            ?.sort(orderTaskList)
            .map(([name, { items }]) => (
              <TaskList key={name} title={name} onAddTask={onAddTask}>
                {Array.isArray(items) &&
                  items?.map((task, index) => <Task key={`${task.title}-${index}`} {...task} list={name} />)}
              </TaskList>
            ))}
      </DndProvider>
    </StyledBoardWrapper>
  );
}
