import styled from 'styled-components';

export const StyledTaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ isOver, theme }) => (isOver ? theme.listBackgroundHover : theme.listBackground)};
  max-height: 100%;
  width: 100%;
  max-width: 18rem;
  border-radius: 2px;
  flex: 1;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;

  &::before {
    content: '';
    height: 4px;
    background: linear-gradient(45deg, rebeccapurple, transparent);
  }
`;

export const StyledTaskListTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  text-transform: capitalize;
  padding: 1rem 1rem 0;
`;

export const StyledTaskListContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0.75rem;
  gap: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.4);
  }
`;

export const StyledTaskListAddTaskWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  height: 4rem;
  background: transparent;
`;

export const StyledTaskListAddTaskButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.lightGrey};
  background: transparent;
  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;
