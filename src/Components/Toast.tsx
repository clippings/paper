import React from 'react';
import classnames from 'classnames';
import { createClassName } from '../utils/classNames';
const classNames = {
  toast: createClassName('toast'),
  show: createClassName('toast__show'),
};
type ToastProps = {
  show: boolean;
};
const Toast: React.FunctionComponent<ToastProps> = ({ children, show }) => (
  <div className={classnames(classNames.toast, { [classNames.show]: show })}>{children}</div>
);
export default Toast;
