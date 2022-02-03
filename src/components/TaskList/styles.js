import styled from 'styled-components';

export const StyledTaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.lightGrey};
  height: 32rem;
  width: 100%;
  padding: 1rem;
  flex: 1;
`;

export const StyledTaskListTitle = styled.h2`
  font-weight: 400;
  text-transform: uppercase;
`;
