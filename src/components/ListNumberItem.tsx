import React from 'react';
import classNames from '../core/config/ClassNames';
import { ComponentInterface } from '../core/interfaces/ComponentInterface';

export const ListNumberItem: React.FunctionComponent<ComponentInterface> = ({ children }) =>
  children ? (
    <li className={classNames.listNumberItem.container}>{children}</li>
  ) : null;
