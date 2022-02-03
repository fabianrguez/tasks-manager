import styled from 'styled-components';

export const StyledTaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${({ theme }) => theme.taskColor};
  padding: 0.5rem 1rem 2rem;
  min-height: 4rem;
  width: 100%;
  border-radius: 3px;
  color: ${({ theme }) => theme.black};
  opacity: ${({ isDragging }) => (isDragging ? 0.4 : 1)};
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
  font-size: 14px;
  font-weight: 600;
`;

export const StyledTaskCreationDate = styled.span`
  display: flex;
  align-items: center;
  gap: 0.15rem;
  color: ${({ theme }) => theme.lightGrey};
`;

export const StyledTaskContent = styled.div`
  display: flex;
  font-size: 10px;
  margin-top: 0.75rem;
`;

export const StyledTaskAvatar = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.avatarBackground};
  color: ${({ theme }) => theme.black};
`;
