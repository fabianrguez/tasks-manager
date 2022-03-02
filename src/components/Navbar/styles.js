import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavbarAside = styled.aside`
  background: ${({ theme }) => theme.white};
  height: 100%;
  box-shadow: 0 -1px 7px 0 rgb(0 0 0 / 30%);
  width: 10%;
  max-width: 7rem;
`;

export const StyledNavbarNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  gap: 4rem;
  height: 100%;
`;

export const StyledNavbarNavItem = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  position: relative;
  width: 100%;
  max-height: 4rem;
  font-weight: 600;
  font-size: 14px;
  opacity: 0.2;
  transition: opacity 0.2s;
  ${({ placebottom }) => placebottom && 'margin-top: auto;'}

  &:hover {
    opacity: 0.6;
  }

  &::before {
    content: '';
    display: inline;
    position: absolute;
    left: 0;
    height: 100%;
    border-left: 3px solid transparent;
  }

  &.active {
    opacity: 1;
    &::before {
      border-left: 3px solid ${({ theme }) => theme.activeLink};
    }
  }
`;
