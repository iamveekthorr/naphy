import { FC, ReactNode } from 'react';
import { NavContainer } from './mobile-nav.styles';

const MobileNav: FC<{ children: ReactNode }> = ({ children }) => {
  return <NavContainer>{children}</NavContainer>;
};

export default MobileNav;
