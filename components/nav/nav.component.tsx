import { FC } from 'react';
import Container from '@layouts/layout.styles';
import {
  HeaderBg,
  MenuItems,
  NavContainer,
  StyledNavListItem,
} from './nav.styles';
import {
  Hamburger,
  MobileNavBg,
  MobileNavItems,
} from '@components/mobile-nav/mobile-nav.styles';
import useToggle from '@hooks/useToggle.hook';
import MobileNav from '@components/mobile-nav/mobile-nav.component';
import Link from 'next/link';

const Header: FC = () => {
  const [toggle, doToggle] = useToggle();
  return (
    <HeaderBg>
      <Container>
        <NavContainer>
          <div>logo</div>

          {/* for desktop */}
          <MenuItems>
            <StyledNavListItem>
              <Link href="/">
                <a>home</a>
              </Link>
            </StyledNavListItem>
            <StyledNavListItem>services</StyledNavListItem>
            <StyledNavListItem>
              <Link href="/about">
                <a>about</a>
              </Link>
            </StyledNavListItem>
            <StyledNavListItem>
              <Link href="/contact">
                <a>contact</a>
              </Link>
            </StyledNavListItem>
          </MenuItems>

          {/* for mobile */}
          <Hamburger onClick={doToggle} />

          {toggle && (
            <MobileNav>
              <MobileNavBg>
                <MobileNavItems>account</MobileNavItems>
                <MobileNavItems>bank account</MobileNavItems>
                <MobileNavItems>profile</MobileNavItems>
                <MobileNavItems>account statement</MobileNavItems>
                <MobileNavItems>fees</MobileNavItems>
                <MobileNavItems>about</MobileNavItems>
                <MobileNavItems>sign out</MobileNavItems>
              </MobileNavBg>
            </MobileNav>
          )}
        </NavContainer>
      </Container>
    </HeaderBg>
  );
};

export default Header;
