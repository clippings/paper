import React from 'react';
import classnames from 'classnames';
import classNames from '../../core/config/ClassNames';
import { ToastInterface } from './interfaces/ToastType';

export const Toast: React.FunctionComponent<ToastInterface> = ({ children, show }) => (
  <div className={classnames(classNames.toast.container, { [classNames.toast.show]: show })}>{children}</div>
);
