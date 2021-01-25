import { AVATAR_SHAPE } from '../../Avatar/enums/AvatarShapeEnum';
import { ICON } from '../../Icon/enums/IconEnum';
import React, { ReactNode } from 'react';
import { TextDescriptionPropsType } from '../../Text/types/TextPropsType';

export type SelectorItemType = {
  className?: string;
  avatar?: string;
  avatarShape?: AVATAR_SHAPE;
  icon?: ICON;
  description: TextDescriptionPropsType;
  addition?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};
