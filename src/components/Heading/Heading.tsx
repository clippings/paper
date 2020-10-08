import React from 'react';
import { HeadingPropsType } from './types/HeadingPropsType';
import classNames from '@core/config/ClassNames';
import { HEADING_TYPE } from '@paper/enums';

export const Heading: React.FunctionComponent<HeadingPropsType> = ({
  children = null,
  type = HEADING_TYPE.DEFAULT,
  className = '',
  ...rest
}) => (
  <span
    className={`${classNames.heading[type]} ${className} ${classNames.heading.container}`}
    {...rest}
  >
    {children}
  </span>
);
