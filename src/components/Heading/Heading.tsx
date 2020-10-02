import React from 'react';
import { HeadingPropsType } from './types/HeadingPropsType';
import classNames from '@core/config/ClassNames';

export const Heading: React.FunctionComponent<HeadingPropsType> = ({
  children = null,
  type,
  className = '',
}) => <span className={`${classNames.heading[type]} ${className}`}>{children}</span>;
