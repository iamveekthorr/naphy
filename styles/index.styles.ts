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
  font-size: calc(18rem / 16);
  font-weight: 200;
  line-height: calc(30rem / 16);
`;
