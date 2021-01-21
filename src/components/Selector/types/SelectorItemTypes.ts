import { AVATAR_SHAPE } from '../../Avatar/enums/AvatarShapeEnum';
import { ICON } from '../../Icon/enums/IconEnum';

export type SelectorItemType = {
  className?: string;
  avatar?: string;
  avatarShape?: AVATAR_SHAPE;
  icon?: ICON;
  text: string;
  subText?: string;
  addition?: string;
};
