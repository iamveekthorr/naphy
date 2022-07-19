import Button from '@components/button/button.component';
import { Variants } from '@components/button/button.styles';
import Layout from '@layouts/layout.components';
import Container from '@layouts/layout.styles';
import {
  StyledBenefit,
  StyledBenefitsImage,
  StyledBenefitsImageContainer,
  StyledBenefitsSection,
  StyledHeader,
  StyledHeaderParagraph,
  StyledHeadingOne,
  StyledHeadingTextContainer,
  StyledImageContainer,
  StyledLeftSectionContainer,
} from '@styles/index.styles';
import Image from 'next/image';
import { ReactNode } from 'react';
import { NextPageWithLayout } from './_app';
import headerImage from '@public/header-image.jpg';

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <StyledHeader>
        <StyledLeftSectionContainer>
          <StyledHeadingTextContainer>
            <StyledHeadingOne> come learn with us</StyledHeadingOne>
            <StyledHeaderParagraph>
              Naphy Language Academy creates a platform to learn international
              languages (for example: French, German and Mandarin) and local
              languages (For example: Yoruba, Igbo and Hausa). It also prepares
              pupils to write international exams like Delf Dalf from Alliance
              Française, TEF Canada, Goethe etc.
            </StyledHeaderParagraph>
          </StyledHeadingTextContainer>
          <Button variants={Variants.PRIMARY}>get in touch</Button>
        </StyledLeftSectionContainer>
        <StyledImageContainer>
          <Image
            src={headerImage}
            alt="image to be in the header"
            quality={100}
            layout="fill"
          />
        </StyledImageContainer>
      </StyledHeader>
      <StyledBenefitsSection>
        <StyledBenefitsImageContainer>
          <StyledBenefit>
            <StyledBenefitsImage />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias rem esse excepturi qui neque aut est veritatis accusamus
              fugit magnam!
            </p>
          </StyledBenefit>

          <StyledBenefit>
            <StyledBenefitsImage isMiddleChild />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias rem esse excepturi qui neque aut est veritatis accusamus
              fugit magnam!
            </p>
          </StyledBenefit>

          <StyledBenefit>
            <StyledBenefitsImage />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias rem esse excepturi qui neque aut est veritatis accusamus
              fugit magnam!
            </p>
          </StyledBenefit>
        </StyledBenefitsImageContainer>
      </StyledBenefitsSection>
    </Container>
  );
};

Home.getLayout = (page: ReactNode) => (
  <Layout pageTitle={'Home'}>{page}</Layout>
);

export default Home;
