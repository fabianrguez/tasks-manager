import { useActiveBoard, useTasks } from 'hooks';
import { useDrag } from 'react-dnd';
import { Calendar } from 'react-feather';
import {
  StlyedTaskHeader,
  StyledTaskAvatar,
  StyledTaskContent,
  StyledTaskCreationDate,
  StyledTaskDraggingContent,
  StyledTaskFooter,
  StyledTaskPriority,
  StyledTaskTitle,
  StyledTaskWrapper,
} from './styles';

export function Task({ title, id, creationDate, description, priority, assignedTo, list }) {
  const { moveTask } = useActiveBoard('board2');
  const [{ isDragging }, drag, previewRef] = useDrag(() => ({
    item: { title, id, creationDate, description, priority, assignedTo },
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

  const parseDate = (timestamp) => new Intl.DateTimeFormat().format(new Date(timestamp.seconds * 1000));

  return (
    <>
      {!isDragging ? (
        <StyledTaskWrapper ref={drag}>
          <StlyedTaskHeader>
            <StyledTaskPriority priority={priority}>{priority}</StyledTaskPriority>
          </StlyedTaskHeader>
          <StyledTaskTitle>{title}</StyledTaskTitle>
          <StyledTaskContent title={description}>{description}</StyledTaskContent>
          <StyledTaskFooter>
            <StyledTaskCreationDate>
              <Calendar size={14} />
              {parseDate(creationDate)}
            </StyledTaskCreationDate>
            <StyledTaskAvatar>FR</StyledTaskAvatar>
          </StyledTaskFooter>
        </StyledTaskWrapper>
      ) : (
        <StyledTaskWrapper ref={previewRef} isDragging={true}>
          <StyledTaskDraggingContent priority={priority} />
        </StyledTaskWrapper>
      )}
    </>
  );
}
