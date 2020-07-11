import React from 'react';
import { createComponentClassName } from '../utils/classNames';

export const BADGE_TYPES = {
  UNSPECIFIED: 'unspecified',
  SUCCESS: 'success',
  WARNING: 'warning',
};
export const BADGE_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
};

const classNames = {
  [BADGE_TYPES.UNSPECIFIED]: createComponentClassName('badge', 'unspecified'),
  [BADGE_TYPES.SUCCESS]: createComponentClassName('badge', 'success'),
  [BADGE_TYPES.WARNING]: createComponentClassName('badge', 'warning'),
  [BADGE_SIZES.SMALL]: createComponentClassName('badge', 'small'),
  [BADGE_SIZES.MEDIUM]: createComponentClassName('badge', 'medium'),
};
type BadgeProps = {
  type: 'unspecified' | 'success' | 'warning';
  className?: string;
  size: 'small' | 'medium';
};
export const Badge: React.FunctionComponent<BadgeProps> = ({
  className = '',
  type = BADGE_TYPES.UNSPECIFIED,
  size = BADGE_SIZES.SMALL,
  children,
}) => <span className={`${classNames[type]} ${classNames[size]} ${className}`}>{children}</span>;
