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
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'task',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const handleAddClicked = (e) => {
    e.preventDefault();
    onAddTask(title);
  };

  return (
    <StyledTaskListWrapper ref={drop} isOver={isOver}>
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
