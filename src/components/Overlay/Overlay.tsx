import React from 'react';
import classNames from '@core/config/ClassNames';
import classnames from 'classnames';
import { OverlayPropsType } from './types/OverlayPropsType';
import { OVERLAY_POSITIONING } from './enums/OverlayPositioningEnum';

export const Overlay: React.FunctionComponent<OverlayPropsType> = ({
  children = null,
  className = '',
  content = null,
  zIndex = 1050,
  positioning = OVERLAY_POSITIONING.CENTERED,
}) => (
  <div className={classnames(classNames.overlay.container, classNames.overlay[positioning])}>
    {children}
    <div
      className={classnames(className, classNames.overlay.content, classNames.overlay[positioning])}
      style={{ zIndex }}
    >
      {content}
    </div>
  </div>
);
