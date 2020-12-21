import React, { forwardRef, RefObject } from 'react';
import { BADGE_TYPE } from './enums/BadgeTypeEnum';
import { BADGE_SIZE } from './enums/BadgeSizeEnum';
import classNames from '@core/config/ClassNames';
import { BadgeInterface } from './types/BagdePropsType';

export const Badge: React.FunctionComponent<BadgeInterface> = forwardRef(
  (
    {
      className = '',
      type = BADGE_TYPE.UNSPECIFIED,
      size = BADGE_SIZE.SMALL,
      children = null,
      ...rest
    },
    ref: RefObject<HTMLInputElement>
  ) => (
    <span
      ref={ref}
      className={`${classNames.badge[type]} ${classNames.badge[size]} ${className}`}
      {...rest}
    >
      <span>Badge</span>
      {children}
    </span>
  )
);
