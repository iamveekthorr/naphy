import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: calc(16rem / 16);
  @media only screen and (min-width: 50rem) {
    flex-direction: row;
    justify-content: center;
    align-items: initial;
  }
`;

export const StyledImageContainer = styled.div`
  position: relative;
  height: calc(300rem / 16);
  width: 100%;
  object-fit: contain;
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
  align-self: start;
  flex-direction: column;
  margin-bottom: calc(25rem / 16);
  justify-content: center;

  @media only screen and (min-width: 50rem) {
    margin-bottom: 0;
    justify-content: initial;
    align-items: baseline;
  }
`;
