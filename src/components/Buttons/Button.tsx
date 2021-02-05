import React from 'react';
import { generateButtonClassName } from '@core/utils/ClassNameModifierUtil';
import { BUTTON_SIZE, BUTTON_TYPE } from '@paper/enums';
import { ButtonPropsType } from './types/ButtonPropsType';
import { StyledButton, StyledButtonStartIcon, StyledButtonEndIcon } from './styles/ButtonStyles';

export const Button: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  className = '',
  size = BUTTON_SIZE.DEFAULT,
  variant = '',
  fullWidth = false,
  type = BUTTON_TYPE.SUBMIT,
  startIcon,
  endIcon,
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
      {startIcon && <StyledButtonStartIcon>{startIcon}</StyledButtonStartIcon>}
      {children}
      {endIcon && <StyledButtonEndIcon>{endIcon}</StyledButtonEndIcon>}
    </StyledButton>
  );
};
