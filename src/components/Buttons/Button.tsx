import React from 'react';
import { generateButtonClassName } from '../../core/utils/ClassNameModifierUtil';
import { BUTTON_TYPE } from './enums/ButtonTypeEnum';
import { ButtonPropsType } from './types/ButtonPropsType';

export const Button: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  className = '',
  size = '',
  shape = '',
  variant = '',
  fullWidth = false,
  iconRight = false,
  type = BUTTON_TYPE.SUBMIT,
  ...rest
}) => {
  const classes: string = generateButtonClassName({
    children,
    className,
    size,
    variant,
    shape,
    fullWidth,
    iconRight,
  });

  return (
    <button className={classes} {...rest} type={type}>
      {children}
    </button>
  );
};
