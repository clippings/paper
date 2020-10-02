import React from 'react';
import classNames from '@core/config/ClassNames';
import { PopoverPropsType } from './types/PopoverPropsType';

export const PopoverMenu: React.FunctionComponent<PopoverPropsType> = ({
  children = null,
  className = '',
  ...rest
}) => (
  <ul className={`${classNames.popover.menu} ${className}`} {...rest}>
    {children}
  </ul>
);
