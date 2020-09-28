import { BADGE_TYPE } from '../enums/BadgeTypeEnum';
import { BADGE_SIZE } from '../enums/BadgeSizeEnum';

export interface BadgeInterface {
  type?: BADGE_TYPE;
  className?: string;
  size?: BADGE_SIZE;
}
