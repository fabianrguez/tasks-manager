import styled from 'styled-components';

export const StyledTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.taskColor};
  padding: ${({ isDragging }) => (!isDragging ? '0.5rem 1rem' : 0)};
  height: 9rem;
  width: 100%;
  border-radius: 3px;
  color: ${({ theme }) => theme.black};
  opacity: ${({ isDragging }) => (isDragging ? 0.4 : 1)};
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const StlyedTaskHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  width: 100%;
  margin-bottom: 0.75rem;
`;

export const StyledTaskTitle = styled.h3`
  font-size: 12px;
  font-weight: 600;
`;

export const StyledTaskCreationDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  font-size: 10px;
  color: ${({ theme }) => theme.lightGrey};
`;

export const StyledTaskContent = styled.div`
  display: inline-block;
  font-size: 10px;
  margin-top: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const StyledTaskAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  font-size: 10px;
  background: ${({ theme }) => theme.avatarBackground};
  color: ${({ theme }) => theme.black};
`;

export const StyledTaskFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.75rem;
  width: 100%;

  & ${StyledTaskAvatar} {
    margin-left: auto;
  }
`;

export const StyledTaskPriority = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5rem;
  width: 4rem;
  background: ${({ theme, priority }) => theme.priorityBadge.color[priority]};
  color: ${({ theme }) => theme.white};
  border-radius: 10px;
  font-weight: 600;
  text-transform: uppercase;
`;

export const StyledTaskDraggingContent = styled.div`
  height: 100%;
  width: 100%;
  background: repeating-linear-gradient(
    45deg,
    ${({ theme, priority }) => theme.priorityBadge.color[priority]},
    ${({ theme, priority }) => theme.priorityBadge.color[priority]} 5px,
    #ffffff 5px,
    #ffffff 10px
  );
  border: 3px solid ${({ theme, priority }) => theme.priorityBadge.color[priority]};
`;
