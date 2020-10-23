import * as React from 'react';
import { Button } from './Button';
import { BUTTON_SHAPE } from '@paper/enums';
import { ButtonPropsType } from './types/ButtonPropsType';

export const CircleButton: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  ...rest
}) => (
  <Button shape={BUTTON_SHAPE.CIRCLE} {...rest}>
    {children}
  </Button>
);
