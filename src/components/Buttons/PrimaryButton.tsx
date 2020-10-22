import * as React from 'react';
import { ButtonPropsType } from './types/ButtonPropsType';
import { Button } from './Button';
import { BUTTON_VARIANT } from '@paper/enums';

export const PrimaryButton: React.FunctionComponent<ButtonPropsType> = ({
  children = null,
  ...rest
}) => (
  <Button variant={BUTTON_VARIANT.PRIMARY} {...rest}>
    {children}
  </Button>
);
