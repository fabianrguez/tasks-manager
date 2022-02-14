import { Server, Settings } from 'react-feather';
import { StyledNavbarAside, StyledNavbarNav, StyledNavbarNavItem } from './styles';

export function Navbar() {
  return (
    <StyledNavbarAside>
      <StyledNavbarNav>
        <StyledNavbarNavItem to="/">
          <Server />
          <span>Boards</span>
        </StyledNavbarNavItem>
        <StyledNavbarNavItem to="/test" placebottom="true">
          <Settings />
          <span>Settings</span>
        </StyledNavbarNavItem>
      </StyledNavbarNav>
    </StyledNavbarAside>
  );
}
