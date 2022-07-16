import styled from 'styled-components';

export const HeaderBg = styled.nav`
  background: white;
`;

export const NavContainer = styled.section`
  display: flex;
  padding: calc(16rem / 16);
  align-items: center;

  & > :first-child {
    margin-right: auto;
  }
`;

export const MenuItems = styled.ul`
  display: none;

  @media only screen and (min-width: 50rem) {
    display: flex;
    & > *:not(:last-child) {
      margin-right: calc(50rem / 16);
    }
  }
`;

export const StyledNavListItem = styled.li`
  text-transform: capitalize;
  font-weight: 400;
`;
