import React from 'react';
import '../../assets/scss/components.scss';
import classNames from '../../core/config/ClassNames';
import { TextInterface } from './interfaces/TextInterface';

export const Text: React.FunctionComponent<TextInterface> = ({ children, type, className = '' }) => (
  <span className={`${classNames.text[type]} ${className}`}>{children}</span>
);
