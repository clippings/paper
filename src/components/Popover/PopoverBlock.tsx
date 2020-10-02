import React from 'react';
import classNames from '@core/config/ClassNames';
import { PopoverPropsType } from './types/PopoverPropsType';

export const PopoverBlock: React.FunctionComponent<PopoverPropsType> = ({
  children = null,
  className = '',
  ...rest
}) => (
  <li className={`${classNames.popover.block} ${className}`} {...rest}>
    {children}
  </li>
);
