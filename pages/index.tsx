import Button from '@components/button/button.component';
import { Variants } from '@components/button/button.styles';
import Layout from '@layouts/layout.components';
import Container from '@layouts/layout.styles';
import {
  StyledHeader,
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
            <h1> namphy language academy</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus recusandae, eveniet suscipit necessitatibus mollitia
              quasi! Delectus atque iste aliquid at quas suscipit iusto sunt
              quos, corporis ratione veniam aspernatur vitae!
            </p>
          </StyledHeadingTextContainer>
          <Button variants={Variants.PRIMARY}>contact us</Button>
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
    </Container>
  );
};

Home.getLayout = (page: ReactNode) => <Layout>{page}</Layout>;

export default Home;
