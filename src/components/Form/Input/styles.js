import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  background: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.inputBorder};
  padding: 0.35rem 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  position: relative;

  & input {
    flex: 1;
    border: none;
    outline: 0;
    font-size: 14px;

    &::placeholder {
      color: transparent;
    }

    &:not(:placeholder-shown) {
      & + label {
        transform: translateY(-12px);
        font-size: 10px;
        opacity: 1;
        padding: 0 0.15rem;
      }
    }
  }

  & label {
    position: absolute;
    text-transform: capitalize;
    background: inherit;
    font-weight: 400;
    transition: all 0.4s;
    pointer-events: none;
    opacity: 0.7;
    font-size: 14px;
  }
`;
