import styled from 'styled-components';

export interface IFormInputContainerStyleProps {
  withSvg?: boolean;
  borderRadius?: boolean;
  error?: boolean;
  newsletter?: boolean;
  isLabelImportant?: boolean;
}

export const Form = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  width: 100%;

  @media only screen and (min-width: 43.75em) {
    display: flex;
    align-items: center;
  }
`;

export const FormInputContainer = styled.div<IFormInputContainerStyleProps>`
  margin-bottom: calc(25rem / 16);
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  & > label {
    margin-bottom: 6px;
    font-size: calc(12rem / 16);
    font-family: inherit;
    text-align: left;
    text-transform: capitalize;
    color: white;

    ${({ isLabelImportant }) =>
      isLabelImportant &&
      `
      &::after {
        content: '*';
        font-size: calc(12rem/16);
        color: white;
        margin-left: 5px;
      }
    `}

    & > span {
      color: white;
    }
  }

  & > textarea {
    height: calc(100rem / 16);
  }
  & > input,
  & > textarea {
    padding: calc(13rem / 16) calc(16rem / 16);
    font-size: calc(16rem / 16);
    font-family: 'Sora', sans-serif;
    font-weight: inherit;
    outline: none;
    border: none;
    transition-property: border-color, background-color;
    transition-duration: 0.2s;
    background-color: white;
    border-radius: 3px;

    &::placeholder {
      text-transform: capitalize;
    }

    &:focus {
      border-color: #e63946;
    }

    &:disabled {
      border-color: #b7b7b7;
      background-color: #eae9e6;
      cursor: not-allowed;
    }

    ${({ borderRadius }) => borderRadius && 'border-radius: 5px;'}

    ${({ error }) => error && `border-color: red; background-color: #ffdfe1`}
      
  ${({ newsletter }) =>
      newsletter &&
      `
    background-color: #dcdcdc;
    border-color: transparent;

    &::placeholder {
      color: #4a4a4a;
      font-weight: 400;
      opacity: 0.4;
    }

    &:focus{
      border-color: blue;
    }
  `}
  }

  & > input {
    ${({ withSvg }) => withSvg && 'padding-right: 3rem;'}
  }

  & > svg {
    position: absolute;
    top: 50%;
    right: 1.5rem;
    transform: translateY(-50%);
    pointer-events: none;
  }

  & > textarea {
    resize: none;
  }

  @media only screen and (min-width: 43.75em) {
    &:not(:last-child) {
      margin-right: calc(24rem / 16);
    }
  }
`;

export const InputSelection = styled.div<{ isSelected?: boolean }>`
  cursor: pointer;
  color: black;
  background-color: white;
  padding: calc(12rem / 16) calc(32rem / 16);
  user-select: none;
  text-transform: capitalize;
  border-radius: 6px;
  font-size: calc(14rem / 16);

  @media only screen and (min-width: 50em) {
    padding: calc(16rem / 16) calc(32rem / 16);
  }

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: white;
    font-family: 'Sora', sans-serif;
    border: 1px solid #e63946;
    transition-property: color, background-color, font-family;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
    
  `};

  /* &:hover {
    color: #fff;
    background-color: black;
    transition-duration: 0.2s;
    transition-timing-function: ease-in-out;
  } */
`;

export const InputSelectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > :first-child {
    margin-bottom: calc(10rem / 16);
  }
  & > * {
    align-self: start;
  }

  @media only screen and (min-width: 50rem) and (max-width: 1200px) {
    & > :first-child {
      margin-bottom: 0;
    }
  }

  & > *:not(:last-child) {
    margin-right: calc(16rem / 16);

    /* @media only screen and (min-width: 50em) {
      margin-bottom: 0rem;
    } */
  }

  /* @media only screen and (min-width: 50em) {
    width: 100%;
  } */
`;
