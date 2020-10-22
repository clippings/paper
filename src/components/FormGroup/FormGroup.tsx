import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { FormGroupPropType } from './types/FormGroupPropType';

export const FormGroup: React.FunctionComponent<FormGroupPropType> = ({
  children = null,
  className = '',
  hasError = false,
  ...rest
}) => {
  return (
    <div
      className={classnames(className, classNames.formGroup.container, {
        [classNames.formGroup.hasError]: hasError,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
