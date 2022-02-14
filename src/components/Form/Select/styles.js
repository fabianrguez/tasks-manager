import styled from 'styled-components';
import { StyledButton } from '../Button/styles';

export const StyledSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  perspective: 1000px;
  margin: 0.5rem 0;
  border: 1px solid ${({ theme }) => theme.inputBorder};
  border-radius: 4px;
  background: ${({ theme }) => theme.white};
  z-index: ${({ isMenuOpen }) => (isMenuOpen ? 1 : 0)};
  flex: 1;

  & ${StyledButton} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: inherit;
    text-transform: capitalize;
    position: relative;
    z-index: 0;

    & svg {
      transition: all 0.35s;
      transform: rotate(${({ isMenuOpen }) => (isMenuOpen ? '180deg' : '0')});
    }
  }
`;

export const StyledSelectMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 100%;
  margin-top: 0.25rem;
  background: inherit;
  border-radius: inherit;
  border: inherit;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  backface-visibility: hidden;
  transform: ${({ isVisible }) => (isVisible ? 'rotate3d(0, 0, 0, 0)' : 'rotate3d(1, 0, 0, -90deg)')};
  transform-origin: 0% 0%;
  z-index: 1;
  transition: all 0.35s;
`;

export const StyledMenuItem = styled.li`
  display: flex;
  cursor: pointer;
  padding: 0.25rem;
  font-size: 14px;
  text-transform: capitalize;
  transition: all 0.2s;

  &:hover,
  &:focus,
  &[aria-selected='true'] {
    background: ${({ theme }) => theme.inputBorder};
  }
`;
