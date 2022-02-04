import styled from 'styled-components';

export const StyledTaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #efefef;
  height: 100%;
  width: 100%;
  max-width: 19rem;
  border-radius: 2px;
  flex: 1;
  overflow-y: auto;

  &::before {
    content: '';
    height: 4px;
    background: linear-gradient(45deg, rebeccapurple, transparent);
  }
`;

export const StyledTaskListTitle = styled.h2`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
`;

export const StyledTaskListContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;
