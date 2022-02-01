import { useDrop } from 'react-dnd';
import { StyledTaskListWrapper, StyledTaskListTitle } from './styles';

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
      <StyledTaskListTitle>{title}</StyledTaskListTitle>
      {children}
    </StyledTaskListWrapper>
  );
}
