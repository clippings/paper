import React from 'react';
import { createComponentClassName } from '../utils/classNames';
export const HEADING_TYPES = {
  DEFAULT: 'default',
};
const classNames = {
  [HEADING_TYPES.DEFAULT]: createComponentClassName('heading', 'default'),
};
type HeadingProps = {
  type: any;
  className?: string;
};
export const Heading: React.FunctionComponent<HeadingProps> = ({ children, type, className }) => (
  <span className={`${classNames[type]} ${className}`}>{children}</span>
);
Heading.defaultProps = {
  className: '',
};
