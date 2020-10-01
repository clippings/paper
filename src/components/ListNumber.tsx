import React from 'react';
import classNames from '../core/config/ClassNames';
import { ComponentType } from '../core/interfaces/ComponentType';

export const ListNumber: React.FunctionComponent<ComponentType> = ({ children = null }) => (
  <ol className={classNames.listNumber.container}>{children}</ol>
);
