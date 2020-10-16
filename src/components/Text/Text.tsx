import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { TextPropsType } from './types/TextPropsType';
import '../../assets/scss/components.scss';

export const Text: React.FunctionComponent<TextPropsType> = ({ children, type, className }) => (
  <span className={classnames(classNames.text.container, className, type && classNames.text[type])}>
    {children}
  </span>
);
