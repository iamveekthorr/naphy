import styled from 'styled-components';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

export enum Variants {
  OUTLINED = 'OUTLINED',
  PRIMARY = 'PRIMARY',
  DISABLED = 'DISABLED',
}

interface IButtonProps extends ComponentPropsWithoutRef<'button'> {
  variants: Variants;
  children: ReactNode;
  filled?: boolean;
  disabledState?: boolean;
}

export const Btn = styled.button<IButtonProps>`
  padding: calc(16rem / 16) calc(48rem / 16);
  border: none;
  border-radius: 8px;
  font-size: inherit;
  text-transform: capitalize;
  font-family: inherit;
  cursor: pointer;
  height: calc(48rem / 16);
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ variants }) =>
    variants === Variants.PRIMARY &&
    `
        background:blue;
        color: white;
    `}

  ${({ variants }) =>
    variants === Variants.OUTLINED &&
    `
        background: transparent;
        border: 2px solid blue;
        color: blue;
    `}
    
    ${({ variants }) =>
    variants === Variants.DISABLED &&
    `
        background: grey;
        color: grey;
    `};
`;
