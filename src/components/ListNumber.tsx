import React from 'react';
import classNames from '../core/config/ClassNames';
import { ComponentInterface } from '../core/interfaces/ComponentInterface';

export const ListNumber: React.FunctionComponent<ComponentInterface> = ({ children }) => (
  <ol className={classNames.listNumber.container}>{children}</ol>
);
