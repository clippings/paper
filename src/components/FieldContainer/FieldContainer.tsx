import React from 'react';
import classNames from '@core/config/ClassNames';
import { FieldContainerPropTypes } from './types/FieldContainerPropTypes';
import { FormGroup } from '../FormGroup/FormGroup';
import { FormError } from '../FormError/FormError';
import { Label } from '../Label/Label';
import classnames from 'classnames';
import { Text } from '../Text/Text';
import { TEXT_COLOR, TEXT_TYPE } from '@paper/enums';

export const FieldContainer: React.FunctionComponent<FieldContainerPropTypes> = ({
  id = '',
  title = null,
  error = null,
  className = '',
  note = '',
  children,
  ...rest
}) => {
  const showNote = !error && note;
  return (
    <FormGroup className={className} {...rest}>
      {title && <Label htmlFor={id}>{title}</Label>}
      {children}
      {showNote && (
        <Text
          className={classnames(classNames.inputField.note)}
          color={TEXT_COLOR.MUTED}
          type={TEXT_TYPE.SMALL}
        >
          {note}
        </Text>
      )}
      {error && <FormError>{error}</FormError>}
    </FormGroup>
  );
};
