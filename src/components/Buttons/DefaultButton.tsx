import * as React from 'react';
import { ButtonPropsType } from './types/ButtonPropsType';
import { Button } from './Button';
import { BUTTON_VARIANT } from '@paper/enums';

export const DefaultButton: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  ...rest
}) => (
  <Button variant={BUTTON_VARIANT.DEFAULT} {...rest}>
    {children}
  </Button>
);
