import Footer from '@components/footer/footer.component';
import Header from '@components/nav/nav.component';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

const Layout: FC<{ children: ReactNode; pageTitle: string }> = ({
  children,
  pageTitle,
}) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Namphy Language Academy." />
      <title>{`Namphy Language Academy | ${pageTitle}`}</title>
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
