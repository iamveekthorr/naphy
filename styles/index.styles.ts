import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(30rem / 16);
  padding: calc(16rem / 16);
  @media only screen and (min-width: 50rem) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  height: calc(379rem / 16);
  object-fit: cover;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  @media only screen and (min-width: 50rem) {
    width: calc(548rem / 16);
    align-items: flex-end;
  }
`;

export const StyledHeadingTextContainer = styled.section`
  text-align: center;
  margin-bottom: calc(16rem / 16);

  @media only screen and (min-width: 50rem) {
    text-align: left;
    margin-bottom: calc(32rem / 16);
  }
`;

export const StyledLeftSectionContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: calc(25rem / 16);
  justify-content: center;

  & > button {
    align-self: center;
    text-transform: uppercase;
    width: calc(300rem / 16);
  }

  @media only screen and (min-width: 50rem) {
    width: calc(492rem / 16);
    margin-bottom: 0;
    justify-content: initial;

    & > button {
      align-self: flex-start;
    }
  }
`;

export const StyledHeadingOne = styled.h1`
  font-size: calc(32rem / 16);
  text-transform: capitalize;
  font-weight: 600;
  font-family: inherit;
  margin-bottom: calc(26rem / 16);
  color: #e63946;
`;

export const StyledHeaderParagraph = styled.p`
  font-weight: 200;
  line-height: calc(30rem / 16);
`;

export const StyledBenefitsSection = styled.section`
  padding: calc(16rem / 16);
  margin-top: calc(50rem / 16);
  margin-bottom: calc(50rem / 16);
  @media only screen and (min-width: 50rem) {
    margin-top: calc(149rem / 16);
    margin-bottom: calc(149rem / 16);
  }
`;

export const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > :first-child {
    margin-bottom: calc(30rem / 16);
  }
  @media only screen and (min-width: 50rem) {
    width: calc(350rem / 16);
  }
`;
export const StyledServiceHeading = styled.p`
  font-weight: 700;
  font-size: calc(32rem / 16);
  text-transform: capitalize;
  margin-bottom: calc(25rem / 16);
`;

export const StyledBenefitImageHeading = styled.p`
  text-transform: capitalize;
  font-weight: 700;
  font-size: calc(24rem / 16);
  margin-bottom: calc(30rem / 16);
`;

export const StyledBenefitDescription = styled.p`
  line-height: calc(30rem / 16);
  font-weight: 200;
`;

export const StyledBenefitsImageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > *:not(:last-child) {
    margin-bottom: calc(50rem / 16);
  }
  @media only screen and (min-width: 50rem) {
    flex-direction: row;
    & > *:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;

export const StyledServiceHeadingContainer = styled.div`
  margin-bottom: calc(50rem / 16);
  text-align: center;

  @media only screen and (min-width: 50rem) {
    text-align: left;
  }

  & > p:last-of-type {
    width: 100%;
    @media only screen and (min-width: 50rem) {
      width: calc(100% / 2);
    }
    font-weight: 200;
    line-height: calc(25rem / 16);
  }
`;

export const StyledBenefitsImage = styled.div<{ isMiddleChild?: boolean }>`
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  width: 100%;
  height: calc(400em / 16);
  @media only screen and (min-width: 50rem) {
    height: calc(500rem / 16);

    ${({ isMiddleChild }) => isMiddleChild && `height: calc(600rem/16);`}
  }
`;

export const StyledAboutUsImageContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: calc(32rem / 16);
  & > :first-child {
    margin-right: calc(16rem / 16);
  }

  @media only screen and (min-width: 50rem) {
    flex-direction: row;
    width: 50%;
    margin-right: auto;
    margin-bottom: 0;
  }
`;

export const StyledAboutUsTopImageContainer = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  height: calc(400em / 16);
  width: calc(100% / 2);
  @media only screen and (min-width: 50rem) {
    width: calc(300rem / 16);
    height: calc(500rem / 16);
  }
`;

export const StyledAboutUsFlex = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 50rem) {
    justify-content: space-between;
    flex-direction: row;

    & > :first-child {
      margin-right: calc(40rem / 16);
    }
  }
`;

export const StyledAboutUsSection = styled.section`
  padding: calc(16rem / 16);

  & > div:not(:last-of-type) {
    margin-bottom: calc(40rem / 16);
  }
`;

export const StyledOverViewHeading = styled.p`
  margin-bottom: calc(32rem / 16);
  font-weight: 700;
  font-size: calc(32rem / 16);
  text-transform: capitalize;
`;

export const StyledOverViewTextContainer = styled.p`
  line-height: calc(35rem / 16);
  font-weight: 300;

  & > span {
    display: block;
  }
  & > span:not(:last-of-type) {
    margin-bottom: calc(32rem / 16);
  }
  @media only screen and (min-width: 50rem) {
    width: calc(500rem / 16);
  }
`;

export const StyledAboutUsBottomImageContainer = styled.div`
  object-fit: cover;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  width: 100%;
  height: calc(415rem / 16);
  @media only screen and (min-width: 50rem) {
    width: calc(100% / 2);
  }
`;
