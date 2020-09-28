import React from 'react';
import classNames from '../../core/config/ClassNames';
import { PopoverInterface } from './interfaces/PopoverInterface';

export const PopoverBlock: React.FunctionComponent<PopoverInterface> = ({ children = null, className = '', ...rest }) => (
  <li className={`${classNames.popover.block} ${className}`} {...rest}>
    {children}
  </li>
);
