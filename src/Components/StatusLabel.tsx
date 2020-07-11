import React from 'react';
import { createClassName } from '../utils/classNames';
const classNames = {
  statusLabel: createClassName('status-label'),
};
export const StatusLabel: React.FunctionComponent<{}> = ({ children }) => (
  <div className={classNames.statusLabel}>{children}</div>
);
