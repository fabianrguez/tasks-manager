import styled from 'styled-components';

export const StyledModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  perspective: 1000px;
  z-index: ${({ isOpen }) => (isOpen ? 2 : -1)};
`;

export const StyledModalDialog = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  min-width: 40rem;
  min-height: 24rem;
  padding: 1rem;
  border-radius: 6px;
  position: relative;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  transform: ${({ isVisible }) =>
    isVisible ? 'rotateX(0) scale(1) translateY(0)' : 'rotateX(65deg) scale(0.75) translateY(30px)'};
  transition: all 0.35s;
`;

export const StyledModalCloseButton = styled.button`
  display: flex;
  place-content: center;
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledModalTitle = styled.h2`
  font-size: 14px;
  text-transform: capitalize;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
`;

export const StyledModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
`;

export const StyledModalRow = styled.div`
  display: flex;
  gap: 2rem;
`;
