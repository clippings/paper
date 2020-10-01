import React from 'react';
import { BADGE_TYPE } from './enums/BadgeTypeEnum';
import { BADGE_SIZE } from './enums/BadgeSizeEnum';
import classNames from '../../core/config/ClassNames';
import { BadgeInterface } from './types/BagdePropsType';

export const Badge: React.FunctionComponent<BadgeInterface> = ({
  className = '',
  type = BADGE_TYPE.UNSPECIFIED,
  size = BADGE_SIZE.SMALL,
  children = null,
}) => (
  <span className={`${classNames.badge[type]} ${classNames.badge[size]} ${className}`}>
    {children}
  </span>
);
