import * as React from 'react';
import { BUTTON_SHAPE, BUTTON_SIZE, BUTTON_TYPE } from '@paper/enums';
import { ButtonPropsType } from './types/ButtonPropsType';
import { StyledCircleButton } from './styles/ButtonStyles';
import { generateButtonClassName } from '@core/utils/ClassNameModifierUtil';

export const CircleButton: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  className = '',
  size = BUTTON_SIZE.MEDIUM,
  variant = '',
  fullWidth = false,
  type = BUTTON_TYPE.SUBMIT,

  ...rest
}) => {
  const classes: string = generateButtonClassName({
    children,
    className,
    variant,
    shape: BUTTON_SHAPE.CIRCLE,
    fullWidth,
  });

  return (
    <StyledCircleButton variant={variant} className={classes} size={size} type={type} {...rest}>
      {children}
    </StyledCircleButton>
  );
};
