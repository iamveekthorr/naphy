import styled from 'styled-components';

export const MobileNavBg = styled.ul`
  background-color: white;
  padding: calc(30rem / 16) 0;
  color: #353f50;
`;

export const MobileNavItems = styled.li`
  padding: calc(16rem / 16);
  text-transform: capitalize;
`;

export const NavContainer = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  @media only screen and (min-width: 80rem) {
    display: none;
  }
`;

export const CloseNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(16rem / 16) 0;
  background-color: white;
`;

export const Hamburger = styled.div`
  width: calc(35rem / 16);
  height: calc(4rem / 16);
  background-color: black;
  position: relative;
  border-radius: 5px;
  &::before,
  &::after {
    content: '';
    border-radius: 5px;
    position: absolute;
    width: calc(35rem / 16);
    height: calc(4rem / 16);
    background-color: inherit;
  }

  &::after {
    top: calc(10rem / 16);
  }

  &::before {
    bottom: calc(10rem / 16);
  }

  @media only screen and (min-width: 80rem) {
    display: none;
  } ;
`;
