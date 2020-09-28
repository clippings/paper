import React from 'react';
import classNames from '../core/config/ClassNames';
import { ComponentInterface } from '../core/interfaces/ComponentInterface';

export const StatusLabel: React.FunctionComponent<ComponentInterface> = ({ children }) => (
  <div className={classNames.statusLabel.container}>{children}</div>
);
