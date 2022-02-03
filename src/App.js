import { Task } from 'components/Task';
import { TaskList } from 'components/TaskList';
import { useTasks } from 'hooks';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export function App() {
  const { tasks } = useTasks();

  console.log(Object.entries(tasks));

  return (
    <>
      <h1>Task Manager</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <DndProvider backend={HTML5Backend}>
          {Object.entries(tasks)?.map(([list, items]) => (
            <TaskList key={list} title={list}>
              {items.map((task) => (
                <Task key={task.id} {...task} list={list} />
              ))}
            </TaskList>
          ))}
          {/* <TaskList title="Backlog">{true && <Task label="Task great name" />}</TaskList>
          <TaskList title="In Progress">{!true && <Task label="Task great name" />}</TaskList> */}
        </DndProvider>
      </div>
    </>
  );
}
