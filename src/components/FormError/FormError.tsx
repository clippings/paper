import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { FormErrorPropType } from './types/FormErrorPropType';

export const FormError: React.FunctionComponent<FormErrorPropType> = ({
  children = null,
  className = '',
  ...rest
}) => {
  return (
    children && (
      <div className={classnames(className, classNames.formError.container)} {...rest}>
        {children}
      </div>
    )
  );
};
