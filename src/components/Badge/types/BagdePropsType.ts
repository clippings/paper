import { BADGE_TYPE } from '../enums/BadgeTypeEnum';
import { BADGE_SIZE } from '../enums/BadgeSizeEnum';
import React from 'react';

export type BadgeInterface = {
  type?: BADGE_TYPE;
  className?: string;
  size?: BADGE_SIZE;
  children?: React.ReactNode | null;
};
