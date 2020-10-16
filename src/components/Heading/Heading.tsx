import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { HeadingPropsType } from './types/HeadingPropsType';

export const Heading: React.FunctionComponent<HeadingPropsType> = ({
  children = null,
  type,
  className,
  ...rest
}) => (
  <span
    className={classnames(
      classNames.heading.container,
      className,
      type && classNames.heading[type]
    )}
    {...rest}
  >
    {children}
  </span>
);
