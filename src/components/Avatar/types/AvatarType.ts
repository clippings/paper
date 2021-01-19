import { AVATAR_SHAPE } from '@paper/enums';
import { AVATAR_SIZE } from '@paper/enums';

export type AvatarPropsType = {
  className?: string;
  size?: AVATAR_SIZE;
  shape?: AVATAR_SHAPE;
  src: string;
  alt?: string;
};
