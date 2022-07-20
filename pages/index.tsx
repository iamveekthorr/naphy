import Button from '@components/button/button.component';
import { Variants } from '@components/button/button.styles';
import Layout from '@layouts/layout.components';
import Container from '@layouts/layout.styles';
import {
  StyledBenefit,
  StyledBenefitDescription,
  StyledBenefitImageHeading,
  StyledBenefitsImage,
  StyledBenefitsImageContainer,
  StyledBenefitsSection,
  StyledHeader,
  StyledHeaderParagraph,
  StyledHeadingOne,
  StyledHeadingTextContainer,
  StyledImageContainer,
  StyledLeftSectionContainer,
  StyledServiceHeading,
} from '@styles/index.styles';
import Image from 'next/image';
import { ReactNode } from 'react';
import { NextPageWithLayout } from './_app';
import headerImage from '@public/images/header-image.jpg';
import img1 from '@public/images/img1.jpg';
import img2 from '@public/images/img2.jpg';
import img3 from '@public/images/img3.jpg';

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
        <StyledServiceHeading>our services</StyledServiceHeading>
        <StyledBenefitsImageContainer>
          <StyledBenefit>
            <StyledBenefitsImage>
              <Image
                src={img1}
                quality="high"
                alt="image-1"
                layout="fill"
                objectFit="cover"
              />
            </StyledBenefitsImage>
            <StyledBenefitImageHeading>
              school tutoring
            </StyledBenefitImageHeading>
            <StyledBenefitDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias rem esse excepturi qui neque aut est veritatis accusamus
              fugit magnam!
            </StyledBenefitDescription>
          </StyledBenefit>

          <StyledBenefit>
            <StyledBenefitsImage isMiddleChild>
              <Image
                src={img2}
                quality="high"
                layout="fill"
                objectFit="cover"
                alt="image-1"
              />
            </StyledBenefitsImage>
            <StyledBenefitImageHeading>
              virtual learning
            </StyledBenefitImageHeading>
            <StyledBenefitDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias rem esse excepturi qui neque aut est veritatis accusamus
              fugit magnam!
            </StyledBenefitDescription>
          </StyledBenefit>

          <StyledBenefit>
            <StyledBenefitsImage>
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                quality="high"
                alt="image-2"
              />
            </StyledBenefitsImage>
            <StyledBenefitImageHeading>organization</StyledBenefitImageHeading>
            <StyledBenefitDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestias rem esse excepturi qui neque aut est veritatis accusamus
              fugit magnam!
            </StyledBenefitDescription>
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
