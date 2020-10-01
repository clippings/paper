import React from 'react';
import '../../assets/scss/components.scss';
import classNames from '../../core/config/ClassNames';
import { TextPropsType } from './types/TextPropsType';

export const Text: React.FunctionComponent<TextPropsType> = ({
  children,
  type,
  className = '',
}) => <span className={`${classNames.text[type]} ${className}`}>{children}</span>;
