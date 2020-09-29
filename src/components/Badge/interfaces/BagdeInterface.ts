import { BADGE_TYPE } from '../enums/BadgeTypeEnum';
import { BADGE_SIZE } from '../enums/BadgeSizeEnum';
import { ComponentInterface } from '@paper/core/interfaces/ComponentInterface';

export interface BadgeInterface extends ComponentInterface {
  type?: BADGE_TYPE;
  className?: string;
  size?: BADGE_SIZE;
}
