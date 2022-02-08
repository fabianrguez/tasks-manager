import { useDrop } from 'react-dnd';
import { PlusCircle } from 'react-feather';
import {
  StyledTaskListAddTaskButton,
  StyledTaskListAddTaskWrapper,
  StyledTaskListContent,
  StyledTaskListTitle,
  StyledTaskListWrapper,
} from './styles';

export function TaskList({ title, onAddTask, children }) {
  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const handleAddClicked = (e) => {
    e.preventDefault();
    onAddTask();
  };

  return (
    <StyledTaskListWrapper ref={drop}>
      <StyledTaskListTitle>{title}</StyledTaskListTitle>
      <StyledTaskListContent>{children}</StyledTaskListContent>
      <StyledTaskListAddTaskWrapper>
        <StyledTaskListAddTaskButton onClick={handleAddClicked}>
          Add Task
          <PlusCircle size={18} />
        </StyledTaskListAddTaskButton>
      </StyledTaskListAddTaskWrapper>
    </StyledTaskListWrapper>
  );
}
