import { FC } from 'react';
import IButtonProps from '@interface/button.interface';
import { Btn } from './button.styles';

const Button: FC<IButtonProps> = ({
  variants,
  children,
  bHeight,
  bWidth,
  paddingLeftAndRight,
  ...otherProps
}) => {
  return (
    <Btn
      bHeight={bHeight}
      bWidth={bWidth}
      paddingLeftAndRight={paddingLeftAndRight}
      variants={variants}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};

export default Button;
