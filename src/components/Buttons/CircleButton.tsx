import * as React from 'react';
import { Button } from './Button';
import { BUTTON_SHAPE } from './enums/ButtonShapeEnum';

export const DefaultButton: React.FunctionComponent = ({ ...rest }) => (
  <Button shape={BUTTON_SHAPE.CIRCLE} {...rest} />
);
