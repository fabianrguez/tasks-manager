import { useTasks } from 'hooks';
import { useDrag } from 'react-dnd';
import { StyledTaskWrapper } from './styles';

export function Task({ label, id, list }) {
  const { moveTask } = useTasks();
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { name: label, id, list },
    type: 'task',
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        moveTask(item, list, dropResult.name);
      }
    },
  }));

  const opacity = isDragging ? 0.8 : 1;

  return (
    <StyledTaskWrapper ref={drag} style={{ opacity }}>
      {label}
    </StyledTaskWrapper>
  );
}
