import * as React from 'react';
import { BUTTON_SIZE, BUTTON_SHAPE, BUTTON_VARIANT, BUTTON_TYPE } from '@paper/enums';

export type ButtonPropsType = {
  children?: React.ReactNode;
  className?: string;
  size?: BUTTON_SIZE;
  shape?: BUTTON_SHAPE;
  variant?: BUTTON_VARIANT;
  fullWidth?: boolean;
  iconRight?: boolean;
  type?: BUTTON_TYPE;
};
