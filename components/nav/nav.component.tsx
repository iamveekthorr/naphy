import { FC } from 'react';
import Container from '@layouts/layout.styles';
import {
  HeaderBg,
  MenuItems,
  NavContainer,
  StyledLogoContainer,
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
import { useRouter } from 'next/router';

import logo from '@public/images/logo.jpeg';
import Image from 'next/image';

const Header: FC = () => {
  const [toggle, doToggle] = useToggle();
  const { push } = useRouter();
  return (
    <HeaderBg>
      <Container>
        <NavContainer>
          <StyledLogoContainer>
            <Image src={logo} quality="high" alt="image-2" />
          </StyledLogoContainer>

          {/* for desktop */}
          <MenuItems>
            <StyledNavListItem>
              <Link href="#">
                <a>home</a>
              </Link>
            </StyledNavListItem>
            <StyledNavListItem>
              <Link href="#about">
                <a>about</a>
              </Link>
            </StyledNavListItem>
            <StyledNavListItem>
              <Link href="#services">
                <a>services</a>
              </Link>
            </StyledNavListItem>
            <StyledNavListItem>
              <Link href="#contact">
                <a>contact</a>
              </Link>
            </StyledNavListItem>
          </MenuItems>

          {/* for mobile */}
          <Hamburger onClick={doToggle} />

          {toggle && (
            <MobileNav>
              <MobileNavBg>
                <MobileNavItems>home</MobileNavItems>
                <MobileNavItems>about</MobileNavItems>
                <MobileNavItems>contact</MobileNavItems>
              </MobileNavBg>
            </MobileNav>
          )}
        </NavContainer>
      </Container>
    </HeaderBg>
  );
};

export default Header;
