import { AVATAR_SHAPE, ICON, ICONS_COLOR } from '@paper/enums';
import { AVATAR_SIZE } from '@paper/enums';

export type AvatarShapeType = {
  size?: AVATAR_SIZE;
  shape?: AVATAR_SHAPE;
};

export type AvatarPropsType = AvatarShapeType & {
  className?: string;
  src: string;
  alt?: string;
};

export type IconAvatarPropsType = AvatarShapeType & {
  className?: string;
  color?: ICONS_COLOR;
  icon: ICON;
};
