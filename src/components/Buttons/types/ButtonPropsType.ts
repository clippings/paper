import * as React from 'react';
import { BUTTON_SIZE } from '../enums/ButtonSizeEnum';
import { BUTTON_SHAPE } from '../enums/ButtonShapeEnum';
import { BUTTON_VARIANT } from '../enums/ButtonVariantEnum';
import { BUTTON_TYPE } from '../enums/ButtonTypeEnum';

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
