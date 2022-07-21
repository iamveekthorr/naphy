import Button from '@components/button/button.component';
import { Variants } from '@components/button/button.styles';
import Layout from '@layouts/layout.components';
import Container from '@layouts/layout.styles';
import {
  StyledAboutUsBottomImageContainer,
  StyledAboutUsFlex,
  StyledAboutUsImageContainer,
  StyledAboutUsSection,
  StyledAboutUsTopImageContainer,
  StyledBenefit,
  StyledBenefitDescription,
  StyledBenefitImageHeading,
  StyledBenefitsImage,
  StyledBenefitsImageContainer,
  StyledBenefitsSection,
  StyledContactFormImage,
  StyledContactFormRightSide,
  StyledContactLeftSideBg,
  StyledContactSection,
  StyledContactUsHeading,
  StyledContactUsSubheading,
  StyledHeader,
  StyledHeaderParagraph,
  StyledHeadingOne,
  StyledHeadingTextContainer,
  StyledImageContainer,
  StyledInnerContainer,
  StyledLeftSectionContainer,
  StyledOverViewHeading,
  StyledOverViewTextContainer,
  StyledServiceHeading,
  StyledServiceHeadingContainer,
} from '@styles/index.styles';
import Image from 'next/image';
import { ReactNode } from 'react';
import { NextPageWithLayout } from './_app';
import headerImage from '@public/images/header-image.jpg';
import img1 from '@public/images/img1.jpg';
import img2 from '@public/images/img2.jpg';
import img3 from '@public/images/img3.jpg';
import about_us1 from '@public/images/about_us-top1.jpg';
import contact_us from '@public/images/contact_us.jpg';
import { Form, FormInputContainer } from '@components/form/form.styles';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Container>
        <StyledHeader>
          <StyledLeftSectionContainer>
            <StyledHeadingTextContainer>
              <StyledHeadingOne> come learn with us</StyledHeadingOne>
              <StyledHeaderParagraph>
                Naphy Language Academy creates a platform to learn international
                languages (for example: French, German and Mandarin) and local
                languages (For example: Yoruba, Igbo and Hausa).
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
      </Container>
      <Container>
        <StyledBenefitsSection id="services">
          <StyledServiceHeadingContainer>
            <StyledServiceHeading>our services</StyledServiceHeading>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              repellat blanditiis unde quo neque porro quos minus necessitatibus
              perferendis error.
            </p>
          </StyledServiceHeadingContainer>
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
                Molestias rem esse excepturi qui neque aut est veritatis
                accusamus fugit magnam!
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
                Molestias rem esse excepturi qui neque aut est veritatis
                accusamus fugit magnam!
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
              <StyledBenefitImageHeading>
                organization
              </StyledBenefitImageHeading>
              <StyledBenefitDescription>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias rem esse excepturi qui neque aut est veritatis
                accusamus fugit magnam!
              </StyledBenefitDescription>
            </StyledBenefit>
          </StyledBenefitsImageContainer>
        </StyledBenefitsSection>
      </Container>

      <Container>
        <StyledAboutUsSection id="about">
          <StyledServiceHeadingContainer>
            <StyledServiceHeading>About us</StyledServiceHeading>
            <p>
              We use both formal and informal ways to teach the children making
              learning a fun filled experience such as games, songs, interactive
              worksheets etc.
            </p>
          </StyledServiceHeadingContainer>

          <StyledAboutUsFlex>
            <StyledAboutUsImageContainer>
              <StyledAboutUsTopImageContainer>
                <Image
                  src={about_us1}
                  alt="top image"
                  layout="fill"
                  objectFit="cover"
                  quality="high"
                />
              </StyledAboutUsTopImageContainer>
              <StyledAboutUsTopImageContainer>
                <Image
                  src={about_us1}
                  alt="top image"
                  layout="fill"
                  objectFit="cover"
                  quality="high"
                />
              </StyledAboutUsTopImageContainer>
            </StyledAboutUsImageContainer>

            <div>
              <StyledOverViewHeading>overview</StyledOverViewHeading>
              <StyledOverViewTextContainer>
                <span>
                  Naphy Language Academy creates a platform to learn
                  international languages (for example: French, German and
                  Mandarin) and local languages (For example: Yoruba, Igbo and
                  Hausa). It also prepares students to write international exams
                  like Delf Dalf from Alliance Française, TEF Canada, Goethe
                  etc.
                </span>
                <span>
                  The academy started since 2015 but presently runs weekend
                  classes at the centre. The world is a global village and
                  knowledge in more than one language is an added value that
                  would play a vital role in social and economic communications
                  and any international career pursuit.
                </span>
              </StyledOverViewTextContainer>
            </div>
          </StyledAboutUsFlex>
          <StyledAboutUsFlex>
            <StyledAboutUsBottomImageContainer>
              <Image
                src={about_us1}
                alt="top image"
                layout="fill"
                objectFit="cover"
                quality="high"
              />
            </StyledAboutUsBottomImageContainer>
            <div>
              <StyledOverViewHeading>our goal</StyledOverViewHeading>
              <StyledOverViewTextContainer>
                <span>
                  To prepare our candidates futuristically to stand out
                  anywhere.
                </span>
                <span>
                  <strong>THE BENEFITS:</strong>
                  <ol>
                    <li>It is an added value to any course in life.</li>
                    <li>It develops an &quot;ear&quot; for languages.</li>
                    <li> It gives a career advantage.</li>
                    <li>
                      It helps in communicating and connecting with other people
                      and their culture.
                    </li>
                  </ol>
                </span>
              </StyledOverViewTextContainer>
            </div>
          </StyledAboutUsFlex>
        </StyledAboutUsSection>
      </Container>

      <StyledContactSection id="contact">
        <StyledContactLeftSideBg>
          <StyledInnerContainer>
            <StyledContactUsHeading>send us a message</StyledContactUsHeading>
            <StyledContactUsSubheading>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </StyledContactUsSubheading>

            <Form>
              <FormInputContainer>
                <label htmlFor="email">Email</label>
                <input type="text" placeholder="jondoe@email.com" />
              </FormInputContainer>
              <FormInputContainer>
                <label htmlFor="email">message</label>
                <textarea placeholder="tell us what service you require." />
              </FormInputContainer>

              <Button variants={Variants.WHITE}>send</Button>
            </Form>
          </StyledInnerContainer>
        </StyledContactLeftSideBg>

        <StyledContactFormRightSide>
          <StyledContactFormImage>
            <Image
              src={contact_us}
              alt="top image"
              layout="fill"
              objectFit="cover"
              quality="high"
            />
          </StyledContactFormImage>
        </StyledContactFormRightSide>
      </StyledContactSection>
    </>
  );
};

Home.getLayout = (page: ReactNode) => (
  <Layout pageTitle={'Home'}>{page}</Layout>
);

export default Home;
