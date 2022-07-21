import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Container from '@layouts/layout.styles';

import {
  CopyRightsContainer,
  FooterContainer,
  HorizontalRule,
  StyledAddress,
  StyledFooterGrid,
  StyledFooterMenuTitle,
  StyledFooterUnOrderedList,
  StyledGridColumn,
} from './footer.styles';

const Footer: FC = () => (
  <>
    <FooterContainer>
      <Container>
        <StyledFooterGrid>
          <StyledGridColumn>
            <StyledFooterMenuTitle>contact</StyledFooterMenuTitle>
            <StyledFooterUnOrderedList>
              <li>
                <Link href="tel:+2348023158133" target={'_blank'}>
                  <a>+2348023158133</a>
                </Link>
              </li>
              <HorizontalRule />
              <li>
                <Link href="tel:+234806786066" target={'_blank'}>
                  <a>+234806786066</a>
                </Link>
              </li>
            </StyledFooterUnOrderedList>
          </StyledGridColumn>
          <StyledGridColumn>
            <StyledFooterMenuTitle>address</StyledFooterMenuTitle>

            <StyledFooterUnOrderedList>
              <StyledAddress>
                19 Onitolo Street off Gbaja road beside St Anthony Catholic
                church Gbaja, Surulere.
              </StyledAddress>
            </StyledFooterUnOrderedList>
          </StyledGridColumn>
          <StyledGridColumn>
            <StyledFooterMenuTitle>about</StyledFooterMenuTitle>
            <StyledAddress>
              Naphy Language Academy creates a platform to learn international
              languages (for example: French, German and Mandarin) and local
              languages (For example: Yoruba, Igbo and Hausa).
            </StyledAddress>
          </StyledGridColumn>

          <StyledGridColumn>
            <StyledFooterMenuTitle>site map</StyledFooterMenuTitle>
            <StyledFooterUnOrderedList>
              <li>
                <Link href="#">Home</Link>
              </li>
            </StyledFooterUnOrderedList>
            <StyledFooterUnOrderedList>
              <li>
                <Link href="#about_us">About</Link>
              </li>
            </StyledFooterUnOrderedList>
            <StyledFooterUnOrderedList>
              <li>
                <Link href="#service">Service</Link>
              </li>
            </StyledFooterUnOrderedList>
            <StyledFooterUnOrderedList>
              <li>
                <Link href="#contact">Contact</Link>
              </li>
            </StyledFooterUnOrderedList>
          </StyledGridColumn>
        </StyledFooterGrid>
      </Container>
    </FooterContainer>
    {/* #TODO: ADD COPYRIGHTS TO THW FOOTER */}
    {/* <Container>
      <div>
        <CopyRightsContainer>
          Copyrights &copy; 2022 Devthorr
        </CopyRightsContainer>
      </div>
    </Container> */}
  </>
);

export default Footer;
