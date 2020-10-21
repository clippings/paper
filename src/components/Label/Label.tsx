import classNames from '@core/config/ClassNames';
import React from 'react';
import classnames from 'classnames';
import { LabelPropType } from './types/LabelPropType';

export const Label: React.FunctionComponent<LabelPropType> = ({
  htmlFor = undefined,
  children = null,
  className = '',
  ...rest
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classnames(className, classNames.label.container)}
      {...rest}
    >
      {children}
    </label>
  );
};
