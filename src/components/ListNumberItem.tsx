import React from 'react';
import classNames from '@core/config/ClassNames';
import { ComponentType } from '@core/interfaces/ComponentType';

export const ListNumberItem: React.FunctionComponent<ComponentType> = ({ children = null }) => (
  <li className={classNames.listNumberItem.container}>{children}</li>
);
