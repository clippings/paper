import React from 'react';
import classNames from '@core/config/ClassNames';
import classnames from 'classnames';
import { OverlayPropsType } from './types/OverlayPropsType';

export const Overlay: React.FunctionComponent<OverlayPropsType> = ({
  children = null,
  className = '',
  content = null,
  zIndex = 1050,
  open = false,
}) => (
  <div className={classnames(classNames.overlay.container)}>
    {children}
    <div
      className={classnames(className, classNames.overlay.content, {
        [classNames.overlay.open]: open,
      })}
      style={{ zIndex }}
    >
      {content}
    </div>
  </div>
);
