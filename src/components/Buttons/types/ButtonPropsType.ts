import * as React from 'react';
import { BUTTON_SIZE, BUTTON_VARIANT, BUTTON_TYPE } from '@paper/enums';

export type ButtonPropsType = {
  children: React.ReactNode;
  className?: string;
  size?: BUTTON_SIZE;
  variant?: BUTTON_VARIANT;
  fullWidth?: boolean;
  type?: BUTTON_TYPE;
};
