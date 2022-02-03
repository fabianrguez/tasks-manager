import { Icon } from 'components/Icon';
import { useTasks } from 'hooks';
import { useDrag } from 'react-dnd';
import {
  StyledTaskCreationDate,
  StyledTaskTitle,
  StyledTaskWrapper,
  StlyedTaskHeader,
  StyledTaskContent,
  StyledTaskAvatar,
} from './styles';

export function Task({ title, id, creationDate, description, list }) {
  const { moveTask } = useTasks();
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { title, id, list, creationDate, description },
    type: 'task',
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        moveTask(item, list, dropResult.name);
      }
    },
  }));

  const parseDate = (timestamp) => new Intl.DateTimeFormat().format(new Date(timestamp));

  return (
    <StyledTaskWrapper ref={drag} isDragging={isDragging}>
      <StlyedTaskHeader>
        <StyledTaskCreationDate>
          <Icon name="date" />
          {parseDate(creationDate)}
        </StyledTaskCreationDate>
        <StyledTaskAvatar>FR</StyledTaskAvatar>
      </StlyedTaskHeader>
      <StyledTaskTitle>{title}</StyledTaskTitle>
      <StyledTaskContent>{description}</StyledTaskContent>
    </StyledTaskWrapper>
  );
}
