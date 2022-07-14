import { NextPageWithLayout } from './_app';
import { ReactNode } from 'react';
import Container from '@layouts/layout.styles';
import Layout from '@layouts/layout.components';

const About: NextPageWithLayout = () => {
  return (
    <Container>
      <div> hello world </div>
    </Container>
  );
};

About.getLayout = (page: ReactNode) => {
  return <Layout>{page}</Layout>;
};

export default About;
