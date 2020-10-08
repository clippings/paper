import React from 'react';
import '../../assets/scss/components.scss';
import classNames from '@core/config/ClassNames';
import { TextPropsType } from './types/TextPropsType';
import { TEXT_TYPE } from '@paper/enums';

export const Text: React.FunctionComponent<TextPropsType> = ({
  children,
  type = TEXT_TYPE.DEFAULT,
  className = '',
}) => (
  <span className={`${classNames.text.container} ${classNames.text[type]} ${className}`}>
    {children}
  </span>
);
