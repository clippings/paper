import React from 'react';
import { generateButtonClassName } from '@core/utils/ClassNameModifierUtil';
import { BUTTON_SIZE, BUTTON_TYPE } from '@paper/enums';
import { ButtonPropsType } from './types/ButtonPropsType';
import { StyledButton } from './styles/ButtonStyles';

export const Button: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  className = '',
  size = BUTTON_SIZE.DEFAULT,
  variant = '',
  fullWidth = false,
  type = BUTTON_TYPE.SUBMIT,
  ...rest
}) => {
  const classes: string = generateButtonClassName({
    children,
    className,
    variant,
    fullWidth,
  });

  return (
    <StyledButton variant={variant} size={size} className={classes} {...rest} type={type}>
      {children}
    </StyledButton>
  );
};
