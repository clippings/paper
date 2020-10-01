import React from 'react';
import classNames from '../core/config/ClassNames';
import { ComponentType } from '../core/interfaces/ComponentType';

export const List: React.FunctionComponent<ComponentType> = ({ children }) => (
  <div className={classNames.list.container}>{children}</div>
);
