import React from 'react';
import classNames from '../../core/config/ClassNames';
import { PopoverInterface } from './interfaces/PopoverInterface';

export const PopoverMenu: React.FunctionComponent<PopoverInterface> = ({
  children = null,
  className = '',
  ...rest
}) => (
  <ul className={`${classNames.popover.menu} ${className}`} {...rest}>
    {children}
  </ul>
);
