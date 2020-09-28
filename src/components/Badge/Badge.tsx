import React from 'react';
import { BADGE_TYPE } from './enums/BadgeTypeEnum';
import { BADGE_SIZE } from './enums/BadgeSizeEnum';
import classNames from '../../core/config/ClassNames';
import { BadgeInterface } from './interfaces/BagdeInterface';

export const Badge: React.FunctionComponent<BadgeInterface> = ({
  className = '',
  type = BADGE_TYPE.UNSPECIFIED,
  size = BADGE_SIZE.SMALL,
  children,
}) => (
  <span className={`${classNames.badge[type]} ${classNames.badge[size]} ${className}`}>
    {children}
  </span>
);
