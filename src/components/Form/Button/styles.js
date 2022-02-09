import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  padding: 0.35rem 0.75rem;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.6;
  }
`;
