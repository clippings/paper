import * as React from 'react';
import { Button } from './Button';
import { BUTTON_SHAPE } from '@paper/enums';
import { CircleButtonPropsType } from './types/CircleButtonPropsType';

export const CircleButton: React.FunctionComponent<CircleButtonPropsType> = ({ ...rest }) => (
  <Button shape={BUTTON_SHAPE.CIRCLE} {...rest} />
);
