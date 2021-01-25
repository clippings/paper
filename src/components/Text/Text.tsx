import React from 'react';
import classnames from 'classnames';
import classNames from '@core/config/ClassNames';
import { TextPropsType } from './types/TextPropsType';
import '../../assets/scss/components.scss';

export const Text: React.FunctionComponent<TextPropsType> = ({
  children,
  type,
  color,
  className,
  ...rest
}) => (
  <span
    className={classnames(
      classNames.text.container,
      className,
      type && classNames.text[type],
      color && classNames.text[color]
    )}
    {...rest}
  >
    {children}
  </span>
);
