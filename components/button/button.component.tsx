import { FC } from 'react';
import { Btn, IButtonProps } from './button.styles';

const Button: FC<IButtonProps> = ({ variants, children, ...otherProps }) => {
  return (
    <Btn variants={variants} {...otherProps}>
      {children}
    </Btn>
  );
};

export default Button;
