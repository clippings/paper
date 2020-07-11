import React from 'react';
import { createComponentClassName } from '../utils/classNames';
import '../assets/scss/components.scss';
export const TEXT_TYPES = {
  SMALL: 'small',
};
const classNames = {
  [TEXT_TYPES.SMALL]: createComponentClassName('text', 'small'),
};
type TextProps = {
  type: any;
  className?: string;
};
export const Text: React.FunctionComponent<TextProps> = ({ children, type, className }) => (
  <span className={`${classNames[type]} ${className}`}>{children}</span>
);
Text.defaultProps = {
  className: '',
};
