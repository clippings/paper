import React from 'react';
import { createClassName } from '../utils/classNames';
const classNames = {
  container: createClassName('list'),
};
export const List: React.FunctionComponent<{}> = ({ children }) => (
  <div className={classNames.container}>{children}</div>
);
List.defaultProps = {
  children: null,
};
