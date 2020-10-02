import React from 'react';
import { ICONS_COLOR } from '../enums/IconsColorEnum';
import { ICONS_SIZE } from '../enums/IconsSizeEnum';
import { ICON } from '../enums/IconEnum';

export type IconPropsType = {
  color?: ICONS_COLOR;
  size?: ICONS_SIZE;
  icon: ICON;
} & React.SVGProps<SVGSVGElement>;
