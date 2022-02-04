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
  StyledTaskPriority,
  StyledTaskFooter,
  StyledTaskDraggingContent,
} from './styles';

export function Task({ title, id, creationDate, description, priority, list }) {
  const { moveTask } = useTasks();
  const [{ isDragging }, drag, previewRef] = useDrag(() => ({
    item: { title, id, list, creationDate, description, priority },
    type: 'task',
    options: {
      dropEffect: 'copy',
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        moveTask(item, list, dropResult.name);
      }
    },
  }));

  const parseDate = (timestamp) => new Intl.DateTimeFormat().format(new Date(timestamp));

  return (
    <>
      {!isDragging ? (
        <StyledTaskWrapper ref={drag}>
          <StlyedTaskHeader>
            <StyledTaskPriority priority={priority}>{priority}</StyledTaskPriority>
          </StlyedTaskHeader>
          <StyledTaskTitle>{title}</StyledTaskTitle>
          <StyledTaskContent>{description}</StyledTaskContent>
          <StyledTaskFooter>
            <StyledTaskCreationDate>
              <Icon name="date" />
              {parseDate(creationDate)}
            </StyledTaskCreationDate>
            <StyledTaskAvatar>FR</StyledTaskAvatar>
          </StyledTaskFooter>
        </StyledTaskWrapper>
      ) : (
        <StyledTaskWrapper ref={previewRef} isDragging={true} style={{}}>
          <StyledTaskDraggingContent />
        </StyledTaskWrapper>
      )}
    </>
  );
}
