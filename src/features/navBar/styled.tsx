import styled from 'styled-components';
import StyledLink from '../ui/StyledLink';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0038d2;
  color: #9e9d9d;
  padding: 1rem;

  div {
    display: flex;
    align-items: center;
  }

  h1 {
    margin: 0;
    color: #c4c6d1;
  }

  button:hover  {
    background-color: #FFF;
    color: #0038d2;
  }
`;

export const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const MenuItem = styled.li`
  margin-right: 1rem;
  

  &:last-child {
    margin-right: 0;
  }
`;

export const StyledNavLink = styled(StyledLink)`
    color: #fff;
    font-size: 22px;
    font-weight: 600;
`;
