import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: black;
  padding-top: calc(120rem / 16);
  padding-bottom: calc(120rem / 16);
  background-color: rgba(168, 218, 220, 0.2);
`;

export const CopyRightsContainer = styled.p`
  letter-spacing: 0.255rem;
  font-size: calc(14rem / 16);
`;

export const StyledFooterMenuTitle = styled.p`
  text-transform: capitalize;
  font-weight: 600;
  font-size: calc(20rem / 16);
`;

export const StyledFooterGrid = styled.section`
  display: grid;
  justify-content: center;
  row-gap: calc(40rem / 16);
  padding: calc(16rem / 16);

  @media only screen and (min-width: 50rem) {
    grid-template-columns: repeat(4, minmax(min-content, 1fr));
    grid-row: auto;
    column-gap: calc(50rem / 16);
    row-gap: calc(70rem / 16);
    justify-content: space-between;
  }
`;

export const StyledGridColumn = styled.div`
  text-align: center;

  & > *:not(:last-child) {
    margin-bottom: calc(40rem / 16);
  }
  @media only screen and (min-width: 50rem) {
    text-align: left;
  }
`;

export const StyledFooterUnOrderedList = styled.ul`
  & > *:not(:last-child) {
    margin-bottom: calc(25rem / 16);
  }
`;

export const StyledAddress = styled.li`
  line-height: calc(25rem / 16);
  font-weight: 300;
`;

export const HorizontalRule = styled.hr`
  border: 1px solid black;
`;
