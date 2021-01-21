import { AVATAR_SHAPE } from '@paper/enums';
import { AVATAR_SIZE } from '@paper/enums';
import { IconPropsType } from '../../Icon/types/IconPropsType';
import React from 'react';

export type AvatarShapeType = {
  size?: AVATAR_SIZE;
  shape?: AVATAR_SHAPE;
};

export type AvatarPropsType = AvatarShapeType & {
  className?: string;

  src: string;
  alt?: string;
};

export type IconAvatarPropsType = IconPropsType &
  AvatarShapeType & {
    className?: string;
  };
