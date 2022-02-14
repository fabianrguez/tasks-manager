import styled from 'styled-components';

export const StyledBoardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledBoardName = styled.h2`
  padding: 1rem;
  text-transform: capitalize;
`;

export const StyledBoardContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0 2rem;
  height: 100%;
`;
