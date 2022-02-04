import { useDrop } from 'react-dnd';
import { StyledTaskListContent, StyledTaskListTitle, StyledTaskListWrapper } from './styles';

export function TaskList({ title, children }) {
  const [, drop] = useDrop(() => ({
    accept: 'task',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <StyledTaskListWrapper ref={drop}>
      <StyledTaskListContent>
        <StyledTaskListTitle>{title}</StyledTaskListTitle>
        {children}
      </StyledTaskListContent>
    </StyledTaskListWrapper>
  );
}
