import React from 'react';
import classNames from '../core/config/ClassNames';
import { ComponentInterface } from '../core/interfaces/ComponentInterface';

export const List: React.FunctionComponent<ComponentInterface> = ({ children }) => (
  <div className={classNames.list.container}>{children}</div>
);
