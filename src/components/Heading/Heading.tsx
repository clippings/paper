import React from 'react';
import { HeadingInterface } from './interfaces/HeadingInteface';
import classNames from '../../core/config/ClassNames';

export const Heading: React.FunctionComponent<HeadingInterface>  = ({ children, type, className = '' }) => (
  <span className={`${classNames.heading[type]} ${className}`}>{children}</span>
);
