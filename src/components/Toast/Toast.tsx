import React from 'react';
import classnames from 'classnames';
import classNames from '../../core/config/ClassNames';
import { ToastPropsType } from './types/ToastPropsType';

export const Toast: React.FunctionComponent<ToastPropsType> = ({ children, show }) => (
  <div className={classnames(classNames.toast.container, { [classNames.toast.show]: show })}>
    {children}
  </div>
);
