import React from 'react';
import classNames from '@core/config/ClassNames';
import { ComponentType } from '@core/interfaces/ComponentType';

export const StatusLabel: React.FunctionComponent<ComponentType> = ({ children }) => (
  <div className={classNames.statusLabel.container}>{children}</div>
);
