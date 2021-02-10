import React, { forwardRef, RefObject } from 'react';
import { generateButtonClassName } from '@core/utils/ClassNameModifierUtil';
import { BUTTON_SIZE, BUTTON_TYPE } from '@paper/enums';
import { ButtonPropsType } from './types/ButtonPropsType';
import { StyledButton, StyledButtonStartIcon, StyledButtonEndIcon } from './styles/ButtonStyles';

export const Button: React.FunctionComponent<ButtonPropsType> = forwardRef(
  (
    {
      children = null,
      className = '',
      size = BUTTON_SIZE.MEDIUM,
      variant = '',
      fullWidth = false,
      type = BUTTON_TYPE.SUBMIT,
      startIcon,
      endIcon,
      ...rest
    },
    ref: RefObject<HTMLButtonElement>
  ) => {
    const classes: string = generateButtonClassName({
      children,
      className,
      variant,
      fullWidth,
    });

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        size={size}
        className={classes}
        type={type}
        {...rest}
      >
        {startIcon && <StyledButtonStartIcon>{startIcon}</StyledButtonStartIcon>}
        {children}
        {endIcon && <StyledButtonEndIcon>{endIcon}</StyledButtonEndIcon>}
      </StyledButton>
    );
  }
);
